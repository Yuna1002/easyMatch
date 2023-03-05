<template>
  <header>
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
          <ul class="navbar-nav ms-auto">
            <li class="nav-item me-9">
              <RouterLink to="/" class="nav-link">首頁 INDEX</RouterLink>
            </li>
            <li class="nav-item me-9">
              <RouterLink to="/products" class="nav-link">產品列表 PRODUCTS</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/cart" class="nav-link">購物車 CART</RouterLink>
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
export default {
  components: {
    RouterView,
    RouterLink
  }
}
</script>
