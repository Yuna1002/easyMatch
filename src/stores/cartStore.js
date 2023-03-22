import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env



export const cartStore = defineStore('cart', {
  state: () => {
    return {
      cart: { group: 1 }, //carts,total,finalTotal(優惠券折扣)
      cartNum: 0,
      openToast:false
    }
  },
  actions: {
    getCart() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
          this.cart.group = 1
          this.calcCartNum()
          //console.log('購物車資料', this.cart)
          this.openToast=false
        })
        .catch((err) => {
          console.log(err)
        })
    },
    calcCartNum() {
      this.cartNum = this.cart.carts.length
    },
    addToCart(product_id, qty = 30) {
      const data = {
        product_id,
        qty
      }
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          //console.log('加入購物車', res)
          //alert(res.data.message)
          if (res.data.success===true) {
            //this.$refs.SuccessToast.show()
            this.openToast=true
          }
          this.getCart()
          
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart(id) {
      axios
        .delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${id}`)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            title:res.data.message,
            timer: 1500,
          });
          this.getCart()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  getters: {}
})
