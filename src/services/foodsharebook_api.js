import axios from "axios";

export const api = axios.create({
  baseURL: true ? 'https://foodsharebook.herokuapp.com/api/v1/' : 'http://localhost:5000/api/v1/',
  headers: {
    'Content-Type' : 'application/json',
  }
})

export default api;