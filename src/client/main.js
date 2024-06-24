import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Importiere den Store
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(store)

// Füge den Token zu jeder Anfrage hinzu
axios.interceptors.request.use(
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

app.mount('#app')