<template>
  <button
    class="float-button btn rounded-circle border border-2 d-flex justify-content-center align-items-center"
    @click="scrollToTop"
  >
    <span class="material-symbols-outlined fs-9"> expand_less </span>
  </button>
</template>

<script>
import { debounce } from 'lodash'
export default {
  methods: {
    scrollToTop() {
      // 滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
      })
    },
    handleScroll() {
      const floatButton = document.querySelector('.float-button')
      console.log('123')
      // 判斷滾動位置是否超過閾值，顯示或隱藏按鈕
      if (window.pageYOffset > 0) {
        floatButton?.classList?.add('opacity-100')
      } else {
        floatButton?.classList?.remove('opacity-100')
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', debounce(this.handleScroll, 500))
  }
}
</script>

<style>
.float-button {
  width: 48px;
  height: 48px;
  color: #dee2e6;
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1;
  opacity: 0;
  transition: 0.2s;
}
</style>
