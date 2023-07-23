import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export const productsStore = defineStore('product', {
  state: () => {
    return {
      productsAll: []
    }
  },
  actions: {
    getProductsAll() {
      axios
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.productsAll = res.data.products
          console.log('成功取的所有產品')
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  getters: {}
})
