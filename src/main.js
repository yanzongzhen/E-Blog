// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'
import store from './store'
import VueCookie from 'vue-cookies'

Vue.use(iView)
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueCookie)

window.$cookies.config(60 * 60 * 24 * 3, '')

iView.LoadingBar.config({
  color: '#2db7f5',
  failedColor: '#ed4014',
  height: 3
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
