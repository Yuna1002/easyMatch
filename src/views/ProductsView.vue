<template>
  <div class="bg-tertiary-100">
    <SuccessToast></SuccessToast>
    <div class="container pt-12 pb-40">
      
      <div class="row">
        <!-- 側邊欄sidebar -->
        <div class="col-md-3 sidebar-position">
          <div class="list-group  flex-row flex-md-column pt-4 bg-tertiary-100 rounded-0  sidebar-position">
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

        <div class="col-md-9">          
          <div class="row vl-parent " ref="productsContainer">
            <div class="col-xl-4 col-lg-6 mb-6" v-for="product in filterProducts" :key="product.id">
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
                    
                    :disabled="loadingItem === product.id"
                  >
          
                    加入購物車
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'
import SuccessToast from '../components/SuccessToast.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data() {
    return {
      products: [],
      filterProducts: [],
      tempProduct: {},
      active: '全部',
      fullPage: false,
      loadingItem: '' //存id,當事件有此id時 disabled
    }
  },
  components: {
    SuccessToast,

  },
  methods: {
    getProducts() {
      const loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.productsContainer
      })
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.filterProducts = this.products
          loader.hide()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    filterProduct(category) {
      this.active = category
      if (category === '全部') {
        this.getProducts()
        this.filterProducts = this.products
      } else {
        const filter = this.products.filter((product) => product.category === category)
        this.filterProducts = filter
      }
    },
    handleClick(e, id) {
      //console.log(e)
      if (e.target.nodeName === 'BUTTON') {
        this.addToCart(id)
      } else {
        this.$router.push(`/product/${id}`)
      }
    },
    ...mapActions(cartStore, ['getCart']),
   ...mapActions(cartStore, ['addToCart']),
  },
  computed: {
    ...mapState(cartStore, ['cart']),
  },
  mounted() {
   this.getProducts();
    
  }
}
</script>
