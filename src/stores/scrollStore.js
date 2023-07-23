import { defineStore } from 'pinia'
export const scrollStore = defineStore('scroll', {
  state: () => {
    return {
      scrollPosition: 0
    }
  },
  actions: {
    scrollToTop() {
      window.scrollTo({
        top: this.scrollPosition,
        behavior: 'smooth'
      })
    }
  }
})
