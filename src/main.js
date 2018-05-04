// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css'
import 'es6-promise/auto'
import './vendor/javascript'
import 'animate.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as directives from './directives'
import * as filters from './filters'
import plugin from './plugins'
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Button,
  Select
} from 'element-ui'
import './styles/element-variables.scss'
import './styles/other.scss'

import Alert from './components/Alert.vue'

Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key])
})
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(plugin)
Vue.use(Alert)
// Vue.use(ElementUI)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Select)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
