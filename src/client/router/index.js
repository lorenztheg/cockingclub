import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/client/components/LoginForm.vue';
import UserDashboard from "@/client/components/UserDashboard.vue";
import RegisterForm from "@/client/components/RegisterForm.vue";
import MealPlanner from "@/client/components/MealPlanner.vue";
import ProfilePage from "@/client/components/ProfilePage.vue";
import UpdateProfile from '@/client/components/UpdateProfile.vue';
import ImprintPage from '@/client/components/ImprintPage.vue';
import LegalPage from '@/client/components/LegalPage.vue';
import AboutUsPage from '@/client/components/AboutUsPage.vue';
import ContactPage from '@/client/components/ContactPage.vue';


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
        path: '/planner',
        name: 'MealPlanner',
        component: MealPlanner
    },
    {
        path: '/profile/:id',
        name: 'ProfilePage',
        component: ProfilePage
    },
    {
        path: '/update/:id',
        name: 'UpdateProfile',
        component: UpdateProfile
    },
    {
        path: '/imprint',
        name: 'ImprintPage',
        component: ImprintPage
    },
    {
        path: '/legal',
        name: 'LegalPage',
        component: LegalPage
    },
    {
        path: '/about',
        name: 'AboutUsPage',
        component: AboutUsPage
    },
    {
        path: '/contact',
        name: 'ContactPage',
        component: ContactPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
