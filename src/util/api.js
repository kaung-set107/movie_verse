import axios from 'axios';
const url = 'https://api.themoviedb.org/3/';

const apiInstance = axios.create({
    baseURL: url,
    headers: {
        'Content-Type': 'application/json'
    }
});

apiInstance.interceptors.request.use(config => {
    //const token = localStorage.getItem('token');
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjExMDczYTMwODhkNTJiNjRjOTFlYWFlZTBkMjY0ZSIsInN1YiI6IjY0ZWEwMDk2MDZmOTg0MDE0ZTY4YzQzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4fV5Px-zyGgBfA0G-tKi38LHA2wytPCRvmUwMEhxlHc'
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default apiInstance;
