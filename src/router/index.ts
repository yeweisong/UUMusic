import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

const routes= [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/home/home.vue')
    },{
        path: '/test',
        name: 'test',
        component: () => import('../views/test.vue')
    },


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
