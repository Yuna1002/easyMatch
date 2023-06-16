<template>
  <div class="wrapper">
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #71dacc">
        <div class="container position-relative">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/images/logo-01.png"
              alt="logo"
              class="d-inline-block align-text-top img-fluid"
              width="40"
            /> </a
          ><a class="navbar-brand" href="#" style="font-family: Josefin Sans">EASY MATCH</a>
          <div class="cartPosition d-lg-none">
            <RouterLink to="/cart" class="nav-link position-relative">
              <span class="material-symbols-outlined text-white"> shopping_cart </span>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle"
              >
                {{ cartNum }}
              </span>
            </RouterLink>
          </div>
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
          <div class="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
            <ul class="navbar-nav d-flex align-items-center">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link">首頁 </RouterLink>
              </li>
              <li class="nav-item ms-lg-9">
                <RouterLink to="/products" class="nav-link">所有產品</RouterLink>
              </li>
              <li class="nav-item ms-lg-9">
                <RouterLink to="/cart" class="nav-link position-relative d-lg-none">
                  購物車
                </RouterLink>
              </li>
            </ul>
          </div>
          <RouterLink to="/cart" class="nav-link cartPositionRight d-none d-lg-block">
            <span class="material-symbols-outlined text-white"> shopping_cart </span>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle"
            >
              {{ cartNum }}
            </span>
          </RouterLink>
        </div>
      </nav>
    </header>
    <div class="min-vh-100 bg-tertiary-100">
      <RouterView class="pt-20" />
    </div>
    <footer class="bg-primary-200 py-10 footer">
      <h4 class="text-center fs-5 text-white fw-semibold">EASY MATCH</h4>
      <p class="text-secondary text-center text-white">本網站僅供個人作品使用，不提供商業用途。</p>
    </footer>
  </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import { cartStore } from '../stores/cartStore'
export default {
  data() {
    return {}
  },
  components: {
    RouterView,
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['cartNum'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart']),
    navbarCollapse() {
      const navLink = document.querySelectorAll('.nav-link')
      const navbarCollapse = document.querySelector('.navbar-collapse')
      navLink.forEach((item) => {
        item.addEventListener('click', () => {
          navbarCollapse.classList.remove('show')
        })
      })
    }
  },
  mounted() {
    this.getCart()
    this.navbarCollapse()
  }
}
</script>

<style>
.wrapper {
  min-height: calc(100% - 136px);
}
.fixed-navbar {
  width: 100%;
  position: absolute;
  z-index: 999;
}
.cartPosition {
  position: absolute;
  right: 90px;
  top: 15px;
}
.cartPositionRight {
  position: relative;
  top: 3px;
}
</style>
