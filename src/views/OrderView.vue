<template>
  <div class="bg-tertiary-100">
    <div class="container">
      <!-- 麵包屑 -->
      <nav aria-label="breadcrumb" class="bg-tertiary-100 pt-3 mb-6">
            <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><RouterLink to="/" class="text-primary-200">首頁</RouterLink></li>
                <li class="breadcrumb-item"><RouterLink to="/cart" class="text-primary-200">購物車</RouterLink></li>
                <li class="breadcrumb-item active" aria-current="page">確認訂單</li>
            </ol>
        </nav>
      <!-- 進度條 -->
      <div class="mb-12">
        <!-- timeline -->
      <div class="row">
        <div class="col-9 col-md-7 mx-auto">
          <div class="border border-black"></div>
        </div>
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
            <div class="pointer-num fs-3 mb-1 fw-semibold">2</div>
            <p class="fs-4">確認付款</p>
          </div>
        </div>
        <div class="col-3 col-md-5">
          <div class="pointer d-flex flex-column align-items-center pe-2">
            <div class="pointer-num fs-3 mb-1 fw-semibold">3</div>
            <p class="fs-4">訂購完成</p>
          </div>
        </div>
      </div>
      </div>
      
      <!-- content -->
      <div class="row  pb-40">
        <div class="col-lg-4 mb-8">
          <h2 class="h4 mb-6 text-center">訂單明細</h2>
          <div class="bg-card-bg py-6 px-6">
            <div
              v-for="item in cart.carts"
              :key="item.id"
              class="d-flex justify-content-between mb-1"
            >
              <p>{{ item.product.title }}</p>
              <div class="d-flex">
                <p class="me-2">{{ `${cart.group * 30}天份` }}</p>
                <p>{{ `$${item.total * cart.group} ` }}</p>
              </div>
            </div>
            <hr />
            <p class="text-end fw-semibold">{{ `總計$ ${cart.total * cart.group}` }}</p>
          </div>
        </div>
        <!-- 表單 -->
        <div class="col-lg-8">
          <h2 class="h4 mb-6 text-center">顧客資料</h2>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <v-form ref="form" v-slot="{ errors }" @submit="submitOrder">
                <div class="mb-4">
                  <label for="name" class="form-label">收件人姓名</label>
                  <v-field
                    id="name"
                    name="姓名"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    placeholder="請輸入姓名"
                    rules="required"
                    v-model="form.user.name"
                  ></v-field>
                  <error-message name="姓名" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-4">
                  <label for="tel" class="form-label">收件人電話</label>
                  <v-field
                    id="tel"
                    name="電話"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['電話'] }"
                    placeholder="請輸入電話"
                    rules="required|min:8|max:10"
                    v-model="form.user.tel"
                  ></v-field>
                  <error-message name="電話" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-4">
                  <label for="email" class="form-label">Email</label>
                  <v-field
                    id="email"
                    name="email"
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors['email'] }"
                    placeholder="請輸入 Email"
                    rules="email|required"
                    v-model="form.user.email"
                  ></v-field>
                  <error-message name="email" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-4">
                  <label for="address" class="form-label">收件人地址</label>
                  <v-field
                    id="address"
                    name="地址"
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors['地址'] }"
                    placeholder="請輸入地址"
                    rules="required"
                    v-model="form.user.address"
                  ></v-field>
                  <error-message name="地址" class="invalid-feedback"></error-message>
                </div>

                <div class="mb-4">
                  <label for="message" class="form-label">留言</label>
                  <textarea
                    id="message"
                    class="form-control"
                    cols="30"
                    rows="5"
                    v-model="form.message"
                  ></textarea>
                </div>
                <div class="text-end">
                  <button type="submit" class="btn btn-primary-200 text-white">送出訂單</button>
                </div>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions} from 'pinia'
import { cartStore } from '../stores/cartStore'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      orderId: '',
    }
  },
  computed: {
    ...mapState(cartStore, ['cart'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    submitOrder() {
      const data = this.form
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/order`, { data })
        .then((res) => {
          Swal.fire({ 
          icon: 'success',
          toast: true,
          position: 'top',
          title: '訂單建立成功', 
          timer: 1500, //如果不要確認按鈕，1.5秒後自動關閉
          showConfirmButton: false,
          })
          this.$refs.form.resetForm()
          this.getCart()
          //將總計金額(*group)存在localStorage
          localStorage.setItem('totalIncludeGroup',this.cart.total*this.cart.group)
          // localStorage.clear()
          this.orderId = res.data.orderId;
          this.$router.push(`/orderPay/${this.orderId}`,this.scrollToTop());

        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted(){
    const loader = this.$loading.show()  
        setTimeout(() => {
            loader.hide()
        }, 600)
    this.getCart()
  }
}
</script>
