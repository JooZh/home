// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Alert, Confirm, Toast} from 'wc-messagebox'
import 'wc-messagebox/style.css'
import App from './App'
import router from './router'
import 'src/assets/css/animate.css'
import 'src/assets/css/font-awesome.css'
import 'src/assets/css/reset.css'
import 'src/assets/css/layout.css'
// import Bus from 'src/assets/js/bus'

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
window.addEventListener('load', function () {
  vm.$router.push({path: '/'})
})
window.addEventListener('popstate', function () {
  window.location.reload()
  // Bus.$emit('changeRouter',{index: 1})
})
