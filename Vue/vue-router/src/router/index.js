import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/page/home/index.vue';

Vue.use(VueRouter);

const routes = [
    /* 1. Set default page when redirect to unknown page */
    {
        path: '*',
        name: 'not-found',
        component: Home
    },

    /* 2. Root page */
    {
        path: '/',
        name: 'home',
        component: Home
    },

    /* 3. Navigate to a particular page when the given path starts with '/ninja' */
    // You can use `this.$route.params.pathMatch` to see the path represents the asterisk (E.g. /ninja-male, i.e. 'male' in this case)
    {
        path: '/ninja-*',
        name: 'retiredNinjas',
        component: () => import('@/components/page/retiredNinjas/index.vue')
    },

    /* 4. Standard; Path: /ninja */
    {
        path: '/ninjas',
        name: 'ninjas',
        component: () => import('@/components/page/ninjas/index.vue')
    },

    /* 5. Path: ninjas/:id E.g. /ninjas/a001 */
    {
        path: '/ninjas/:id',
        name: 'ninja',
        component: () => import('@/components/page/ninja/index.vue'),

        /* 6. Nested outlet. Path: /ninjas/:id/profile */
        children: [
            {
                name: 'profile',
                path: 'profile',
                component: () => import('@/components/page/profile/index.vue')
            },

            /* Path: /ninjas/:id/post */
            {
                name: 'post',
                path: 'post',
                component: () => import('@/components/page/post/index.vue')
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
