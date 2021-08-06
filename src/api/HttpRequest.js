import axios from "axios"

class HttpRequest {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }
  // 拦截器
  interceptors(instance, url) {
    // 请求拦截器
    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )
    // 响应拦截器
    instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        Promise.reject(error)
      }
    )
  }
  request(options) {
    // 创建一个axios实例
    const instance = axios.create()
    const config = {
      baseUrl: this.baseUrl,
      header: "application/x-www-form-urlencoded",
      timeout: 1000,
    }
    options = Object.assign(config, options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}

export default HttpRequest
