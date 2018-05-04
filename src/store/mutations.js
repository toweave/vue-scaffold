import * as types from './mutation-types'

export default {
  [types.USER_NAME] (state, {
    userName
  }) {
    state.userName = userName
  },
  [types.ACTIVE_LOADING] (state, {
    loading
  }) {
    state.loading = loading
  },
  [types.ACTIVE_ALERT] (state, {
    alert
  }) {
    state.alert = alert
  },
  [types.SET_CONFIG] (state, {
    config
  }) {
    state.config = config
  }
}
