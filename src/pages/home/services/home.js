import { PAGE_SIZE } from '../constants'
import {request, requestNoLoading} from '../../../utils/request'

// http://data.yiguo.com/message/list?username=lizi&status=
export function fetch ({page = ''}) {
  return request(`http://data.yiguo.com/message/list?username=${name}&status=${PAGE_SIZE}`)
}

export function fetchNoLoading ({page = ''}) {
  return requestNoLoading(`http://data.yiguo.com/message/list?username=${name}&status=${PAGE_SIZE}`)
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
