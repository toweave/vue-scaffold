/**
 * Created by lizi on 2017/5/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  userName: '--',
  userPassword: '',
  activeIndex: null,
  userInfo: {},
  permissionCollection: {},
  loading: false,
  alert: {
    show: false,
    title: '',
    content: '',
    buttonLeft: '',
    buttonRight: '',
    functionLeft: null,
    functionRight: null
  },
  config: null,
  test: '',
  getUser: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
