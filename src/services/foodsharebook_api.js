import axios from "axios";

export const api = axios.create({
  baseURL: false ? 'https://foodsharebook.herokuapp.com/api/v1/' : 'http://localhost:5000/api/v1/',
  headers: {
    'Content-Type' : 'application/json',
  }
})

export const api_get = args => api.get(`${args.path}?${ args.params ? new URLSearchParams(args.params).toString() : '' }`)
export default api;