<template>
    <div class="content">
      <div class="fd mt-40">
      <h1>{{foodD.title}}</h1>
      <h2>{{foodD.time}}
        <div class="fdshare">
          <i class="icons-share">分享</i>
          <span class="split"></span>
          <i class="icons-heart2"></i>
          <span class="num">322</span>
          <!--<i class="fa fa-heart" aria-hidden="true">322</i>-->
              
          <div class="social-share" data-initialized="true">
            <div class="triangle-t"></div>
              <a href="#" class="social-share-icon icon-weibo"><span>新浪微博</span></a>
              <a href="#" class="social-share-icon icon-wechat"><span>微信</span></a>
              <a href="#" class="social-share-icon icon-qq"><span>腾讯QQ</span></a>
              <a href="#" class="social-share-icon icon-qzone"><span>QQ空间</span></a>
          </div>
        </div>
      </h2>
      <div class="fdcon" v-html="foodD.content"></div>
      </div>
    </div>
</template>
<style>
/*@import '../assets/font-awesome/css/font-awesome.min.css';*/
/* @import '@/assets/iconfont/style.css'; */
</style>
<script>
require('@/assets/iconfont/style.css')
export default {
  name: 'foodDetail',
  data () {
    return {
      msg: '美食详情',
      foodD:{
        title:"舌尖上的中国",
        time:"2017年06月23日",
        content:"《舌尖上的中国第二季》是中国第一次使用高清设备拍摄的美食类纪录片。<br> \
        这部记录片定位于“高端舌尖上的中国2舌尖上的中国2(2张) 美食类纪录片”，所涉及的美食区域十分广泛，包含中国30多个省区市，甚至还包括新加坡美食[4]  。<br> \
        陈晓卿受访时表示他们剧组拍摄时都没有曝光自己是舌尖上的中国剧组的身份，并表示导演都要亲自吃片中的每一道菜[5]  。<br> \
        而美食入选《舌尖》的四个标准是：“健康”，卤煮的食品不利于健康所以不能够在节目中出现、“真实”即是食物本身已昤好吃和有传承，不用特意用诗词给菜起名；<br> \
        “相对日常”，即大多数人能吃得到；和要“解馋”。[6] 《舌尖上的中国第二季》中每一集都不是根据食物来定主题，食物只是出发点，通过美食看中国社会。<br> \
        全片都是由分集导演根据确立了的分集主题再去找寻符合主题的人物故事拍摄。<br> \
        当每个分集主题确立后，分集导演都需要经过3个阶段才会进行拍摄：第一个阶段是“文案写作”阶段，即分集导演看大量有关该主题的书、调查、并写文案；第二个阶段是“调研”阶段是确定分集要有什么的美食需要拍摄， 总导演陈晓卿认为路上也是一个获得美食信息的过程，于是为了找寻美食出现在“舌尖”中，规定分集导演在“调研”时不能自己开车，必须要坐公共交通工具“调研”，以方便在不断与人交流。同时为了拍出一些相对日常，更多的人能够吃到的美食，对拍摄的食材的价格有所限制，陈晓卿在第二季时曾就指示导演只可拍当时物价为50块钱以下的食物；最后是根据单个美食去各个地方进行拍摄，并在拍摄地区寻找适合的人物以表达该种食物，承载这个地区的美食的人物故事拍摄。[7-8] ",
        collect:"322"
      }
    }
  },
  mounted:function(){
    this.wscroll();
  },
  methods:{
     wscroll:function(){
      //  $(window).scroll(function(){
      //    var supportPageOffset = window.pageXOffset !== undefined;  // 判断是否支持pageXOffset
      //    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");  // 判断渲染模式是不是标准模式
      //    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

      //    if(y==0){
      //      alert(1);
      //    }
      //  });
     }
  }
}

</script>