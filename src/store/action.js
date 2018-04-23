import * as services from '../services/index'
import * as types from './mutation-types'
export default {
  async getUserInfo ({
    commit,
    state
  }) {
    let res = services;
    commit(types.GET_USER, {
      getUser: res
    })
  }
  // async getUserTest ({
  //   commit,
  //   state
  // }) {
  //   // commit(types.USER_INFO, {
  //   //   user: 'TEST'
  //   // })
  // }
}
