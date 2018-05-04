import {request, requestNoLoading} from '../../../utils/request'
const option = {
  method: 'GET',
  // params: {
  //   ID: 12345
  // },
  responseType: 'json', // 默认的
  timeout: 6000
}

export function fetch ({page = 1, limit = 3}) {
  return request(`/users?_limit=${limit}&_page=${page}`, option)
}

export function fetchNoLoading ({page = 1, limit = 3}) {
  return requestNoLoading(`/users?_limit=${limit}&_page=${page}`)
}

export function remove (id) {
  return request(`/api/users/${id}`, {
    method: 'DELETE'
  })
}

export function patch (id, values) {
  return request(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(values)
  })
}

export function create (values) {
  return request('/api/users', {
    method: 'POST',
    body: JSON.stringify(values)
  })
}
