// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'es6-promise/auto'
import './plugin/javascript'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import plugin from './plugin/plugin'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/other.css'

Vue.use(plugin)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
