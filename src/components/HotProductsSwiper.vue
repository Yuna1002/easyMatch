<template>
        <swiper
        :slidesPerView="1"
        :spaceBetween="10"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: true,
        }"
        :breakpoints="{
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1200': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="py-15"
      >
        <swiper-slide v-for="product in hotProducts" :key="product.id" >
            <a href="" class="card bg-card-bg border-0 h-100 pb-5  rounded-3 position-relative text-dark" @click.prevent="handleClick($event, product.id)" @mouseenter="iconUp"  @mouseleave="iconDown"  >
            <img class="icon-position " src="../assets/images/Product.svg" alt="" >
                <div
                  style="height: 180px; background-size: cover; background-position: center;"
                  :style="{ backgroundImage: `url(${product.imageUrl})` }" 
                  class="mb-2 img-radius"
                ></div>
                <div class="card-body px-8 px-sm-5 d-flex flex-column">
                  <div class="d-flex mb-4">
                    <h3 class="card-title h5 fw-bold mb-0">
                      {{ product.title }}
                    </h3>
                  </div>
                  <p class="card-text mb-4 h-100">
                    {{ product.simple }}
                  </p>
                  <div class=" mb-4">
                    <p class="fw-semibold text-primary-200 text-center ">{{ `$${product.price} /顆` }}</p>
                  </div>

                  <button
                    type="button"
                    class="btn btn-secondary text-white disabled rounded-pill py-3"
                    v-if="cart.carts.some((item) => item.product_id === product.id)"
                  >
                    已加入
                  </button>
                  <button
                    v-else
                    type="button" 
                    class="bg-primary border-0 text-white rounded-pill py-3 btn-hover"  
                  >
          
                    加入購物車
                  </button>
                </div>
          </a>
        </swiper-slide>       
    
      </swiper>
    
</template>

<style>
.swiper-pagination-bullet{
    background-color: #46afa2;
}
</style>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import {  Pagination, Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/pagination';

import { mapState, mapActions } from 'pinia'
import {productsStore} from '../stores/productsStore'
import { cartStore } from '../stores/cartStore'
export default{
    data () {
    return {
      modules: [ Pagination,Autoplay]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed:{
    ...mapState(productsStore,['products']),
    ...mapState(cartStore, ['cart']),
    hotProducts(){
      return this.products.filter((product)=>product.category === '維生素'||product.category === '功能性補給')
    }
  },
  methods: {
    ...mapActions(productsStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    handleClick(e, id) {
      if (e.target.nodeName === 'BUTTON') {
        this.addToCart(id)
      } else {
        this.$router.push(`/product/${id}`)
      }
    },
    iconUp(e){
      e.currentTarget.querySelector('.icon-position').classList.add('icon-position-hover')
    },
    iconDown(e){
      e.currentTarget.querySelector('.icon-position').classList.remove('icon-position-hover')
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>