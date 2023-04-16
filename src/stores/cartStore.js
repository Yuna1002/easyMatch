import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export const cartStore = defineStore('cart', {
  state: () => {
    return {
      cart: { group: 1 }, 
      cartNum: 0,
      openToast:false,
      loadingItem: ""
    }
  },
  actions: {
    getCart() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
          this.cart.group=1
          this.checkCart()
          // 在頁面載入時讀取 localStorage 中的值，如果有的話
          const savedOption = localStorage.getItem('selectedGroup')
          if (savedOption) {
            this.cart.group = parseInt(savedOption)
           }
          this.calcCartNum()
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
      this.loadingItem = product_id;
      const data = {
        product_id,
        qty
      }
      axios
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          if (res.data.success===true) {
            this.openToast=true
          }
          this.getCart()
          
        })
        .catch((err) => {
          console.log(err)
        })
    },
    delCart(id) {
      this.loadingItem = id;
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
    },
    saveToLocal(){
        localStorage.setItem('selectedGroup', this.cart.group)

    },
    checkCart(){
      if(this.cart.carts.length===0){
        localStorage.setItem('selectedGroup',1)
      }
    }
  },
  getters: {}
})
