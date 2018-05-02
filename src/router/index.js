import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

const Main = () => import(/* webpackChunkName: "group-main" */ '@/layouts/Main')
const MainHomeIndex = () => import(/* webpackChunkName: "group-main" */ '@/pages/home/Index')
const Side = () => import(/* webpackChunkName: "group-side" */ '@/layouts/Side')
const SideListIndex = () => import(/* webpackChunkName: "group-side" */ '@/pages/list/Index')
const HeaderSide = () => import(/* webpackChunkName: "group-side" */ '@/layouts/HeaderSide')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
      alias: '',
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
    },
    {
      path: '/header-side',
      name: 'HeaderSide',
      component: HeaderSide
    }
  ]
})

// 全局前置导航守卫
router.beforeEach((to, from, next) => {
  console.log(to, from)
  NProgress.start() // finish progress bar
  next()
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
export default router
