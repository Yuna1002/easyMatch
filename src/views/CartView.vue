<template>
  <div class="bg-tertiary-100 pt-30">
    <div class="container pb-40">
      <h1 class="h2 text-center mb-8">購物車</h1>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="bg-card-bg px-8 py-12 mb-8">
            <h2 class="h4 text-center fw-semibold mb-6">30天份自由配</h2>
            <table class="table align-middle border">
              <thead class="bg-primary text-white">
                <tr>
                  <th class="fw-semibold align-middle">產品</th>
                  <th class="fw-semibold text-center align-middle">單價</th>
                  <th class="fw-semibold text-center align-middle">30天份金額</th>
                  <th class="fw-semibold"></th>
                </tr>
              </thead>
              <tbody v-if="Array.isArray(cart.carts)">
                <template v-if="cart.carts.length > 0">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="d-md-flex align-items-md-center">
                      <div class="me-8 d-none d-md-block" style="width: 150px">
                        <img
                          class="img-fluid"
                          :src="item.product.imageUrl"
                          :alt="item.product.title"
                        />
                      </div>
                      <p class="fw-semibold">{{ item.product.title }}</p>
                    </td>
                    <td class="text-center">
                      {{ `NT$${item.product.price}` }}
                    </td>
                    <td class="text-center">
                      {{ `NT$${item.total}` }}
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="delCart(item.id)"
                        :disabled="loadingItem === item.id"
                      >
                        <i class="fas fa-spinner fa-pulse" v-if="item.id === loadingItem"></i>
                        x
                      </button>
                    </td>
                  </tr>
                </template>
                <tr v-else>
                  <td class="text-center ps-9" colspan="3">
                    購物車尚未有產品
                    <RouterLink
                      to="/products"
                      class="btn btn-primary-200 rounded-pill py-1 text-white ms-2 fs-4"
                      >前往購物</RouterLink
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- 產品組數選單 -->
            <div class="d-flex align-items-center justify-content-end mb-8">
              <p class="me-4">組數</p>
              <div class="me-4" style="width: 80px">
                <select
                  name=""
                  id=""
                  class="form-control me-2"
                  v-model="cart.group"
                  @change="saveToLocal"
                >
                  <option :value="i" v-for="i in 5" :key="i" class="text-center">
                    {{ i }}
                  </option>
                </select>
              </div>
              <span class="ps-1">{{ `${cart.group * 30}天份` }}</span>
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <p class="me-4 fw-semibold">總計</p>
              <p class="fw-semibold fs-5">
                {{ `NT$${$filters.toThousands(cart.total * cart.group)}` }}
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <a
              class="btn btn-primary-200 text-white rounded-pill btn-hover ps-8 pe-6 py-3 d-flex align-items-center"
              @click="checkCart"
            >
              前往結帳<span class="material-symbols-outlined fw-semibold"> chevron_right </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'
import { RouterLink } from 'vue-router'
import Swal from 'sweetalert2'
export default {
  components: {
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['cart']),
    ...mapState(cartStore, ['loadingItem'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    ...mapActions(cartStore, ['delCart']),
    ...mapActions(cartStore, ['saveToLocal']),
    checkCart() {
      if (!this.cart.carts.length) {
        Swal.fire({
          icon: 'warning',
          title: '購物車尚無資料',
          confirmButtonText: '前往購物',
          confirmButtonColor: '#46afa2'
        }).then((result) => {
          if (result.isConfirmed) {
            this.$router.push('/products')
          }
        })
      } else {
        this.$router.push('/order')
      }
    }
  },
  mounted() {
    const loader = this.$loading.show()
    setTimeout(() => {
      loader.hide()
    }, 600)
    this.getCart()
  }
}
</script>
