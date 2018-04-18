import Vue from 'vue'
import Router from 'vue-router'

import AddBoard from '@/views/AddBoard'
import Home from '@/views/Home'
import Manage from '@/views/Manage'
import Datacenter from '@/views/Datacenter'
import Tool from '@/views/Tool'
import Login from '@/views/Login'
import Index from '@/views/Index'
import store from '../store'
import Chooseplan from '@/views/Chooseplan'
import Boardplan from '@/views/Boardplan.vue'
Vue.use(Router)


const router = new Router({
    mode: 'history',

    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }, {
            path: '/',
            name: 'index',
            component: Index,
            children: [
                {
                    path: '/index/addboard',
                    name: 'addboard',
                    component: AddBoard,
                    children: [
                        {
                            path:'/index/addboard/chooseplan',
                            name:'addboard',
                            component:Chooseplan
                        }
                       
                    ]
                }
                , {
                    path: '/index/home',
                    name: 'home',
                    component: Home
                }, {
                    path: '/index/manage',
                    name: 'manage',
                    component: Manage
                }, {
                    path: '/index/boardplan',
                    name: 'boardplan',
                    component: Boardplan
                }, {
                    path: '/index/boardmanage',
                    name: 'abordmanage',
                    component: Manage
                }, {
                    path: "/index/datacenter",
                    name: 'datacenter',
                    component: Datacenter
                }, {
                    path: '/index/tool',
                    name: 'tool',
                    component: Tool
                }
            ]
        }
    ]

})


router.beforeEach((to, from, next) => {

    //拦截的时候如果去往的是登录就去登录   不是去往登录的就要判断 是否登录状态 要拦截
    let islogin = isLogin()
    if (to.name === "login") {
        next()
    } else {
        if (!islogin) {
            //没登录 去登陆
            next({
                name: "login"
            })
        } else {
            //登录
            next()
        }
    }

    next()
})
const isLogin = () => {

    if (window.localStorage.token) {
        store.commit('changeUsername', window.localStorage.getItem('userName'))
    }
    return !!window.localStorage.token
}
export default router