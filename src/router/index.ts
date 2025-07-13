import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
})

router.afterEach((to) => {
  const defaultTitle: string = 'App'

  document.title = to.meta.title as string || defaultTitle
})

export default router
