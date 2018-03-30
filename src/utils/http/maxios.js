import axios from 'axios'
import { getToken } from '../auth'

const maxios = axios.create({
  baseURL: process.env.MOCK_BASE_API,
  timeout: 5000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
})

// Add a request interceptor
maxios.interceptors.request.use(function(config) {
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
maxios.interceptors.response.use(function(response) {
  // Do something with response data
  return response
}, function(error) {
  console.log('response error: => ', error)
  // Do something with response error
  return Promise.reject(error)
})

export default maxios

