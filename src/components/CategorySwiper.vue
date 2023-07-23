<template>
  <Swiper
    :slidesPerView="1"
    :spaceBetween="10"
    :pagination="{
      clickable: true
    }"
    :breakpoints="{
      '768': {
        slidesPerView: 2,
        spaceBetween: 16
      },
      '992': {
        slidesPerView: 3,
        spaceBetween: 16
      },
      '1200': {
        slidesPerView: 4,
        spaceBetween: 24
      }
    }"
    :modules="modules"
    class="pb-15"
  >
    <SwiperSlide v-for="item in filterCategory" :key="item.id">
      <a
        href=""
        class="card bg-card-bg border-0 h-100 pb-5 products-card"
        @click.prevent="handleClick($event, item.id)"
      >
        <div
          style="height: 180px; background-size: cover; background-position: center"
          :style="{ backgroundImage: `url(${item.imageUrl})` }"
          class="mb-2"
        ></div>
        <div class="card-body px-8 d-flex flex-column">
          <div class="d-flex mb-4">
            <h3 class="card-title h5 fw-bold mb-0 text-nowrap">
              {{ item.title }}
            </h3>
            <div>
              <span class="badge bg-primary rounded-pill fs-3 fw-normal ms-2">{{
                item.category
              }}</span>
            </div>
          </div>

          <div class="d-flex align-items-center justify-content-start mb-1">
            <p class="fw-semibold text-primary-200">
              {{ `NT$${item.price} /${item.unit}` }}
            </p>
          </div>
          <button
            type="button"
            class="btn btn-secondary text-white disabled rounded-pill py-2"
            v-if="cart.carts?.some((i) => i.product_id === item.id)"
          >
            已加入
          </button>
          <button
            type="button"
            v-else
            class="btn btn-primary-200 text-white rounded-pill btn-hover py-2"
            :disabled="loadingItem === item.id"
          >
            <i class="fas fa-spinner fa-pulse" v-if="item.id === loadingItem"></i>加入購物車
          </button>
        </div>
      </a>
    </SwiperSlide>
  </Swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { mapState, mapActions } from 'pinia'
import { productsStore } from '../stores/productsStore'
import { cartStore } from '../stores/cartStore'
export default {
  props: ['product'], //需要單一產品的類別
  emits: ['getProduct'],
  data() {
    return {
      modules: [Pagination]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    ...mapState(productsStore, ['productsAll']),
    ...mapState(cartStore, ['cart']),
    ...mapState(cartStore, ['loadingItem']),
    filterCategory() {
      return this.productsAll.filter((item) => item.category === this.product.category)
    }
  },
  methods: {
    ...mapActions(productsStore, ['getProductsAll']),
    ...mapActions(cartStore, ['addToCart']),
    handleClick(e, id) {
      console.log(id)
      if (e.target.nodeName === 'BUTTON') {
        this.addToCart(id)
      } else {
        this.$router.push(`/product/${id}`)
        this.$emit('getProduct', id)
      }
    }
  },
  mounted() {
    this.getProductsAll()
  }
}

// :autoplay="{
//       delay: 2500,
//       disableOnInteraction: true
//     }"
</script>
<style>
.swiper-pagination-bullet {
  background-color: #46afa2;
}
</style>
