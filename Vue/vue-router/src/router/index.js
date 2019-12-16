import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/page/home/index.vue';
import { APP_BAR_ICONS } from '@/constants';

Vue.use(VueRouter);

const routes = [
    /* 1. Set default page when redirect to unknown page */
    {
        path: '*',
        name: 'not-found',
        component: Home,
        meta: {
            navIcon: APP_BAR_ICONS.MENU
        }
    },

    /* 2. Root page */
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            navIcon: APP_BAR_ICONS.MENU
        }
    },

    /* 3. Navigate to a particular page when the given path starts with '/menuItem' */
    // You can use `this.$route.params.pathMatch` to see the path represents the asterisk (E.g. /menuItem1, i.e. '1' in this case)
    {
        path: '/menuItem*',
        name: 'menuItem',
        component: () => import('@/components/page/menuItem/index.vue'),
        meta: {
            navIcon: APP_BAR_ICONS.BACK
        }
    },

    /* 4. Standard; Path: /ninjas */
    {
        path: '/ninjas',
        name: 'ninjas',
        component: () => import('@/components/page/ninjas/index.vue'),
        meta: {
            navIcon: APP_BAR_ICONS.BACK
        }
    },

    {
        path: '/history',
        name: 'history',
        component: () => import('@/components/page/history/index.vue'),
        meta: {
            navIcon: APP_BAR_ICONS.BACK
        }
    },

    /* 5. Path: ninjas/:id E.g. /ninjas/a001 */
    {
        path: '/ninjas/:id',
        name: 'ninja',
        component: () => import('@/components/page/ninja/index.vue'),
        meta: {
            navIcon: APP_BAR_ICONS.BACK
        },

        /* 6. Nested outlet. Path: /ninjas/:id/profile */
        children: [
            /* Path: /ninjas/:id/profile */
            {
                name: 'profile',
                path: 'profile',
                component: () => import('@/components/page/profile/index.vue'),
                meta: {
                    navIcon: APP_BAR_ICONS.BACK
                }
            },

            /* Path: /ninjas/:id/post */
            {
                name: 'post',
                path: 'post',
                component: () => import('@/components/page/post/index.vue'),
                meta: {
                    navIcon: APP_BAR_ICONS.BACK
                }
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
