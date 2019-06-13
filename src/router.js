import Vue from 'vue'
import Router from 'vue-router'
import home from './views/home.vue'
Vue.use(Router);
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            redirect:'./home'
        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/list',
            name: 'list',
            component: () => import('./views/list.vue')
        },
        {
            path: '/collection',
            name: 'collection',
            component: () => import('./views/collection.vue')
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('./views/add.vue')
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('./views/detail.vue')
        }
    ]
})
