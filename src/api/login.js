import request from '@/utils/request'
import axios from 'axios'

export function loginByUsername(username, password) {
  let urlParams = new URLSearchParams()
  urlParams.append('username', username)
  urlParams.append('password', password)

  // TODO 对密码文件进行md5处理
  return axios.post('/login', urlParams, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

// 根据token，获取用户详细信息
export function getUserInfo(token) {



  // return request({
  //   url: '/user/info',
  //   method: 'get',
  //   params: { token }
  // })
}

