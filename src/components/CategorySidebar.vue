<template>
  <div
    class="list-group d-flex justify-content-center flex-row flex-md-column bg-tertiary-100 rounded-0 sidebar-position overflow-auto"
  >
    <h2 class="fs-4 ps-md-8 mb-6">
      <a
        href=""
        class="list-group-item sidebar-link text-nowrap"
        @click.prevent="filterProduct('全部')"
        :class="{ 'sidebar-link-active': category === '全部' }"
      >
        全部產品
      </a>
    </h2>
    <h2 class="fs-4 ps-md-3 ps-md-8 mb-6" v-for="item in categorys" :key="item">
      <a
        href=""
        class="list-group-item sidebar-link text-nowrap"
        @click.prevent="filterProduct(item)"
        :class="{ 'sidebar-link-active': category === item }"
      >
        {{ item }}
      </a>
    </h2>
  </div>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { productsStore } from '@/stores/productsStore'
export default {
  computed: {
    ...mapState(productsStore, ['category', 'categorys'])
  },
  methods: {
    ...mapActions(productsStore, ['filterProduct'])
  }
}
</script>
