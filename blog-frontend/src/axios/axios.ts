import axios from 'axios'
import Qs from 'qs'
import { resCallback } from './index'
import { getLocal } from '../utils/local'
const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000
})

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
instance.interceptors.request.use(config => {
    config.headers.Authorization = getLocal('token')
        if (config.method === 'post') {
        config.data = Qs.stringify(config.data)
    }
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(resCallback, error => {
    return Promise.reject(error)
})
export default instance