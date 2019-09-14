import Vue from 'vue'
import axios from 'axios'
import { Loading } from 'quasar'

const baseURL = 'https://swapi.co/api/'
const sw = axios.create({ baseURL })

sw.interceptors.request.use(config => {
  Loading.show()
  return config
})
sw.interceptors.response.use(resp => {
  Loading.hide()
  return resp
}, err => {
  Loading.hide()
  return Promise.reject(err)
})

Object.defineProperty(Vue.prototype, '$http', {
  get: () => sw
})
