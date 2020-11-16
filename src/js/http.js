import axios from 'axios'
import router from '../router/index'
const baseURL = 'http://47.99.134.126:28019'

//请求拦截
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

//响应拦截
axios.interceptors.response.use(
  res => {
    if (res.data.resultCode) {
      switch (res.data.resultCode) {
        case 416:
          router.replace('/login')
      }
    }
    return res
  },
  err => {
    return Promise.reject(err)
  })


export default function (Vue) {
  Vue.prototype.$http = async function (parms) {
    const {
      method = "get",
        url,
        data
    } = parms

    let res = await axios({
      method,
      url: baseURL + url,
      data
    })
    return res
  }
}