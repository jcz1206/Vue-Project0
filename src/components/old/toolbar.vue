<template>
  <!--<div class="toolbar">
    <i @click="add" class="add">add</i>
    <i @click="toggle" class="tooglefavorite">tooglefavorite</i>
    <i @click="del" class="delete">delete</i>
  </div>-->
  <header id="header" class="logo">
     <nav>
       <ul class="nav">
         <li><router-link to="/">首页</router-link></li>
         <li><router-link to="/brand">品牌</router-link></li>
         <li><router-link to="/foods">美食</router-link></li>
         <li><img src="../../assets/images/head.png"></li>
         <li><router-link to="/origin">产地追溯</router-link></li>
         <li><router-link to="/news">新闻资讯</router-link></li>
         <li><router-link to="/recruit">人才招聘</router-link></li>
       </ul>
     </nav>
   </header>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: '头部'
    }
  },
  methods: {
    add: function (n) {
      //  this.$router.go('/login');//其中login是你定义的一个路由模块
      //  itemshow = true;
      // Vue.set(item,'itemshow',true);
       this.$router.push({path:'/login'})
      // alert('add')
    },
    toggle: function () {
      alert('toggle')
    },
    del: function () {
      alert('del')
    }
  }
}

</script>
<style>
  .router-link-active{
    background-color: #078A53;
  }
</style>
