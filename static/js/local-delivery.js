    var map = null;
    var local = null;
    initialize();

    function initialize() {
        map = new BMap.Map('map');

        //    var locity = new BMap.LocalCity();
        //    locity.get(lcity)
        //    function lcity(r) {
        //        var cityName = r.name;
        //        map.setCenter(cityName, 12); //定位当前城市
        //        console.log("当前城市是：" + cityName);
        //    }

        //定位当前位置
        var geolocation = new BMap.Geolocation();

        var geoc = new BMap.Geocoder();
        geolocation.getCurrentPosition(function(r) {
            // console.log(r);
            if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                map.panTo(r.point);
                map.centerAndZoom(r.point, 15); //定位当前城市
                geoc.getLocation(r.point, function(r) {
                    var addComp = r.addressComponents;
                    document.getElementById("lblcity").innerHTML = addComp.city;
                    var dz = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
                    // console.log(dz);
                    var mk = new BMap.Marker(r.point);
                    if (dz.length > 0) {
                        mk.setLabel(new BMap.Label(dz, { "offset": new BMap.Size(10, -20) })); //标注说明
                    }
                    map.addOverlay(mk);
                    // var dz2 = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                    // local.search(dz2);
                    // document.getElementById("lblcity").innerHTML = dz2;
                });
            } else {
                console.log('failed' + this.getStatus());
            }
        }, {
            enableHighAccuracy: true
        })

        //    map.centerAndZoom(new BMap.Point(121.491, 31.233), 15); //默认上海地区
        //    map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 15); //默认北京地区
        //    map.centerAndZoom("南京", 12); // 初始化地图,设置城市和地图级别。
        var opts = { offset: new BMap.Size(150, 5) }
        map.addControl(new BMap.ScaleControl(opts)); //opts
        var opts2 = { type: BMAP_NAVIGATION_CONTROL_SMALL }
        map.addControl(new BMap.NavigationControl(opts2)); //地图平移缩放控件
        //    map.addControl(new BMap.OverviewMapControl());//缩略地图控件
        //    map.addControl(new BMap.MapTypeControl());//地图类型控件
        map.addControl(new BMap.GeolocationControl());
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放


        //自动搜索功能，下拉框展示模糊搜索列表
        // 百度地图API功能
        function G(id) {
            return document.getElementById(id);
        }
        var myValue;
        var ac = new BMap.Autocomplete( //建立一个自动完成的对象
            {
                "input": "suggestId",
                "location": map
            });

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

            setPlace();
        });

        function setPlace() {
            map.clearOverlays(); //清除地图上所有覆盖物
            local.search(myValue);
        }
        local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: myFun,
            onResultsHtmlSet: function(container) { //console.log(container.innerHTML) 
                // container = "";
            },
            onInfoHtmlSet: function(poi, html) {
                // html.innerHTML = "aaaa";
                // console.log(JSON.stringify(poi));
                // console.log(poi.title + "=====" + html.innerText);
            },
            renderOptions: {
                map: map,
                autoViewport: true,
                selectFirstResult: false,
                panel: "r-result",
                pageCapacity: 5
            }
        });

        function myFun(results) {
            console.log(results);
            // // var pp = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
            // var pp = results.getPoi(0).point; //获取第一个智能搜索的结果
            // map.centerAndZoom(pp, 18);
            // map.addOverlay(new BMap.Marker(pp)); //添加标注
            //可以得到搜索结果且搜索结果不为空 
            /*
                        if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                            //遍历结果第一页的点，自定义结果面板
                            for (var i = 0; i < results.getCurrentNumPois(); i++) {
                                var point = results.getPoi(i);
                                var siteName = results.getPoi(i).title;
                                var lng = results.getPoi(i).point.lng;
                                var lat = results.getPoi(i).point.lat;
                                var newPoint = new BMap.Point(lat, lng); //创建点坐标
                                addMarker(results, point, siteName);
                            }

                            function addMarker(results, point, siteName) {
                                // // var hospitalIcon = new BMap.Icon("Images/医院.bmp", new BMap.Size(100, 50), { offset: new BMap.Size(0, 0), imageOffset: new BMap.Size(50, 25) });
                                // // var bankIcon = new BMap.Icon("Images/银行.bmp", new BMap.Size(100, 50), { offset: new BMap.Size(0, 0), imageOffset: new BMap.Size(50, 25) });
                                // // var eateryIcon = new BMap.Icon("Images/餐馆.bmp", new BMap.Size(100, 50), { offset: new BMap.Size(0, 0), imageOffset: new BMap.Size(50, 25) });
                                // // var allIcon = new BMap.Icon("Images/site1_1.gif", new BMap.Size(100, 50), { offset: new BMap.Size(0, 0), imageOffset: new BMap.Size(50, 25) });
                                // var myIcon = "";
                                // if (results.keyword == "医院") { myIcon = hospitalIcon; } else if (results.keyword == "银行") { myIcon = bankIcon; } else if (results.keyword == "餐馆") { myIcon = eateryIcon; } else { myIcon = allIcon; }
                                // var marker = new BMap.Marker(point.point, { icon: myIcon }); //创建标注
                                var marker = new BMap.Marker(point.point); //创建标注
                                map.removeOverlay(marker);
                                var label = new BMap.Label(siteName, { "offset": new BMap.Size(10, -20) }); //标注说明
                                marker.setLabel(label);
                                label.setStyle({
                                    borderColor: "black",
                                    color: "#2565AC",
                                    cursor: "pointer"
                                });
                                marker.addEventListener("click", function(e) {
                                    label = new BMap.Label("当前位置：" + siteName + "\n经度：" + e.point.lng + "\n纬度：" + e.point.lat, { "offset": new BMap.Size(10, -20) }); //标注说明
                                    marker.setLabel(label);
                                    console.log("当前位置：" + siteName + "\n经度：" + e.point.lng + "\n纬度：" + e.point.lat);
                                }); //监听点击标注事件
                                marker.enableDragging(); //托拽标注
                                marker.addEventListener("dragend", function(e) {
                                    alert("当前位置：" + e.point.lng + "," + e.point.lat);
                                }); //监听托拽标注事件
                                map.addOverlay(marker); //将标注添加到地图中
                            }
                        }
                        */
        }
        G("suggestId").addEventListener("keydown", function(e) { //搜索框的搜索事件
            if (e.keyCode == 13) {
                localSearcha();
            }
        });
        // map.addEventListener("click", function(e) {
        //     var pt = e.point;
        //     geoc.getLocation(pt, function(rs) {
        //         var addComp = rs.addressComponents;
        //         alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
        //     });
        // });
        map.removeEventListener("click");
    }

    function localSearcha() {
        var l = document.getElementById("suggestId").value;
        map.clearOverlays(); //清除地图上所有覆盖物
        local.search(l);
    }

    /**
     * 初始化map和搜索结果列表面板
     */
    function addMap() {
        var winWidth = 400,
            winHeight = 400;
        // 获取窗口宽度
        if (window.innerWidth) {
            winWidth = window.innerWidth;
            winHeight = window.innerHeight;
        } else if ((document.body) && (document.body.clientWidth)) {
            winWidth = document.body.clientWidth;
            winHeight = window.innerHeight;
        }
        // console.log(winWidth);
        // document.getElementById("map").style.width = winWidth + "px";
        var mapdiv = document.createElement("div");
        mapdiv.id = "map";
        mapdiv.style.width = winWidth + "px";
        mapdiv.style.height = ((winHeight / 2) - 40) + "px";
        document.getElementById("mapdiv").appendChild(mapdiv);
        document.getElementById("r-result").style.height = (winHeight / 2) + "px";
        // loadScript();
    }

    // function loadScript() {
    //     var script = document.createElement("script");
    //     script.src = "http://api.map.baidu.com/api?v=2.0&ak=nR63w0BN5Ykfr3MNr11NbRNmiN0Ngx1s&callback=initialize"; //此为v2.0版本的引用方式  
    //     // http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式  
    //     document.body.appendChild(script);
    // }

    // window.onload = addMap;
    //    loadScript();