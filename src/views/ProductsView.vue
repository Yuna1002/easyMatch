<template>
  <div class="bg-tertiary-100">
    <div class="container pt-12">
      <div class="row">
        <!-- 側邊欄sidebar -->
        <div class="col-3">
          <div class="list-group">
            <h2 class="fs-4 ps-7 mb-6">
              <a
                href=""
                class="list-group-item"
                @click.prevent="filterProduct('全部')"
                :class="{ sidebarActive: active === '全部' }"
              >
                全部產品
              </a>
            </h2>
            <h2 class="fs-4 ps-7 mb-6">
              <a
                href=""
                class="list-group-item border-0 bg-transparent"
                @click.prevent="filterProduct('維生素')"
                @click="active = '維生素'"
                :class="{ sidebarActive: active === '維生素' }"
              >
                維生素
              </a>
            </h2>
            <h2 class="fs-4 ps-7 mb-6">
              <a
                href=""
                class="list-group-item border-0 bg-transparent"
                @click.prevent="filterProduct('礦物質')"
              >
                礦物質
              </a>
            </h2>
            <h2 class="fs-4 ps-7 mb-6">
              <a
                href=""
                class="list-group-item border-0 bg-transparent"
                @click.prevent="filterProduct('功能性補給')"
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
                class="card bg-card-bg border-0 h-100 pb-6 products-card"
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
                  <!-- <div class="input-group mb-10">
                    <div class="form-check me-4">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="shopType"
                        id="day"
                        checked
                      />
                      <label class="form-check-label fw-semibold" for="day"> 30天份自由配 </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="shopType" id="jar" />
                      <label class="form-check-label fw-semibold" for="jar"> 150顆罐裝 </label>
                    </div>
                  </div> -->
                  <div class="d-flex align-items-center justify-content-end">
                    <p class="fw-semibold text-primary-200 me-2">{{ `$${product.price} /顆` }}</p>
                    <button type="button" class="border-0 bg-transparent d-flex align-items-center">
                      <span class="material-symbols-outlined text-primary-200 fs-7">
                        shopping_cart
                      </span>
                    </button>
                  </div>
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
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data() {
    return {
      products: [],
      filterProducts: [],
      tempProduct: {},
      active: ''
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
    }
  },
  mounted() {
    this.getProducts()
  }
}
</script>
