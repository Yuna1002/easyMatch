<template>
  <div class="container pt-12 pb-40">
    <!-- 麵包屑 -->
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><RouterLink to="/" class="text-primary-200">首頁</RouterLink></li>
          <li class="breadcrumb-item"><RouterLink to="/products" class="text-primary-200">所有產品</RouterLink></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
        </nav>
    <div class="row pb-12">
      <div class="col-md-6">        
        <img class="img-fluid" :src="product.imageUrl" :alt="product.title" />
      </div>
      <div class="col-md-6">        
        <div class="d-flex align-items-center mb-6">
          <h1 class="h2 fw-bold mb-0">
            {{ product.title }}
          </h1>
          <div>
            <span class="badge bg-primary rounded-pill ms-2">{{ product.category }}</span>
          </div>
        </div>
        <p class="mb-6">{{ product.description }}</p>
        <p class="fs-6 fw-semibold text-primary-200 mb-6">
          {{ `NT$${product.price} ` }}
          <span class="fs-4">/顆</span>
        </p>
        <button
          type="button"
          class="btn btn-secondary text-white disabled py-2 px-20"
          v-if="cart.carts?.some((item) => item.product_id === product.id)"
        >
          已加入
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary-200 text-white py-2 px-19"
          @click="addToCart(product.id, qty)"
        ><i
            class="fas fa-spinner fa-pulse"
            v-if="product.id === loadingItem"
          ></i>
          加入購物車
        </button>
      </div>
    </div>
    <hr class="mb-6" />
    <ul class="list-unstyled d-flex justify-content-center mb-8">
      <li class="me-8 pb-2 px-3 ">
        <a href="" class="text-dark fw-semibold fs-5" >產品說明</a>
      </li>
    </ul>
    <div class="tab-content">
      <div >
        <div class="mb-7">
          <h3 class="h6 fw-semibold">產品保健</h3>
          <p>{{ product.description }}</p>
        </div>
        <div class="mb-7">
          <h3 class="h6 fw-semibold">說明內容</h3>
          <p>{{ product.content }}</p>
        </div>
        <div class="mb-7">
          <h3 class="h6 fw-semibold">食用方法</h3>
          <p>{{ product.食用方法 }}</p>
        </div>
        <div class="row">
          <div class="col-8">
            <table class="table">
              <thead>
                <tr>
                  <th class="ps-0 border-0 mb-2">營養標示</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>每一份量</td>
                  <td class="text-center">1顆</td>
                  <td></td>
                </tr>
                <tr>
                  <td class="border-0 pb-0"></td>
                  <td class="border-0 pb-0 text-center">每份</td>
                  <td class="border-0 pb-0 text-center">每日參考值百分比%</td>
                </tr>
                <tr v-if="product.element">
                  <td>{{ product.element.title }}</td>
                  <td class="text-center">{{ product.element.quantity }}</td>
                  <td class="text-center">{{ product.element.percent }}</td>
                </tr>
                <!-- v-if="Array.isArray(product.elements)" -->
                <tr v-for="(i, index) in product.elements" :key="index">
                  <td>{{ i.title }}</td>
                  <td class="text-center">{{ i.quantity }}</td>
                  <td class="text-center">{{ i.percent }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- <div v-if="activeTab === 2">產品評價</div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { cartStore } from '../stores/cartStore'
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data() {
    return {
      product: {},
    }
  },
  components:{
    RouterLink
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params
      const loader = this.$loading.show()
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          loader.hide()
        })
        .catch((err) => {
          console.log(err)
          alert(err.data.message)
        })
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(cartStore, ['loadingItem']),
  },
  mounted() {
    this.getProduct()
  }
}
</script>
