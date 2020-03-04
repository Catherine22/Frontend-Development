import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

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
    routes
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
router.beforeEach((_to: any, _from: any, next: () => void) => {
    store.commit('setPageLoading', true);
    next();
});
router.afterEach(() => {
    store.commit('setPageLoading', false);
});

export default router;
