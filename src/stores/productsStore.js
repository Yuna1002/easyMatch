import { defineStore } from 'pinia'
import { cartStore } from '../stores/cartStore'
import { scrollStore } from '@/stores/scrollStore'
import axios from 'axios'
import Toast from '../mixins/toast'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const { getCart } = cartStore()
const { scrollToTop } = scrollStore()
export const productsStore = defineStore('product', {
  state: () => {
    return {
      productsAll: [],
      products: [],
      pages: {},
      filterProducts: [],
      category: '全部',
      categorys: [],
      loadingItem: ''
    }
  },
  actions: {
    //取得所有產品-類別
    async getProductsAll() {
      try {
        const res = await axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/all`)
        this.productsAll = res.data.products
        //new Set排除重複
        const categorys = new Set(this.productsAll.map((product) => product.category)) //Set{}
        //轉純陣列
        this.categorys = [...categorys]
        this.getProducts()
        scrollToTop()
      } catch (err) {
        console.log(err)
      }
    },
    //取得頁碼內產品
    async getProducts(page = 1) {
      try {
        const res = await axios.get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/products/?page=${page}`)
        this.products = res.data.products
        this.pages = res.data.pagination
        this.filterProducts = this.products
        scrollToTop()
      } catch (err) {
        console.log(err)
      }
    },
    filterProduct(category) {
      this.category = category
      if (category === '全部') {
        this.getProducts()
      } else {
        this.filterProducts = this.productsAll.filter((product) => product.category === category)
        scrollToTop()
      }
    },
    async addToCart(product_id, qty = 30) {
      this.loadingItem = product_id
      const data = {
        product_id,
        qty
      }
      try {
        const res = await axios.post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/cart`, { data })
        getCart()
        Toast.fire({
          icon: 'success',
          title: res.data.message
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
})
