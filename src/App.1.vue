<template>
  <div id="app">
    <toolbar></toolbar>
    <!--<img src="./assets/images/logo.png">-->
    <router-view></router-view>
    <footer>
      <div class="footbox">
        <span>版权所有©民间菜有限公司 苏icp备02****89号</span>
        <ul>
         <li>隐私政策 |</li>
         <li>使用条款 |</li>
         <li>联系我们 |</li>
         <li>关注我们</li>
         <div class="follow">
             <div id="share-3" data-sites="wechat"></div>
         </div>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
import Toolbar from './components/toolbar.vue'
import $ from 'jquery'
import './assets/lib/share/js/jquery.share.min.js'
export default {
  name: 'app',
  components: {
    Toolbar
  },
  mounted:function(){
    this.share();
  },
  methods:{
    share:function(){
      $('#share-3').share();
    }
  }
}
</script>
<style>
@import './assets/lib/share/css/share.min.css';
  @import './assets/css/reset.css';
  @import './assets/css/style.css';  
</style>