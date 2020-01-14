import axios from '@/utli/axios.js'
export const login = (data) => {
    return axios({
        method: 'post',
        url: '/login',
        data
    })
}