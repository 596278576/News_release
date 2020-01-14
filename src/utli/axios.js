import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token=localStorage.getItem('ht_token')
    if(token){
        config.headers.Authorization = token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default axios