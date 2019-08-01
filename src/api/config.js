import axios from 'axios'
import service from './api'
import { Toast } from 'vant'

const Token = sessionStorage.getItem('token')

let instance = axios.create({
  baseURL: 'http://localhost:8080/api',
  timeout: 1000,
  headers: {
    Token
  }
})
const Http = {}

for (let key in service) {
  let api = service[key]
  Http[key] = async function (
    params,
    isFormData = false,
    config = {}
  ) {
    let newParams = {}
    if (params && isFormData) {
      newParams = new FormData()
      for (let i in params) {
        newParams.append(i, params[i])
      }
    } else {
      newParams = params
    }

    let response = {}
    if (api.method === 'put' || api.method === 'post' || api.method === 'patch') {
      try {
        response = await instance[api.method](api.url, newParams, config)
      } catch (err) {
        response = err
      }
    } else {
      config.params = newParams
      try {
        response = await instance[api.method](api.url, config)
      } catch (err) {
        response = err
      }
    }
    return response
  }
}

instance.interceptors.request.use(config => {
  Toast.loading({
    mask: false,
    duration: 0, // 一直存在
    forbidClick: true, // 禁止点击
    message: '加载中...'
  })
  return config
}, () => {
  // 请求错误
  Toast.clear()
  Toast('请求错误，请求稍后重试')
})
// 响应拦截器
instance.interceptors.response.use(res => {
  // 请求成功
  Toast.clear()
  return res.data
}, () => {
  Toast.clear()
  Toast('请求错误，请求稍后重试')
})

export default Http
