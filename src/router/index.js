import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'product/:id',
          component: () => import('../views/ProductView.vue')
        },
        {
          path: 'cart',
          component: () => import('../views/CartView.vue')
        },
       
        {
          path: 'order',
          component: () => import('../views/OrderView.vue')
        },
        {
          path: 'orderPay/:orderId',
          component: () => import('../views/OrderPayView.vue')
        },
      
        
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ]
})
export default router
