<template>
  <div class="bg-tertiary-100 pt-20 pt-md-22">
    <div class="container pt-lg-0 pb-40">
      <div class="row">
        <!-- 麵包屑 -->
        <BreadCrumb></BreadCrumb>
        <!-- 側邊欄sidebar -->
        <div class="col-md-3 sidebar-position">
          <CategorySidebar></CategorySidebar>
        </div>
        <!-- 產品列表 -->
        <div class="col-md-9 vl-parent" ref="productsContainer">
          <div class="row justify-content-center justify-content-md-start mb-20">
            <div
              class="col-10 col-sm-12 col-md-6 col-lg-4 mb-6"
              v-for="product in filterProducts"
              :key="product.id"
            >
              <a
                href=""
                class="card bg-card-bg border-0 h-100 pb-5 products-card"
                @click.prevent="handleClick($event, product.id)"
              >
                <div
                  style="height: 180px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${product.imageUrl})` }"
                  class="mb-2"
                ></div>
                <div class="card-body px-8 px-md-4 d-flex flex-column">
                  <div class="d-flex mb-4">
                    <h3 class="card-title h5 fw-bold mb-0">
                      {{ product.title }}
                    </h3>
                    <div>
                      <span class="badge bg-primary rounded-pill fs-3 fw-normal ms-2">{{
                        product.category
                      }}</span>
                    </div>
                  </div>

                  <p class="card-text mb-4 h-100">
                    {{ product.simple }}
                  </p>

                  <div class="d-flex align-items-center justify-content-end mb-1">
                    <p class="fw-semibold text-primary-200">
                      {{ `NT$${product.price} /${product.unit}` }}
                    </p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-secondary text-white disabled rounded-pill py-2"
                    v-if="cart.carts?.some((item) => item.product_id === product.id)"
                  >
                    已加入
                  </button>
                  <button
                    type="button"
                    v-else
                    class="btn btn-primary-200 text-white rounded-pill btn-hover py-2"
                    :disabled="loadingItem === product.id"
                  >
                    <i class="fas fa-spinner fa-pulse" v-if="product.id === loadingItem"></i
                    >加入購物車
                  </button>
                </div>
              </a>
            </div>
          </div>
          <div>
            <PaginationComponent
              v-if="category === '全部'"
              class="d-flex justify-content-center"
            ></PaginationComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { productsStore } from '../stores/productsStore'
import { cartStore } from '../stores/cartStore'
import CategorySidebar from '@/components/CategorySidebar.vue'
import PaginationComponent from '../components/PaginationComponent.vue'
import BreadCrumb from '../components/BreadCrumb.vue'
export default {
  components: {
    PaginationComponent,
    CategorySidebar,
    BreadCrumb
  },
  methods: {
    handleClick(e, id) {
      if (e.target.nodeName === 'BUTTON') {
        this.addToCart(id)
      } else {
        this.$router.push(`/product/${id}`)
      }
    },
    ...mapActions(productsStore, ['getProductsAll', 'addToCart'])
  },
  computed: {
    ...mapState(productsStore, ['filterProducts', 'category', 'loadingItem']),
    ...mapState(cartStore, ['cart'])
  },
  created() {
    this.getProductsAll()
  },
  mounted() {
    const loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.productsContainer
    })
    setTimeout(() => {
      loader.hide()
    }, 800)
  }
}
</script>

<style>
/* 隱藏滾動條 */
::-webkit-scrollbar {
  display: none;
}
</style>
