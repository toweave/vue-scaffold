import * as types from './mutation-types'

export default {
  [types.USER_NAME] (state, {
    userName
  }) {
    state.userName = userName
  },
  [types.USER_PASSWORD] (state, {
    userPassword
  }) {
    state.userPassword = userPassword
  },
  [types.USER_INFO] (state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  [types.PERMISSION_COLLECTION] (state, {
    permissionCollection
  }) {
    state.permissionCollection = permissionCollection
  },
  [types.SPOT_FIRE_URL] (state, {
    spotFireUrl
  }) {
    state.spotFireUrl = spotFireUrl
  },
  [types.ACTIVE_INDEX] (state, {
    activeIndex
  }) {
    state.activeIndex = activeIndex
  },
  [types.ACTIVE_LOADING] (state, {
    loading
  }) {
    state.loading = loading
  },
  [types.USER_TEST] (state, {
    test
  }) {
    state.test = test;
  },
  [types.GET_USER] (state, {
    getUser
  }) {
    state.getUser = getUser
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
