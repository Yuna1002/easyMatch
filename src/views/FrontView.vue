<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #71dacc">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top" /> </a
        ><a class="navbar-brand " href="#">EASY MATCH</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav" :class="{show:openNav===true}">
          <ul class="navbar-nav ms-auto d-flex align-items-center ">
            <li class="nav-item me-lg-9">
              <RouterLink to="/" class="nav-link">首頁 </RouterLink>
            </li>
            <li class="nav-item me-lg-9 ">
              <RouterLink to="/products" class="nav-link ">產品列表 </RouterLink>
            </li>
            <li class="nav-item ">
              <RouterLink
                to="/cart"
                class="nav-link  position-relative p-0 "
              >
              <p v-if="openNav===true" class=" py-2">購物車</p>
              <div class="d-flex" v-else>
                <span class="material-symbols-outlined"> shopping_cart </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle"
                >
                  {{ cartNum }}
                </span>
              </div>
                
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <RouterView></RouterView>
  <footer></footer>
</template>
<script>
import { RouterView, RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'

export default {
  data(){
    return{
      openNav:false,
      windowWidth:window.innerWidth
    }
  },
  components: {
    RouterView,
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['cartNum'])
  },
  watch:{
    windowWidth(){
      if(this.windowWidth>991){
        this.openNav=false
      }
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    toggleNav(){
      if(this.openNav===false){
        this.openNav=true
      }else{
        this.openNav=false
      }
    },
    onResize() {
      this.windowWidth = window.innerWidth
    }

  },
  mounted() {
    this.getCart()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    
  },
  beforeUnmount(){
    window.removeEventListener('resize', this.onResize); 
  }
}
</script>
