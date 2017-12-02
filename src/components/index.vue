<template>
    <div id="index">
        <!--<headbar></headbar>-->
        <div>
            <header>
                <form>
                    <span>南京站<i class="icon iconfont icon-xiala"></i></span>
                    <input type="search" class="search" @search="search()">
                </form>
            </header>
            <!--喇叭-->
            <div>

            </div>
            <!--轮播图-->
            <div class="swiper-container">
                <div class="swiper-wrapper" style="z-index:4;background-color: rgba(0,0,0,0);">
                    <a href="" v-bind:for ="item in advert"><span v-attr:style="background-image:url('"+item.img+"')"></span></a>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <!--分类-->
            <div>

            </div>
            <!--优惠活动-->
            <div>

            </div>
        </div>
        <footbar></footbar>
    </div>
</template>

<script>
import headbar from '../components/headbar.vue'
import footbar from '../components/footbar.vue'
import Swiper from './assets/lib/swiper.js'
export default {
  name: 'index',
  components: {
    headbar,
    footbar
  },
  data:{
      trumpt:[
          {title:"",url:"",type:0},
          {title:"",url:"",type:0},
          {title:"",url:"",type:0},
          {title:"",url:"",type:0}
      ],
      advert:[
          {img:"1",url:"",type:0},
          {img:"2",url:"",type:0},
          {img:"3",url:"",type:0}
      ],
      catagory:[,
          {title:"",url:"",type:0},
          {title:"",url:"",type:0},
          {title:"",url:"",type:0}
          ],
      activity:[]
  },
  mounted:function(){
    // this.share();
  },
  methods:{
    // share:function(){
    //   $('#share-3').share();
    // }
    search:function(){
        layer.alert("搜索内容是"+$(event.currentTarget).val());
    }
  }
}
</script>
