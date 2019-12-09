import Vue from 'vue';
import VueRouter from 'vue-router';
import CheatSheet from '../views/CheatSheet.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/cheatSheet',
        name: 'cheatSheet',
        component: CheatSheet
    },
    {
        path: '/staff',
        name: 'staff',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "staff" */ '../views/Staff.vue')
    },
    {
        path: '/addBlog',
        name: 'addBlog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "staff" */ '../views/AddBlog.vue')
    },
    {
        path: '/getBlogs',
        name: 'getBlogs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "staff" */ '../views/GetBlogs.vue')
    }
];

const router = new VueRouter({
    routes
});

export default router;
