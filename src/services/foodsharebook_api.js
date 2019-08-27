import axios from "axios";

export const api = axios.create({
    baseURL: 'https://foodsharebook.herokuapp.com/api/v1/',
    //baseURL: 'http://localhost:5000/api/v1/',
    headers: { 
        'Content-Type' : 'application/json',
        'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NjczNzMwMzUsImlzcyI6Imlzc3Vlcl9uYW1lIiwiYXVkIjoiY2xpZW50In0.Fd_bssfmM-lyRzlX6b2bCDq9mHxkkqY-4mWuCVT6SD0'
    }    
})

export default api;