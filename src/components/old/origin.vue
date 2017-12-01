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
    <h1 @click='getProduct(0)'>获取商品fetch</h1>
    <div>{{returnDataFetch}}</div>
    <h1 @click='getProduct(1)'>获取商品http</h1>
    <div>{{returnDataHttp}}</div>
    <h1 @click='getProduct(2)'>获取商品axi</h1>
    <div>{{returnData1}}</div>
    <h1 @click='getProduct(3)'>获取商品axi form get</h1>
    <form id="axiform">
      <input type="text" name="categoryId" value="187eef3c4525485493396aa3340da7c8">
      <input type="text" name="brandId" value="">
      <input type="text" name="productName" value="">
      <input type="text" name="currentPage" value="1">
      <input type="text" name="showCount" value="1">
      <input type="text" name="type" value="1">
      <input type="text" name="shopId" value="">
      <input type="text" name="" value="">
      <input type="text" name="" value="">
    </form>
    <div>{{returnDataForm}}</div>
    <h1 @click='getProduct(4)'>获取商品axi form post</h1>
    <form id="axiform2">
      <input type="text" name="categoryId" value="187eef3c4525485493396aa3340da7c8">
      <input type="text" name="brandId" value="">
      <input type="text" name="productName" value="">
      <input type="text" name="currentPage" value="1">
      <input type="text" name="showCount" value="1">
      <input type="text" name="type" value="1">
      <input type="text" name="shopId" value="">
      <input type="text" name="" value="">
      <input type="text" name="" value="">
    </form>
    <div>{{returnDataForm2}}</div>

    <h1 @click='getFL()'>获取分类axi post</h1>
    <div>{{returnData2}}</div>
    <h1 @click='lalert()'>layer.alert</h1>
  </div>
</template>
<style scoped>
h1{ font-size:24px; width:300px; margin:30px auto; cursor:pointer;}
</style>

<script>
// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import Qs from 'qs' 
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Vue.use(VueAxios, axios)

import Qs from 'qs'//给http post 请求使用
import axiosjs from '../../fetch/axios'
export default {
  name: 'origin',
  data () {
    return {
      msg: '产地追溯get',
      returnData:{},
      returnData1:{},
      returnData2:{},
      returnDataHttp:{},
      returnDataFetch:{},
      returnDataForm:{},
      returnDataForm2:{}
    }
  },
  mounted:function(){

  },
  methods:{
      // ,
      // {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    fn:function(){
      var _this=this;
      //  this.$http.get("/SFJ_M/indexPage/getIndexAdList?key=1&type=1&pageType=1").then((response)=>{
      //               console.log(response);
      //               _this.returnData=response;
      //  }).catch()
      this.axi.get("/SFJ_M/indexPage/getIndexAdList?key=1&type=1&pageType=1"
      ).then((response)=>{
        console.log(response);
        _this.returnData=response;
      }).catch()

      // this.axi.post(
      //   "/SFJ_M/indexPage/getIndexAdList",
      //   {
      //     key:1,
      //     type:1,
      //     pageType:1
      //   }
      // ).then((response)=>{
      //   console.log(response);
      //   _this.returnData=response;
      // }).catch()
    },
    getProduct:function(param){
      var _this=this;
      if(param==0){
        fetch("/SFJ_M/product/findProductList",{
          method:"post",
          headers:{"Content-Type": "application/x-www-form-urlencoded"},
          body:{
            categoryId:"187eef3c4525485493396aa3340da7c8",
            brandId:"",
            productName:"",
            currentPage:1,
            showCount:1,
            type:1,
            shopId:""
          }
        }
       )
       .then((response)=>{
        console.log(response.data);
        _this.returnDataFetch=response.data;
       })
       .catch(response=>{
         alert("fetch 报错了");
       })
      }else if(param==1){
        this.$http.post("/SFJ_M/product/findProductList",
          Qs.stringify({
            categoryId:"187eef3c4525485493396aa3340da7c8",
            brandId:"",
            productName:"",
            currentPage:1,
            showCount:1,
            type:1,
            shopId:""
            })
       ,
         { headers:{"Content-Type": "application/x-www-form-urlencoded"}}
       )
       .then((response)=>{
        console.log(response.data);
        _this.returnDataHttp=response.data;
       })
       .catch(response=>{
         alert("http post 报错了");
       })
      }else if(param==2){
        this.axi.post("/SFJ_M/product/findProductList",{
            categoryId:"187eef3c4525485493396aa3340da7c8",
            brandId:"",
            productName:"",
            currentPage:1,
            showCount:2,
            type:1,
            shopId:""
        }
       )
       .then((response)=>{
        console.log(response);
        _this.returnData1=response;
       })
       .catch(response=>{
         alert("axi post 报错了");
       })
      }else if(param==3){
        console.log(JSON.stringify($("#axiform").serialize()));
        console.log($("#axiform").serialize());
        this.axi.get("/SFJ_M/product/findProductList?"+$("#axiform").serialize()
        )
        .then((response)=>{
          console.log(response);
          _this.returnDataForm=response;
        })
        .catch(response=>{
          alert("axi post 报错了");
        })
      }else if(param==4){
        //serializeObject app.vue中jquery拓展
        console.log($("#axiform").serializeObject());
        this.axi.post("/SFJ_M/product/findProductList",$("#axiform").serializeObject()
        )
        .then((response)=>{
          console.log(response);
          _this.returnDataForm2=response;
        })
        .catch(response=>{
          alert("axi post 报错了");
        })
      }
    },
    getFL:function(){
      var _this=this;
      this.axi.post(
        "/SFJ_M/product/getChildrenTypes",
        {params:'{typeId:"187eef3c4525485493396aa3340da7c8"}'}
      ).then((response)=>{
        console.log(response);
        _this.returnData2=response;
       }).catch(response=>{
         alert("系统报错啦");
       })
    },
    lalert:function(){
      //信息框
  layer.open({
    content: '移动版和PC版不能同时存在同一页面'
    ,btn: '我知道了'
  });
    }
  }
}

  require('../../assets/lib/layer/mobile/need/layer.css');
  // import '../assets/js/layer/mobile/layer.js'
  // import '../assets/js/layer/mobile/need/layer.css'
</script>
<style scoped>
  /*@import '../assets/js/layer/mobile/need/layer.css';  */
</style>
