import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
// import RouterMenu from '@/router/Menu/index'
import Home from './modules/Home'
import Error from '@/router/modules/404'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Layout/Home',
  },
  Home,
  Error,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router