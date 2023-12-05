<template>
  <div class="wrapper">
    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark fixed-navbar bg-primary-100">
        <div class="container position-relative">
          <a class="navbar-brand" href="#">
            <img
              src="../assets/images/logo-01.png"
              alt="logo"
              class="d-inline-block align-text-top img-fluid"
              width="40"
            /> </a
          ><a class="navbar-brand text-white" href="#" style="font-family: Josefin Sans"
            >EASY MATCH</a
          >
          <div class="cartPosition d-lg-none">
            <RouterLink to="/cart" class="nav-link position-relative">
              <span class="material-symbols-outlined text-white"> shopping_cart </span>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle"
              >
                {{ calcCartNum }}
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
              <li class="nav-item ms-lg-4">
                <RouterLink to="/products" class="nav-link">所有產品</RouterLink>
              </li>
              <li class="nav-item ms-lg-4">
                <RouterLink to="/qa" class="nav-link">常見問題</RouterLink>
              </li>
              <li class="nav-item ms-lg-4">
                <RouterLink to="/cart" class="nav-link position-relative d-lg-none">
                  購物車
                </RouterLink>
              </li>
            </ul>
          </div>
          <RouterLink to="/cart" class="nav-link cartPositionRight d-none d-lg-block pb-lg-0">
            <span class="material-symbols-outlined text-white"> shopping_cart </span>
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle"
            >
              {{ calcCartNum }}
            </span>
          </RouterLink>
        </div>
      </nav>
    </header>
    <main class="min-vh-100 bg-tertiary-100">
      <RouterView />
    </main>
    <footer class="bg-primary py-4 footer">
      <p class="text-center text-white mb-1">
        本網站僅供個人作品使用，無任何商業用途 | <a href="#" class="text-white">登入後台</a>
      </p>
      <p class="text-center text-white fs-sm">Copyright © 2023 Easy match</p>
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
    // ...mapState(cartStore, ['cartNum'])
    ...mapState(cartStore, ['calcCartNum'])
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
