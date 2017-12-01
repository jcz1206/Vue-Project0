<template>
  <div id="app">
    <toolbar></toolbar>
    <!--<img src="./assets/images/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/toolbar.vue'
import $ from 'jquery'
export default {
  name: 'app',
  components: {
    Toolbar
  }
}
</script>
<style scoped>
  @import './assets/css/reset.css';
  @import './assets/css/style.css';
</style>