<template>
    <div id="index">
        <!--<headbar></headbar>-->
        <div>
            <header>
                <div class="header-wrap">
                    <form>
                        <span>南京站<i class="icon iconfont icon-xiala"></i></span>
                        <input type="search" class="search" @search="search()">
                    </form>
                </div>
            </header>
            <!--喇叭-->
            <div>

            </div>
            <!--轮播图-->
            <div class="swiper-container">
                <div class="swiper-wrapper" style="z-index:4;background-color: rgba(0,0,0,0);">
                    <a v-for="item in advert" :href="item.url" class="swiper-slide"><span :style="'background-image:url('+item.img+')'"></span></a>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!--分类-->
            <div class="category">
                <div v-for="item in category">
                    <a :href="item.url">
                    <div :style="'background-image:url('+item.img+')'"></div>
                    <span>{{item.title}}</span>
                    </a>
                </div>
            </div>
            <!--优惠活动-->
            <div class="txtMarquee-left">
			<!-- <div class="hd">
				<a class="next"></a>
				<a class="prev"></a>
			</div>
			<div class="bd">
				<div class="tempWrap" style="overflow:hidden; position:relative; width:654px"><ul class="infoList" style="width: 2180px; position: relative; overflow: hidden; padding: 0px; margin: 0px; left: -342px;"><li class="clone" style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">女友坚持警局完婚不抛弃</a><span>[11-11]</span></li>
					<li style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">中国打破了世界软件巨头规则</a><span>[11-11]</span></li>
					<li style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">施强：高端专业语言教学</a><span>[11-11]</span></li>
					<li style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">新加坡留学，国际双语课程</a><span>[11-11]</span></li>
					<li style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">高考后留学日本名校随你选</a><span>[11-11]</span></li>
					<li style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">教育培训行业优势资源推介</a><span>[11-11]</span></li>
					<li style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">女友坚持警局完婚不抛弃</a><span>[11-11]</span></li>
				<li class="clone" style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">中国打破了世界软件巨头规则</a><span>[11-11]</span></li><li class="clone" style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">施强：高端专业语言教学</a><span>[11-11]</span></li><li class="clone" style="float: left; width: 198px;"><a href="http://www.SuperSlide2.com" target="_blank">新加坡留学，国际双语课程</a><span>[11-11]</span></li></ul></div>
			</div> -->
		</div>
            <div>
            </div>
        </div>
        <footbar></footbar>
    </div>
</template>
<script>
import '../assets/lib/swiper-4.0.5/css/swiper.css'
import headbar from '@/components/headbar.vue'
import footbar from '@/components/footbar.vue'
// import {Swiper} from '@/assets/lib/swiper-4.0.5/js/swiper'
import {Swiper} from 'imports?jQuery=jquery!@/assets/lib/swiper-4.0.5/js/swiper.min'
// require('@/assets/lib/SuperSlide2.1-demo-00/default.css')
// import SuperSlide from '@/assets/lib/SuperSlide2.1-demo-00/jquery.SuperSlide.2.1.1'
export default {
  name: 'index',
  components: {
    // headbar,
    footbar
  },
  data(){//引入的vue.js 直接data:{}赋值
      return {
        trumpt:[
            {title:"",url:"",type:0},
            {title:"",url:"",type:0},
            {title:"",url:"",type:0},
            {title:"",url:"",type:0}
        ],
        advert:[
            {img:require("@/assets/images/banner1.jpg"),url:"#",type:0},
            {img:require("@/assets/images/banner2.jpg"),url:"#",type:0},
            {img:require("@/assets/images/banner3.jpg"),url:"#",type:0},
            {img:require("@/assets/images/banner4.jpg"),url:"#",type:0}
        ],
        category:[
            {title:"天猫",img:require("@/assets/images/category/1.png"),url:"https://www.tmall.com/?locate=icon-1&spm=a215s.7406091.icons.1&scm=2027.1.2.1000&force=m&wh_from=tbc#/main",type:0},
            {title:"聚划算",img:require("../assets/images/category/2.png"),url:"https://jhs.m.taobao.com/m/index.htm?locate=icon-2&spm=a215s.7406091.icons.2&scm=2027.1.2.1001",type:0},
            {title:"天猫国际",img:require("../assets/images/category/3.png"),url:"https://pages.tmall.com/wow/import/17151/tmallglobal?locate=icon-3&spm=a215s.7406091.icons.3&scm=2027.4.1.16",type:0},
            {title:"外卖",img:require("../assets/images/category/4.png"),url:"https://market.m.taobao.com/apps/pm/paimai/index.html?wh_weex=true&wx_navbar_transparent=true&data_prefetch=true&locate=icon-9&spm=a215s.7406091.icons.9&scm=2027.1.2.10060000",type:0},
            {title:"天猫超市",img:require("../assets/images/category/5.png"),url:"https://chaoshi.m.tmall.com/?locate=icon-5&spm=a215s.7406091.icons.5&scm=2027.1.2.1007&_ig=shoutao",type:0},
            {title:"天猫",img:require("@/assets/images/category/1.png"),url:"",type:0},
            {title:"聚划算",img:require("../assets/images/category/2.png"),url:"",type:0},
            {title:"天猫国际",img:require("../assets/images/category/3.png"),url:"",type:0},
            {title:"外卖",img:require("../assets/images/category/4.png"),url:"",type:0},
            {title:"天猫超市",img:require("../assets/images/category/5.png"),url:"",type:0}
        ],
        activity:[]  
      }
  },
  mounted:function(){
    // this.share();
    // this.$nextTick(function(){
        new Swiper('.swiper-container',{
            // loop : true,
            autoplay: 3000,
            pagination : {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            }
        });
        // jQuery(".txtMarquee-left").slide( { mainCell:".bd ul", autoPlay:true,effect:'leftMarquee',vis:3,interTime:50,opp:false,pnLoop:true,trigger:click,mouseOverStop:true  });
		
    // })
  },
  methods:{
    // share:function(){
    //   $('#share-3').share();
    // }
    search:()=>{
        layer.alert("搜索内容是"+$(event.currentTarget).val());
    }
  }
}
</script>
