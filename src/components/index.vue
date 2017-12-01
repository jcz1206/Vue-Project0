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
            <div>

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
          {img:"",url:"",type:0},
           {img:"",url:"",type:0},
            {img:"",url:"",type:0}
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
