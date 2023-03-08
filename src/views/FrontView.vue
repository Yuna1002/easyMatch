<template>
  <header class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #71dacc">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="" alt="" width="30" height="24" class="d-inline-block align-text-top" /> </a
        ><a class="navbar-brand" href="#">EASY MATCH</a>
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
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto d-flex align-items-center">
            <li class="nav-item me-9">
              <RouterLink to="/" class="nav-link">首頁 </RouterLink>
            </li>
            <li class="nav-item me-9">
              <RouterLink to="/products" class="nav-link">產品列表 </RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink
                to="/cart"
                class="nav-link d-flex align-items-center position-relative p-0"
              >
                <span class="material-symbols-outlined"> shopping_cart </span>
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger rounded-circle"
                >
                  {{ cartNum }}
                </span>
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
  components: {
    RouterView,
    RouterLink
  },
  computed: {
    ...mapState(cartStore, ['cartNum'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted() {
    this.getCart()
  }
}
</script>
