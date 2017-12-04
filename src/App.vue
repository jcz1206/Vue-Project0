<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Toolbar from './components/old/toolbar.vue'
import $ from 'jquery'
import layer from './assets/lib/layer/mobile/layer.js'
// import './assets/lib/share/js/jquery.share.min.js'
export default {
  name: 'app',
  components: {
    // Toolbar
  },
  mounted:function(){
    // this.share();
  },
  methods:{
    // share:function(){
    //   $('#share-3').share();
    // }
  }
}
</script>
<style>
/*@import './assets/lib/share/css/share.min.css';*/
  /* @import './assets/css/normalize.css';
  @import './assets/iconfonts/iconfont.css';  */
</style>
<style lang="scss">
  // @import './assets/css/main.scss';  //这样能引入此css 但是svg文件无法解析 报错啦
</style>