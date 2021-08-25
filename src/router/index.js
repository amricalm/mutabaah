//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'post.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/post/Index.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/post/Create.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/post/Edit.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard.index',
        component: () => import('@/views/dashboard/Index.vue')
    },
    {
        path: '/kelas',
        name: 'kelas.index',
        component: () => import('@/views/kelas/Index.vue')
    },
    {
        path: '/kelas/create',
        name: 'kelas.create',
        component: () => import('@/views/kelas/Create.vue')
    },
    {
        path: '/kelas/edit/:Kelas',
        name: 'kelas.edit',
        component: () => import('@/views/kelas/Edit.vue')
    },
    {
        path: '/task',
        name: 'task.index',
        component: () => import('@/views/task/Index.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router