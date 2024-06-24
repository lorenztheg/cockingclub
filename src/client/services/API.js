import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8085/',
});

// Füge den Token zu jeder Anfrage hinzu, wenn vorhanden
API.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default API;