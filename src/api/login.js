import request from '@/utils/request'
import axios from 'axios'
import crypto from 'crypto-js'

export function loginByUsername(username, password) {
  const urlParams = new URLSearchParams()
  urlParams.append('username', username)
  urlParams.append('password', crypto.MD5(password))

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
// delete by hzwy23
// 暂时不需要使用这个功能
// export function getUserInfo(token) {
//   // return axios.get('/user/info', {
//   //   params: {
//   //     token
//   //   }
//   // })
// }
