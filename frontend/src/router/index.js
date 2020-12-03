import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('../views/SignInPage'),
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: () => import('../views/SignUpPage'),
    },
    {
        path: '/my-projects',
        name: 'my-projects',
        component: () => import('../views/MyProjectsPage'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;