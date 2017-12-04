<template>
    <div id="slideBox" class="slideBox">
      <div class="hd">
        <ul>
          <li v-for="item in cimg" v-bind:key="item">
          </li>
        </ul>
      </div>
      <div class="bd">
        <ul>
          <!--<li><a href="javascript:;" target="_blank"><img src="../assets/images/banner01.jpg" ></a></li>
          <li>
            <div class="deputy-box">
              <div class="deputy">
                  <img src="../assets/images/food01.jpg" alt="">
                  <div class="one">
                    <div class="detail">
                      <h3>肉蒸面</h3>
                      <div class="padding-30-45 brief">
                      	<span>当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。</span>
                        <span>它是主食也是硬菜 ，它需要稳火 ， 也需要</span>
                        <span>细水 ，它的美味源于灶火 ，它就是肉蒸面 。</span>
                      </div>
                      	<a style="display: block;width:50px; height:50px" id="ppp">+</a>
                    </div>
                  </div>
              </div>
              <div class="deputy">
                  <img src="../assets/images/food02.jpg" alt="">
                  <h4 class="two"></h4>
                  <div class="tabody">
                 </div>
              </div>
              <div class="deputy">
                  <img src="../assets/images/food03.jpg" alt="">
                  <h4 class="three"></h4>
                  <div class="tabody">
                 </div>
              </div>
              <div class="deputy">
                  <img src="../assets/images/food04.jpg" alt="">
                  <h4 class="four"></h4>
                  <div class="tabody">
                 </div>
              </div>
              <div class="deputy">
                  <img src="../assets/images/food05.jpg" alt="">
                  <h4 class="five"></h4>
                  <div class="tabody">
                 </div>
              </div>
            </div>
          </li>
          <li><a href="javascript:;" target="_blank"><img src="../assets/images/banner01.jpg" ></a></li>
          <li><a href="javascript:;" target="_blank"><img src="../assets/images/banner01.jpg" ></a></li>
          <li><a href="javascript:;" target="_blank"><img src="../assets/images/banner01.jpg" ></a></li>
          <li><a href="javascript:;" target="_blank"><img src="/static/img/banner01.jpg" ></a></li>-->
          <li v-for="item in cimg" v-bind:key="item">
            <a v-if="item.type===1" ><img v-bind:src="item.img" ></a>
            <div class="deputy-box" v-if="item.type===0">
              <div class="deputy" v-for="item2 in item.child" v-bind:key="item2">
                  <img v-bind:src="item2.img2" alt="">
                  <div class="deputy-bg"></div>
                  <div class="deputy-con">
                    <div class="deputy-con-t">{{item2.title}}</div>
                    <div class="deputy-con-c">{{item2.con}}</div>
                    <i class="open" aria-hidden="true" @click="opendeputy($event)"></i>
                  </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
import SuperSlide from "../../assets/lib/jquery.SuperSlide.2.1.2.js";
export default {
  name: 'index',
  data () {
    return {
      msg: '首页',
      cimg:[
        // { img:require("../assets/images/banner01.jpg"),type:1 },
        // { img:"",
        //   type:0, 
        //   child:[
        //     {img2:require('../assets/images/banner01.jpg'),title:"肉蒸面1",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
        //     {img2:require('../assets/images/banner01.jpg'),title:"肉蒸面2",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
        //     {img2:require('../assets/images/banner01.jpg'),title:"肉蒸面3",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
        //     {img2:require('../assets/images/banner01.jpg'),title:"肉蒸面4",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
        //     {img2:require('../assets/images/banner01.jpg'),title:"肉蒸面4",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"}
        //    ] 
        // },
        { img:require("../../assets/images/banner01.jpg"),type:1 },
        // { img:require("../assets/images/place/place01.jpg"),type:1 },
        { img:require("../../assets/images/banner01.jpg"),type:1 },
        // { img:require("../assets/images/place/place01.jpg"),type:1 },
        { img:require("../../assets/images/banner01.jpg"),type:1 }
        // { img:require("../assets/images/place/place01.jpg"),type:1 }
      ]
    }
  },
  mounted:function(){
      this.sliding();
      // this.initImgh();
  },
  methods:{
      sliding(){
         jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",delayTime:500, autoPlay:true, trigger:'click', vis:"auto"});
      }
      // ,
      // opendeputy:function (e){
      //   let $this=$(e.target);
      //   if($this.hasClass("close")){
      //     $(".deputy").animate({"width":"20%"}).removeClass("on").removeClass("min");
      //     $this.removeClass("close");
      //   }else{
      //     $(".open").removeClass("close");
      //     $(".deputy").removeClass("on").removeClass("min");
      //     $this.closest(".deputy").animate({"width":"80%"}).addClass("on").siblings(".deputy").animate({"width":"5%"}).addClass("min");
      //     $this.addClass("close");
      //   }
      // }
      // ,
      // initImgh:function(){        
          // $(window).load(function(){  $(".deputy img").width($(".slideBox .bd li").width()*0.8); });
          // $(window).resize(function(){
          //   setTimeout(function(){  $(".deputy img").width($(".slideBox .bd li").width()*0.8); },500);
          // });
        
      // }
  }
}

</script>
<!--
<script>
// import jQuery from "./assets/lib/jquery.SuperSlide.2.1.2.js";
// jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",delayTime:500,autoPlay:false, trigger:'click', vis:"auto"});
</script>
-->