import axios from 'axios'
const baseURL = 'http://47.99.134.126:28019'

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