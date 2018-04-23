import Vue from 'vue'
import Router from 'vue-router'

const Main = () => import(/* webpackChunkName: "group-main" */ '@/layouts/Main')
const MainHomeIndex = () => import(/* webpackChunkName: "group-main" */ '@/pages/home/Index')
const Side = () => import(/* webpackChunkName: "group-side" */ '@/layouts/Side')
const SideListIndex = () => import(/* webpackChunkName: "group-side" */ '@/pages/list/Index')
const HelloWorld = () => import(/* webpackChunkName: "group-hello" */ '@/components/HelloWorld')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'home',
          name: 'MainHomeIndex',
          component: MainHomeIndex,
          alias: ''
        }
      ]
    },
    {
      path: '/side',
      name: 'Side',
      component: Side,
      children: [
        {
          path: 'home',
          name: 'SideListIndex',
          component: SideListIndex,
          alias: ''
        }
      ]
    }
  ]
})

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  next()
})

export default router
