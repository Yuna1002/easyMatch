<template>
  <div class="bg-tertiary-100">
    <div class="container pt-12">
      <div class="row">
        <!-- 側邊欄sidebar -->
        <div class="col-3">
          <div class="list-group">
            <h2 class="fs-4 ps-8 mb-6">
              <a
                href=""
                class="list-group-item sidebar-link"
                @click.prevent="filterProduct('全部')"
                :class="{ 'sidebar-link-active': active === '全部' }"
              >
                全部產品
              </a>
            </h2>
            <h2 class="fs-4 ps-8 mb-6">
              <a
                href=""
                class="list-group-item sidebar-link"
                @click.prevent="filterProduct('維生素')"
                @click="active = '維生素'"
                :class="{ 'sidebar-link-active': active === '維生素' }"
              >
                維生素
              </a>
            </h2>
            <h2 class="fs-4 ps-8 mb-6">
              <a
                href=""
                class="list-group-item sidebar-link"
                @click.prevent="filterProduct('礦物質')"
                :class="{ 'sidebar-link-active': active === '礦物質' }"
              >
                礦物質
              </a>
            </h2>
            <h2 class="fs-4 ps-8 mb-6">
              <a
                href=""
                class="list-group-item sidebar-link"
                @click.prevent="filterProduct('功能性補給')"
                :class="{ 'sidebar-link-active': active === '功能性補給' }"
              >
                功能性補給
              </a>
            </h2>
          </div>
        </div>
        <!-- 產品列表 -->
        <div class="col-9">
          <div class="row">
            <div class="col-xl-4 col-lg-6 mb-6" v-for="product in filterProducts" :key="product.id">
              <RouterLink
                :to="`/product/${product.id}`"
                class="card bg-card-bg border-0 h-100 pb-5 products-card"
                @click.stop
              >
                <div
                  style="height: 180px; background-size: cover; background-position: center"
                  :style="{ backgroundImage: `url(${product.imageUrl})` }"
                  class="mb-2"
                ></div>
                <div class="card-body px-8 d-flex flex-column">
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
                    <p class="fw-semibold text-primary-200">{{ `$${product.price} /顆` }}</p>
                  </div>
                  <button
                    type="button"
                    class="btn btn-secondary text-white disabled"
                    v-if="cart.carts.some((item) => item.product_id === product.id)"
                  >
                    已加入
                  </button>
                  <button
                    type="button"
                    v-else
                    class="btn btn-primary-200 text-white"
                    @click="addToCart(product.id, 30)"
                  >
                    加入購物車
                  </button>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data() {
    return {
      products: [],
      filterProducts: [],
      tempProduct: {},
      active: '全部'
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts() {
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          console.log('產品', res.data.products)
          this.products = res.data.products
          this.filterProducts = this.products
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    addToCart(id) {
      const data = {
        product_id: id,
        qty: 1
      }
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message)
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    filterProduct(category) {
      this.active = category
      if (category === '全部') {
        this.getProducts()
      } else {
        const filter = this.products.filter((product) => product.category === category)
        console.log('篩選結果', filter)
        this.filterProducts = filter
      }
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(cartStore, ['getCart'])
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  mounted() {
    this.getProducts()
  }
}
</script>
