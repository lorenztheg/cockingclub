import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/client/components/LoginForm.vue';
import UserDashboard from "@/client/components/UserDashboard.vue";
import RegisterForm from "@/client/components/RegisterForm.vue";
import MealPlanner from "@/client/components/MealPlanner.vue";
import ProfilePage from "@/client/components/ProfilePage.vue";



const routes = [
    {
        path: '/',
        name: 'LoginForm',
        component: LoginForm
    },
    {
        path: '/register',
        name: 'RegisterForm',
        component: RegisterForm
    },
    {
        path: '/dashboard',
        name: 'UserDashboard',
        component: UserDashboard
    },
    {
        path:'/planner',
        name: 'MealPlanner',
        component: MealPlanner
    },
    {
        path: '/profile/:id',
        name: 'ProfilePage',
        component: ProfilePage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
