import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/home/index.vue')
    },
    {
        path: '/albums',
        name: 'albums',
        component: () => import('@/pages/albums/index.vue')
    },
    {
        path: '*',
        name: 'full',
        component: () => import('@/pages/home/index.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        if (to.meta.scrollTop) {
            return { x: 0, y: 0 };
        }
    },
    routes
});

router.beforeEach(async (to: any, from: any, next: any) => {
    next();
});

export default router;
