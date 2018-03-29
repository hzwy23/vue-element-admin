import axios from 'axios'
import { getToken } from '../auth'

axios.defaults.baseURL = process.env.BASE_API
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.timeout = 5000

// Add a request interceptor
axios.interceptors.request.use(function(config) {
  console.log('request config: => ', config)
  // 获取token信息
  config.headers.Authorization = getToken()
  // Do something before request is sent
  return config
}, function(error) {
  console.log('request error: => ', error)
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use(function(response) {
  console.log('response result: => ', response)
  // Do something with response data
  return response
}, function(error) {
  console.log('response error: => ', error)
  // Do something with response error
  return Promise.reject(error)
})

export default {}

