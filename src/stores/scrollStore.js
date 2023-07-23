import { defineStore } from 'pinia'
export const scrollStore = defineStore('scroll', {
  state: () => {
    return {
      scrollPosition: 0
    }
  },
  actions: {
    scrollToTop() {
      console.log('goTop')
      window.scrollTo({
        top: this.scrollPosition,
        behavior: 'smooth'
      })
    }
  }
})
