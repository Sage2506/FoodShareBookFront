import axios from "axios";

export const api = axios.create({
    baseURL: 'https://foodsharebook.herokuapp.com/api/v1/',
    headers: { 'Content-Type' : 'application/json'}
})

export default api;