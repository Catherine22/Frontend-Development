import CheatSheet from '../views/CheatSheet.vue';

const routes = [
    {
        path: '/',
        redirect: './cheatSheet'
    },
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
        component: () => import(/* webpackChunkName: "addBlog" */ '../views/blogs/AddBlog.vue')
    },
    {
        path: '/getBlogs',
        name: 'getBlogs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "getBlogs" */ '../views/blogs/mixins/GetBlogs.vue')
    },
    {
        path: '/blogMixins',
        name: 'blogMixins',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "blogMixins" */ '../views/blogs/mixins/BlogMixins.vue')
    },
    {
        path: '/blog/:id',
        name: 'singleBlog',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "blogMixins" */ '../views/blogs/SingleBlog.vue')
    }
];

export default routes;
