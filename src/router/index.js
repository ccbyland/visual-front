import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/editor/index'
  },
  {
    path: '/editor/index',
    name: 'editor',
    component: () => import('@/views/editor/index')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
