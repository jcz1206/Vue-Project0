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
          <li v-for="item in cimg" v-bind:key="item">
            <a v-if="item.type===1" ><img v-bind:src="item.img" ></a>
            <div class="deputy-box" v-if="item.type===0" @click="toDetail">
              <div class="deputy active" v-for="item2 in item.child" v-bind:key="item2">
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

<style scoped>
  body{
    overflow:hidden;
  }
</style>
<script>
// import SuperSlide from "../assets/lib/jquery.SuperSlide.2.1.2.js";
export default {
  name: 'foods',
  data () {
    return {
      msg: '美食',
      cimg:[
        { img:"",
          type:0, 
          child:[
            {img2:require('../../assets/images/place/place01.jpg'),title:"肉蒸面1",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place02.jpg'),title:"肉蒸面2",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place03.jpg'),title:"肉蒸面3",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place04.jpg'),title:"肉蒸面4",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place02.jpg'),title:"肉蒸面4",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"}
          ] 
        },
        { img:"",
          type:0, 
          child:[
            {img2:require('../../assets/images/place/place01.jpg'),title:"肉蒸面1",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place02.jpg'),title:"肉蒸面2",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place03.jpg'),title:"肉蒸面3",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place04.jpg'),title:"肉蒸面4",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"},
            {img2:require('../../assets/images/place/place02.jpg'),title:"肉蒸面4",con:"当葱花恋上蒸面 ， 一场味觉的恋爱即可开演。它是主食也是硬菜 ，它需要稳火 ， 也需要细水 ，它的美味源于灶火 ，它就是肉蒸面 。"}
          ] 
        },
      ]
    }
  },
  mounted:function(){
      this.sliding();
      this.initImgh();
  },
  methods:{
      toDetail:function(){
          this.$router.push({path:'/foodDetail'})
      },
      sliding(){
         jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",delayTime:500,autoPlay:false, trigger:'click', vis:"auto"});
      },
      opendeputy:function (e){
        let $this=$(e.target);
        let boxw= $(".deputy-box").width();
        if($this.hasClass("close")){
          $this.removeClass("close");
          let curwmc= boxw*0.2;
          $this.closest(".deputy").addClass("ani");//.find("img").blur();
          $this.closest(".deputy-box").children(".deputy").stop().animate({"width":curwmc},1000,function(){
            $(this).removeClass("on min ani").removeAttr("style");
            // $this.closest(".deputy").next(".deputy").find(".open").focus();//.blur();
          });
        }else{
          $(".open").removeClass("close");
          $(".deputy").removeClass("on min ani");
          let curw=boxw*0.8;
          let curwm=boxw*0.05;
          $this.closest(".deputy").addClass("ani").stop().animate({"width":curw},1000,function(){$(this).addClass("on").removeClass("ani").removeAttr("style")})
          .siblings(".deputy").stop().animate({"width":curwm},1000,function(){$(this).addClass("min").removeAttr("style")});
          $this.addClass("close");
        }
      },
      initImgh:function(){        
          // $(window).load(function(){  $(".deputy img").width($(".slideBox .bd li").width()*0.8); });
          setTimeout(function(){  $(".deputy img").width(($(".slideBox .bd li").width()*0.8)); },300);
          $(window).resize(function(){
            setTimeout(function(){  
              $(".deputy img").width(($(".slideBox .bd li").width()*0.8)); 
            },100);
          });
        
      }
  }
}

</script>