<template>
  <nav aria-label="breadcrumb" class="bg-tertiary-100 mb-9">
    <ol class="breadcrumb mb-0">
      <li class="breadcrumb-item" v-for="(item, index) in breadcrumbs" :key="item.text">
        <RouterLink
          :to="item.to"
          :class="{ 'breadcrumb-disabled ': index === breadcrumbs.length - 1 }"
          >{{ item.text }}</RouterLink
        >
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ['product'],
  computed: {
    breadcrumbs() {
      // 取得當前路由
      const matchedRoutes = this.$route.matched
      const breadcrumbs = []
      matchedRoutes.forEach((route) => {
        if (route.meta && route.meta.title) {
          if (route.meta.title === '產品詳情') {
            breadcrumbs.push({
              text: '所有產品',
              to: '/products'
            })
            breadcrumbs.push({
              text: this.product?.title,
              to: route.path
            })
          } else if (route.meta.title === '確認訂單') {
            breadcrumbs.push({
              text: '購物車',
              to: '/cart'
            })
            breadcrumbs.push({
              text: route.meta.title,
              to: route.path
            })
          } else {
            breadcrumbs.push({
              text: route.meta.title,
              to: route.path
            })
          }
        }
      })
      return breadcrumbs
    }
  }
}
</script>

<style scoped>
.breadcrumb-disabled {
  border: none;
  color: #6c757d;
}
</style>
