import axios from 'axios'
import store from '../store'
// axios.defaults.crossDomain = true
// axios.defaults.withCredentials = true
// store.dispatch('getUserName', {
//   userName: 'Toweave-123'
// })
let debugCase = 999; // 1: 本地调试  2: 测试环境 3: 预览测试 999: 正式环境
let baseUrl = '';
switch (debugCase) {
  case 1: // 本地调试连接
    baseUrl = 'http://127.0.0.1:9090'
    break
  case 2: // 测试环境链接
    baseUrl = 'http://test.xxx.com'
    break
  case 999: // 正式环境
    baseUrl = 'http://jsonplaceholder.typicode.com'
    break
}
const baseAxios = axios.create({
  baseURL: baseUrl,
  timeout: 6000 // 60s 超时
  // params: {
  //   ID: 12345
  // },
  // withCredentials: false,
  // // headers: {
  //   'X-Custom-Header': 'foobar',
  //   'Authorization': '12345679',
  //   'X-Token': '12345679abc'
  // }
});

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 * @return {object}           An object containing either "data" or "err"
 */
export async function request (url, options) {
  store.commit({type: 'ACTIVE_LOADING', loading: true})
  const response = await baseAxios(url, options)
  store.commit({type: 'ACTIVE_LOADING', loading: false})
  const data = checkStatus(response)
  return data.data
}

export async function requestNoLoading (url, options) {
  const response = await baseAxios(url, options)
  const data = checkStatus(response)
  return data.data
}
