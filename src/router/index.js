import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      meta: { title: '首頁' },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/ProductsView.vue'),
          meta: { title: '所有產品' }
        },
        {
          path: 'product/:id',
          name: 'product',
          component: () => import('../views/ProductView.vue'),
          meta: {
            title: '產品詳情'
          }
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('../views/CartView.vue'),
          meta: {
            title: '購物車'
          }
        },

        {
          path: 'order',
          name: 'order',
          component: () => import('../views/OrderView.vue'),
          meta: {
            title: '確認訂單'
          }
        },
        {
          path: 'orderPay/:orderId',
          name: 'orderPay',
          component: () => import('../views/OrderPayView.vue'),
          meta: {
            title: '確認付款'
          }
        },
        {
          path: 'qa',
          name: 'qa',
          component: () => import('../views/QaView.vue'),
          meta: {
            title: '常見問題'
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        resolve({ top: 0, behavior: 'smooth' })
      })
    )
  }
})
export default router
