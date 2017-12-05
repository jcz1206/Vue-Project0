// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/assets/css/normalize.css';
import 'bootstrap/css/bootstrap.min.css'
// import './static/lib/bootstrap/css/bootstrap.min.css'
//将css 放在app前面，css的加载顺序就不会有问题了
import './assets/iconfonts/iconfont.css';
import App from './App'
import router from './router'
// import './assets/bootstrap/js/bootstrap.min.js'

// require('./assets/css/main.scss')
import '@/assets/css/main.scss'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})