import axios from 'axios'
import config from './config'
const httpFetch = axios.create(config)
httpFetch.interceptors.response.use(res => {
  return res;
}, error => {
  Promise.reject(error)
})

export default httpFetch