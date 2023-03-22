<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark " style="background-color: #71dacc">
      <div class="container ">
        <a class="navbar-brand " href="/">
          <img src="../assets/images/logo-01.png" alt=""  class="d-inline-block align-text-top img-fluid" width="40"  /> </a
        ><a class="navbar-brand" href="#" style="font-family:Josefin Sans">EASY MATCH</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >

          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav" >

          <ul class="navbar-nav ms-auto d-flex align-items-center " >
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
  <footer class="bg-primary-200 py-15">
  <h4 class="text-center fs-5 text-white fw-semibold">EASY MATCH</h4>
  <p class="text-secondary text-center text-white">本網站僅供個人作品使用，不提供商業用途。</p>
</footer>
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
      }else{
        this.openNav=true
      }
    }
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    onResize() {
      this.windowWidth = window.innerWidth
      if(this.windowWidth>991){
        this.openNav=false
      }else{
        this.openNav=true
      }
    }

  },
  mounted() {
    this.getCart()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.onResize();
    
  },
  beforeUnmount(){
    window.removeEventListener('resize', this.onResize); 
  }
}
</script>
