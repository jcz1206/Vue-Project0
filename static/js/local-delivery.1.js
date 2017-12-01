    var map = null;
    var local = null;
    var curlocal = {
        residential: "",
        city: "南京市",
        district: "鼓楼区",
        point: { lat: 0, lng: 0 },
        province: "江苏省",
        address: ""
    };
    var allowCity = ["南京市", "镇江市", "滁州市"];

    function initialize() {
        map = new BMap.Map('map', { enableMapClick: false });
        //    map.centerAndZoom(new BMap.Point(121.491, 31.233), 15); //默认上海地区
        //    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 15); //默认北京地区
        //    map.centerAndZoom("南京", 12); // 初始化地图,设置城市和地图级别。
        var opts = { offset: new BMap.Size(150, 5) }
        map.addControl(new BMap.ScaleControl(opts)); //opts
        var opts2 = { type: BMAP_NAVIGATION_CONTROL_SMALL }
        map.addControl(new BMap.NavigationControl(opts2)); //地图平移缩放控件
        map.addControl(new BMap.OverviewMapControl()); //缩略地图控件
        //    map.addControl(new BMap.MapTypeControl());//地图类型控件
        map.addControl(new BMap.GeolocationControl());
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        //智能搜索
        local = new BMap.LocalSearch(map, { renderOptions: { map: map, autoViewport: true, selectFirstResult: false, pageCapacity: 5 } });
        //定位当前位置
        var geolocation = new BMap.Geolocation();

        var geoc = new BMap.Geocoder();
        if (JSON.stringify(curlocal) == "{}") {
            geolocation.getCurrentPosition(function(r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    map.panTo(r.point);
                    map.setCenter(r.point);
                    map.centerAndZoom(r.point, 15); //定位当前城市
                    geoc.getLocation(r.point, function(r) {
                        var addComp = r.addressComponents;
                        document.getElementById("lblcity").innerHTML = addComp.city;
                        circleSearch(r.point);
                    });
                } else {
                    console.log('failed' + this.getStatus());
                }
            }, {
                enableHighAccuracy: true
            })
        } else {
            //编辑地址时使用 
            document.getElementById("lblcity").innerHTML = curlocal.city;
            var dz2 = curlocal.city + curlocal.district + curlocal.address + curlocal.residential;
            console.log(dz2);
            geoc.getPoint(dz2, function(point) {
                if (point) {
                    console.log("0000000");
                    console.log(point);
                    console.log("1111111");
                    map.panTo(point);
                    map.setCenter(point);
                    map.centerAndZoom(point, 15);
                    circleSearch(point);
                } else {
                    console.log("-----");
                }
            }, curlocal.city);
        }

        //自动搜索功能，下拉框展示模糊搜索列表
        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }
        var myValue;
        //建立一个自动完成的对象
        var ac = new BMap.Autocomplete({ "input": "suggestId", "location": map });

        ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
            var str = "";
            var _value = e.fromitem.value;
            var value = "";
            if (e.fromitem.index > -1) {
                value = _value.province + _value.city + _value.district + _value.street + _value.business;
            }
            str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;

            value = "";
            if (e.toitem.index > -1) {
                _value = e.toitem.value;
                value = _value.province + _value.city + _value.district + _value.street + _value.business;
            }
            str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
            G("searchResultPanel").innerHTML = str;
        });


        ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
            var _value = e.item.value;
            myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
            G("searchResultPanel").innerHTML = "onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
            console.log(myValue);
            // setPlace();
        });

        function setPlace() {
            map.clearOverlays(); //清除地图上所有覆盖物
            local.search(myValue);
        }
        map.removeEventListener("click");
        map.addEventListener("dragend", function() { //鼠标拖动事件  
            console.log(map.getCenter);
            circleSearch(map.getCenter());
            console.log("中心坐标:new BMap.Point(" + map.getCenter().lng + "," + map.getCenter().lat + ")");
        });
        map.addEventListener("zoomend", function() {
            circleSearch(map.getCenter());
            console.log("中心坐标2:new BMap.Point(" + map.getCenter().lng + "," + map.getCenter().lat + ")");
        });
        var local2 = new BMap.LocalSearch(map, { renderOptions: { map: map, autoViewport: false, selectFirstResult: false, panel: "r-result", pageCapacity: 5 } });
        /** 范围搜索 */
        function circleSearch(pcenter) {
            map.clearOverlays(); //清除地图上所有覆盖物  
            var circle = new BMap.Circle(pcenter, 500, { fillColor: "blue", strokeWeight: 1, fillOpacity: 0.3, strokeOpacity: 0.3 });
            map.addOverlay(circle);
            local2.searchNearby(['小区', '住宅', '写字楼'], pcenter, 500);
        }
        local2.setInfoHtmlSetCallback(function(poi) {
            console.log(poi);
            // alert(poi.point.lat)
            // document.getElementById("r-result").addEventListener("click", console.log(poi.point));
        });

        // G("suggestId").addEventListener("keydown", function(e) { //搜索框的搜索事件
        //     if (e.keyCode == 13) {
        //         localSearcha();
        //     }
        // });
    }

    function localSearcha() {
        var l = document.getElementById("suggestId").value;
        map.clearOverlays(); //清除地图上所有覆盖物
        local.search(l);
    }

    function loadScript() {
        var script = document.createElement("script");
        script.src = "http://api.map.baidu.com/api?v=2.0&ak=您的秘钥&callback=initialize"; //此为v2.0版本的引用方式  
        // http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式  
        document.body.appendChild(script);
    }

    window.onload = loadScript;