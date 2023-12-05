import { defineStore } from 'pinia'
import axios from 'axios'
import Toast from '../mixins/toast'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export const cartStore = defineStore('cart', {
  state: () => {
    return {
      cart: {},
      cartNum: 0,
      loadingItem: ''
    }
  },
  actions: {
    async getCart() {
      try {
        const res = await axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`)
        this.cart = res.data.data
        //如果localStorage有值，賦值給cart.group，如果為空或不存在 則賦值1
        this.cart.group = JSON.parse(localStorage.getItem('group')) || 1
      } catch (err) {
        console.log(err)
      }
    },
    async delCart(id) {
      this.loadingItem = id
      try {
        const res = await axios.delete(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart/${id}`)
        Toast.fire({
          icon: 'success',
          title: res.data.message
        })
        this.getCart()
      } catch (err) {
        console.log(err)
      }
    }
  },
  getters: {
    calcCartNum(state) {
      return (state.cartNum = this.cart.carts?.length)
    },
    finalTotal(state) {
      return state.cart.total * state.cart.group
    }
  }
})
