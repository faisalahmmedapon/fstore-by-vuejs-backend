import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue'),
                },
                {
                    path: '/categories',
                    name: 'categories',
                    component: () => import('@/views/pages/Category.vue'),
                },
                {
                    path: '/products',
                    name: 'products',
                    component: () => import('@/views/pages/Products.vue'),
                },
            ]
        },
    ]
});

export default router;
