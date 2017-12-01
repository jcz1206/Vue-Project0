       function initialize() {
           var locity = new BMap.LocalCity();
           locity.get(lcity)

           function lcity(r) {
               var cityName = r.name;
               map.setCenter(cityName, 12); //定位当前城市
               console.log("当前城市是：" + cityName);
           }

           //    var geolocation = new BMap.Geolocation();
           //    geolocation.getCurrentPosition(function(r) {
           //        if (this.getStatus() == BMAP_STATUS_SUCCESS) {

           //            var geoc = new BMap.Geocoder();
           //            geoc.getLocation(r.point, function(r) {
           //                var addComp = r.addressComponents;
           //                console.log(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
           //            });
           //            // var mk = new BMap.Marker(r.point);
           //            // // map.addOverlay(mk);
           //            // // map.panTo(r.point);
           //            // console.log('您的位置：' + r.point.lng + ',' + r.point.lat);
           //        } else {
           //            console.log('failed' + this.getStatus());
           //        }
           //    }, {
           //        enableHighAccuracy: true
           //    })
       }

       function loadScript() {
           var script = document.createElement("script");
           script.src = "http://api.map.baidu.com/api?v=2.0&ak=您的密钥&callback=initialize"; //此为v2.0版本的引用方式  
           // http://api.map.baidu.com/api?v=1.4&ak=您的密钥&callback=initialize"; //此为v1.4版本及以前版本的引用方式  
           document.body.appendChild(script);
       }

       window.onload = loadScript;