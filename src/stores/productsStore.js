import { defineStore } from 'pinia'
import axios from 'axios'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export const productsStore=defineStore('product',{
    state: () => {
        return {
            products: [],
        }
    },
    actions:{
        getProducts() {
            axios
              .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
              .then((res) => {
                this.products = res.data.products
              })
              .catch((err) => {
                alert(err.data.message)
              })
          },
    },
    getters: {}

})