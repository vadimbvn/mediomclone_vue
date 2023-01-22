import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '@/views/HomeView'
import Register from '@/views/Register'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
