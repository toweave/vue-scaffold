import axios from 'axios'
import store from '../store'
// axios.defaults.crossDomain = true
// axios.defaults.withCredentials = true

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
export default async function request (url, options) {
  store.commit({type: 'ACTIVE_LOADING', loading: true})
  const response = await axios(url, options)
  store.commit({type: 'ACTIVE_LOADING', loading: false})
  const data = checkStatus(response)
  return data.data
}
