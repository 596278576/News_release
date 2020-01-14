import axios from '@/utli/axios.js'
export const category=(params)=>{
    return axios ({
        url:'/post',
        params
    })
}
export const lm=()=>{
    return axios ({
        url:'/category'
    })
}
export const publishPost = (data) => {
    return axios({
      method: 'post',
      url: '/post',
      data
    })
  }