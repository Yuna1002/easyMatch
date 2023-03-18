<template>
  <div class="bg-tertiary-100">
    <div class="container pt-12 pb-40">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="bg-card-bg px-8 py-12 mb-8">
            <h2 class="h4 text-center fw-semibold mb-6">30天份自由配</h2>
            <table class="table align-middle border">
              <thead class="bg-primary text-white">
                <tr>
                  <th class="fw-semibold">產品</th>
                  <th class="w-semibold text-center">每顆單價</th>
                  <th class="w-semibold text-center">30天份金額</th>
                  <th class="w-semibold"></th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cart.carts">
                  <tr v-for="item in cart.carts" :key="item.id">
                    <td class="d-md-flex align-items-md-center">
                      <div class="me-8 d-none d-md-block" style="width: 150px">
                        <img class="img-fluid" :src="item.product.imageUrl" alt="" />
                      </div>
                      <p class="fw-semibold">{{ item.product.title }}</p>
                    </td>
                    <td class="text-center">
                      {{ `$${item.product.price}` }}
                    </td>
                    <td class="text-center">
                      {{ `$${item.total}` }}
                    </td>
                    <td class="text-center">
                      <button
                        type="button"
                        class="btn btn-outline-danger btn-sm"
                        @click="delCart(item.id)"
                      >
                        x
                      </button>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
            <!-- 產品組數選單 -->
            <div class="d-flex align-items-center justify-content-end mb-8">
              <p class="me-4">組數</p>
              <div class="me-4" style="width: 80px">
                <select name="" id="" class="form-control me-2" v-model="cart.group">
                  <option :value="i" v-for="i in 5" :key="i" class="text-center">
                    {{ i }}
                  </option>
                </select>
              </div>
              <span class="ps-1">{{ `${cart.group * 30}天份` }}</span>
            </div>
            <div class="d-flex justify-content-end align-items-center">
              <p class="me-4 fw-semibold">總計</p>
              <p class="fw-semibold fs-5">{{ `$${cart.total * cart.group}` }}</p>
            </div>
          </div>
          <div class="d-flex justify-content-end">
            <RouterLink
              to="/order"
              type="button"
              class="btn btn-primary-200 text-white ps-8 pe-6 py-2 d-flex align-items-center"
            >
              前往結帳<span class="material-symbols-outlined fw-semibold"> chevron_right </span>
            </RouterLink>
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
export default {
  components: {
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['delCart'])
  }
}
</script>
