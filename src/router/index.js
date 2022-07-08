import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'collections',
      component: () => import('@/views/Collections.vue')
    },
    {
        path: '/collection/:slug',
        name: 'collection-details',
        component: () => import('@/views/CollectionDetails.vue')
    }    
  ]
})

export default router
