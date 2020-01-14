import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import login2 from '@/views/login2.vue'
import index from '@/views/index.vue'
import index2 from '@/views/index2.vue'
import welcome from '@/views/Welcome.vue'
import article from '@/views/article.vue'
import article2 from '@/views/article2.vue'
import release from '@/views/release.vue'
import fabu from '@/views/fabu.vue'
Vue.use(VueRouter)
let router = new VueRouter({
    routes: [
        {
            name: 'index2',
            path: '/index2',
            component: index2,
            children:[
                {
                    name:'article2',
                    path:'article2',
                    component:article2
                }
            ]
        },
        {
            name: 'index',
            path: '/',
            component: index,
            redirect: { name: 'welcome' },
            children: [
                {
                    name: 'welcome',
                    path: 'welcome',
                    component: welcome
                },
                {
                    name: 'article',
                    path: 'article',
                    component: article
                },
                {
                    name: 'release',
                    path: 'release',
                    component: release
                },
                {
                    name: 'fabu',
                    path: 'fabu',
                    component: fabu
                }
            ]
        },
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'login2',
            path: '/login2',
            component: login2
        }

    ]
})

router.beforeEach((to, from, next) => {
    // ...
    if (to.path === '/login') {
        next()
    } else {
        let token = localStorage.getItem('ht_token')
        if (token) {
            next()
        } else {
            next('/login')
        }
    }
})
export default router