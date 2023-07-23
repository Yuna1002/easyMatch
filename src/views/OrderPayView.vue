<template>
  <div class="bg-tertiary-100 pt-22">
    <div class="container bg-tertiary-100">
      <nav aria-label="breadcrumb" class="bg-tertiary-100 pt-3 mb-9">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-primary-200">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">確認付款</li>
        </ol>
      </nav>
      <!-- 進度條 -->
      <div class="mb-8">
        <!-- timeline -->
        <div class="row">
          <div
            class="col-9 col-md-7 mx-auto timeline"
            :class="{ 'timeline-2': order.is_paid }"
          ></div>
        </div>
        <!-- timeline-pointer -->
        <div class="row">
          <div class="col-3 col-md-5">
            <div class="pointer d-flex flex-column align-items-center ps-5">
              <div class="pointer-num pointer-num-active fs-3 mb-1 text-white fw-semibold">1</div>
              <p class="fs-4 text-primary-200">填寫資料</p>
            </div>
          </div>
          <div class="col-6 col-md-2">
            <div class="pointer d-flex flex-column align-items-center">
              <div class="pointer-num pointer-num-active fs-3 mb-1 fw-semibold text-white">2</div>
              <p class="fs-4 text-primary-200">確認付款</p>
            </div>
          </div>
          <div class="col-3 col-md-5">
            <div class="pointer d-flex flex-column align-items-center pe-2">
              <div
                class="pointer-num fs-3 mb-1 fw-semibold"
                :class="{
                  'text-white': order.is_paid,
                  'bg-primary': order.is_paid,
                  'border-0': order.is_paid
                }"
              >
                3
              </div>
              <p class="fs-4" :class="{ 'text-primary-200': order.is_paid }">訂購完成</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 付款完成訊息 -->
      <div v-if="order.is_paid" class="d-flex flex-column align-items-center mb-15">
        <p class="fs-10 fw-bold">感謝您的購買!</p>
        <p class="mb-9 fs-5">我們將盡快為您出貨，還請隨時留意宅配通知！</p>
        <div>
          <RouterLink to="/" class="btn btn-outline-primary-200 rounded-pill py-3 px-7 me-6"
            >回首頁</RouterLink
          >
          <RouterLink to="/products" class="btn btn-primary-200 rounded-pill py-3 px-7 text-white"
            >繼續購物</RouterLink
          >
        </div>
      </div>
      <!-- 訂單資訊 -->
      <div class="row justify-content-center pb-40">
        <div class="col-10 col-md-8">
          <div class="bg-card-bg p-6 w-100 mb-9">
            <h2 class="h4">訂單資訊</h2>
            <form @submit.prevent="payOrder(order.id)">
              <table class="table align-middle">
                <tbody>
                  <tr>
                    <th class="p-md-3 border-0">訂單編號</th>
                    <td class="p-md-3 border-0">{{ order.id }}</td>
                  </tr>
                  <tr>
                    <th class="p-md-3 border-0">訂單成立日期</th>
                    <td class="p-md-3 border-0">{{ $filters.date(order.create_at) }}</td>
                  </tr>

                  <tr>
                    <th class="p-md-3 border-0">訂單金額</th>
                    <td class="p-md-3 border-0">
                      NT$ {{ $filters.toThousands(order.totalIncludeGroup) }}
                    </td>
                  </tr>
                  <tr v-if="!order.is_paid">
                    <th class="p-md-3 border-0">姓名</th>
                    <td class="p-md-3 border-0">{{ order.user?.name }}</td>
                  </tr>
                  <tr v-if="!order.is_paid">
                    <th class="p-md-3 border-0">手機</th>
                    <td class="p-md-3 border-0">{{ order.user?.tel }}</td>
                  </tr>

                  <tr v-if="!order.is_paid">
                    <th class="p-md-3 border-0">信箱</th>
                    <td class="p-md-3 border-0">{{ order.user?.email }}</td>
                  </tr>

                  <tr v-if="!order.is_paid">
                    <th class="p-md-3 border-0">外送地址</th>
                    <td class="p-md-3 border-0">{{ order.user?.address }}</td>
                  </tr>
                  <tr v-if="!order.is_paid">
                    <th class="p-md-3 border-0">訂單備註</th>
                    <td class="p-md-3 border-0">{{ order.message ? order.message : '無' }}</td>
                  </tr>
                  <tr v-if="!order.is_paid">
                    <th scope="row" class="p-md-3 border-0" width="150">付款狀態</th>
                    <td class="p-md-3 border-0">
                      <span class="badge bg-danger rounded-pill py-2 px-4" v-if="!order.is_paid"
                        >尚未付款</span
                      >
                      <!-- <span class="badge bg-primary-400 rounded-pill py-2 px-4" v-else
                          >已付款</span
                        > -->
                      <span v-else>已付款</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                v-if="!order.is_paid"
                type="submit"
                class="btn btn-primary-200 rounded-pill w-100 text-white py-3"
                :class="{ disabled: order.is_paid }"
              >
                確認付款
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import { scrollStore } from '../stores/scrollStore'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data() {
    return {
      order: {},
      fullPage: true
    }
  },
  components: {
    RouterLink
  },
  computed: {
    ...mapState(scrollStore, ['scrollPosition'])
  },
  methods: {
    ...mapActions(scrollStore, ['scrollToTop']),
    getOrder() {
      const loader = this.$loading.show()
      const { orderId } = this.$route.params
      this.$http.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order/${orderId}`).then((res) => {
        //console.log('訂單資料',res.data.order)
        this.order = res.data.order
        //抓localStorage的值
        const savedOption = localStorage.getItem('totalIncludeGroup')
        if (savedOption) {
          this.order.totalIncludeGroup = parseInt(savedOption)
        }
        loader.hide()
      })
    },
    payOrder(orderId) {
      this.$http.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/pay/${orderId}`).then((res) => {
        if (res.data.success) {
          Swal.fire({
            icon: 'success',
            toast: true,
            position: 'top',
            title: '付款成功',
            timer: 2000,
            showConfirmButton: false
          })
          this.getOrder()
          this.scrollToTop()
        }
      })
    }
  },
  mounted() {
    const loader = this.$loading.show()
    setTimeout(() => {
      loader.hide()
    }, 600)
    this.getOrder()
  }
}
</script>
<style>
.btn:hover {
  color: white;
}
</style>
