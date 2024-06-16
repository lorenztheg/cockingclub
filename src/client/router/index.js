import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/client/components/LoginForm.vue';
import Login from '@/client/components/Login.vue';

const routes = [
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
