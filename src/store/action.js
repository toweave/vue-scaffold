import * as types from './mutation-types'
export default {
  async getUserName ({
    commit,
    state
  }, data) {
    console.log(7, state, data)
    commit(types.USER_NAME, {
      userName: data.userName
    })
  }
  // async getUserTest ({
  //   commit,
  //   state
  // }) {
  //   // commit(types.SET_CONFIG, {
  //   //   config: 'config'
  //   // })
  // }
}
