<template>
  <div class="container pt-20 pt-md-22 pb-40">
    <BreadCrumb></BreadCrumb>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h1 class="h2 text-center mb-10">購物車</h1>
        <table class="table border mb-5">
          <thead>
            <tr class="bg-primary text-white">
              <th scope="col" class="py-md-5 ps-md-5 fs-md-sm ps-5">產品</th>
              <th scope="col" class="py-md-5 text-center fs-md-sm">單價</th>
              <th scope="col" class="py-md-5 text-center fs-md-sm text-nowrap">30天份金額</th>
              <th></th>
            </tr>
          </thead>
          <!-- 有資料時 v-if="Array.isArray(cart.carts)" 再進行下面渲染判斷，否則畫面會先出現購物車尚未有資料才渲染畫面-->
          <tbody v-if="Array.isArray(cart.carts)">
            <template v-if="cart.carts?.length > 0">
              <tr v-for="item in cart.carts" :key="item.id">
                <td class="p-md-5">
                  <div class="d-flex align-items-center">
                    <img
                      :src="item.product.imageUrl"
                      alt="item.product.title"
                      class="obj-fit d-none d-md-block"
                      style="width: 150px; height: 100px"
                    />
                    <p class="ps-3 ps-md-5 fw-semibold text-nowrap">
                      {{ item.product.title }}
                    </p>
                  </div>
                </td>
                <td class="align-middle text-center text-nowrap">
                  {{ `NT$ ${item.product.price}` }}
                </td>
                <td class="align-middle text-center text-nowrap">{{ `NT$ ${item.total}` }}</td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="border-0 bg-transparent"
                    @click="delCart(item.id)"
                    :disabled="loadingItem === item.id"
                  >
                    <i class="far fa-trash-alt fs-5"></i>
                  </button>
                </td>
              </tr>
            </template>
            <tr v-else>
              <td colspan="4" class="py-4">
                <div class="d-flex justify-content-center">
                  <p class="fs-5 me-3">購物車目前是空的</p>
                  <button
                    type="button"
                    class="btn btn-primary text-white rounded-0 d-flex py-1 px-4"
                    @click.prevent="$router.push('products')"
                  >
                    前往購物
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="py-4">
                <div class="d-flex justify-content-end align-items-center">
                  <p class="pe-5 fw-semibold">組數</p>
                  <div class="border d-flex">
                    <button
                      type="button"
                      class="btn btn-primary rounded-0 px-3 text-white"
                      @click.prevent="cart.group--"
                      :disabled="cart.group <= 1"
                    >
                      -
                    </button>
                    <div class="py-2 d-flex justify-content-center" style="width: 45px">
                      {{ cart.carts?.length === 0 ? 0 : cart.group }}
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary rounded-0 px-3 text-white"
                      @click.prevent="cart.group++"
                    >
                      +
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td colspan="4" class="py-4">
                <p class="text-end fw-semibold fs-5">
                  總計<span class="ps-5">NT$ {{ finalTotal }}</span>
                </p>
              </td>
            </tr>
          </tfoot>
        </table>
        <div v-if="cart.carts?.length > 0" class="d-flex justify-content-end">
          <RouterLink
            to="/order"
            type="button"
            class="btn btn-primary text-white rounded-0 d-flex py-3 px-5"
          >
            前往結帳<span class="material-symbols-outlined fw-semibold"> chevron_right </span>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'
import { RouterLink } from 'vue-router'
import BreadCrumb from '@/components/BreadCrumb.vue'
export default {
  components: {
    RouterLink,
    BreadCrumb
  },
  watch: {
    'cart.group'(newValue) {
      localStorage.setItem('group', newValue)
    }
  },
  computed: {
    ...mapState(cartStore, ['cart', 'loadingItem', 'finalTotal'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart', 'delCart'])
  },
  created() {
    this.getCart()
  },
  mounted() {
    const loader = this.$loading.show()
    setTimeout(() => {
      loader.hide()
    }, 600)
  }
}
</script>
