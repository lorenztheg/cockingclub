import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Importiere den Store
import axios from 'axios'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App)
const options = {
    position:'bottom-right',
}
app.use(router)
app.use(store)
app.use(Toast, options)

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