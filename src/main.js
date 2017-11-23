// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from './vue-resource'

// import './assets/css/base.css'
import './assets/css/footer.css'
import './assets/js/jquery.js'
import './assets/js/00-footer.js'


// import Index from '@/components/Index'
// import Hello from '@/components/Hello'
// import Header from '@/components/Header'
// import Footer from '@/components/Footer'
// import Ershoufang from '@/components/Ershoufang'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
