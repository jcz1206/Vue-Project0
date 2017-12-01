<template>
  <div class="login">
    <h1 @click='fn()'>{{ msg }}</h1>
    <!--<div>{{returnData}}</div>-->
    <div>{{returnData.retCode}}</div>
    <!--<div v-if="returnData.data.retCode=='1'">
      {{returnData.data.message}}
    </div>
    <div v-if="returnData.data.retCode!='1'">
    </div>-->
    <h1 @click='getProduct()'>获取商品</h1>
    <div>{{returnData1}}</div>
    <h1 @click='getFL()'>获取分类</h1>
    <div>{{returnData2}}</div>
    <h1 @click='lalert()'>layer.alert</h1>
  </div>
</template>
<style scoped>
h1{ font-size:24px; width:300px; margin:50px auto;}
</style>

<script>
import Vue from 'vue'
import axios from 'axios'

import VueAxios from 'vue-axios'
import Qs from 'qs' 
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.use(VueAxios, axios)
export default {
  name: 'brand',
  data () {
    return {
      msg: '品牌',
      returnData:{},
      returnData1:{},
      returnData2:{}
    }
  },
  mounted:function(){

  },
  methods:{
    fn:function(){
      var _this=this;
      //  this.$http.get("/SFJ_M/indexPage/getIndexAdList?key=1&type=1&pageType=1").then((response)=>{
      //               console.log(response);
      //               _this.returnData=response;
      //  }).catch()
      axios.post("/SFJ_M/indexPage/getIndexAdList",
      Qs.stringify({
          key: 1,
          type: 1,
          pageType: 1
      })
    ).then((response)=>{
          console.log(response.data);_this.returnData=response.data;
      }).catch()
    },
    getProduct:function(){
      var _this=this;
      axios.post("/SFJ_M/product/findProductList",
        Qs.stringify({
          categoryId:"187eef3c4525485493396aa3340da7c8",
          brandId:"",
          productName:"",
          currentPage:1,
          showCount:20,
          type:1,
          shopId:""
        })
      //   ,
      //  { headers:{'Content-Type': 'application/x-www-form-urlencoded'} }
       )
       .then((response)=>{
        console.log(response.data);
        _this.returnData1=response.data;
       })
       .catch()
    },
    getFL:function(){
      var _this=this;
      axios.post("/SFJ_M/product/getChildrenTypes",
        Qs.stringify({
          params:'{typeId:"187eef3c4525485493396aa3340da7c8"}'
        })
       )
       .then((response)=>{
        console.log(response);
        _this.returnData2=response;
       })
       .catch()
    },
    lalert:function(){
      // layer.alert("33333");
      //信息框
  layer.open({
    content: '方法名重名'
    ,btn: '我知道了啊'
  });
    }
  }
}

</script>
