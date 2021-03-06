import Vue from 'vue';
import VueRouter from 'vue-router';
import authService from '../services/auth/authService';

import UserDataProvider from '../components/guard/UserDataProvider';
import SocialAuthCallback from "../components/auth/SocialAuthCallback";

Vue.use(VueRouter);

const routes = [
    {
        component: UserDataProvider,
        path: '',
        children: [
            {
                path: '/sign-in',
                name: 'sign-in',
                component: () => import('../views/SignInPage'),
                meta: { guest: true }
            },
            {
                path: '/sign-up',
                name: 'sign-up',
                component: () => import('../views/SignUpPage'),
                meta: { guest: true }
            },
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('../views/DashboardPage'),
                meta: { user: true }
            },
            {
                path: '/',
                name: 'main',
                component: () => import('../views/MainPage'),
                meta: { guest: true }
            },
            {
                path: '/create-project',
                name: 'create-project',
                component: () => import('../views/CreateProject'),
                meta: { user: true}
            },
            {
                path: '/projects/:id',
                name: 'project-id',
                component: () => import('../views/Project'),
                meta: { user: true }
            }
        ]
    },
    {
        component: SocialAuthCallback,
        name: 'social-auth',
        path: '/social-auth/callback'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    const isGuestRoute = to.matched.some(record => record.meta.guest);
    const isUserRoute = to.matched.some(record => record.meta.user);

    if (isGuestRoute && authService.hasToken()) {
        next({ name: 'dashboard' });
        return;
    }

    if (isUserRoute && !authService.hasToken()) {
        next({ name: 'sign-in' });
        return;
    }

    if (isUserRoute && authService.hasToken()) {
        next({ path: to });
        return;
    }
    next({ path: to });
});

export default router;
