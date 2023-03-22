<template>
<div aria-live="polite" aria-atomic="true" class="bg-dark  bd-example-toasts toast-position ">
  <div class="toast-container  p-3 position-absoluate top-0 end-0" id="toastPlacement">
  <div
    class="toast align-items-center text-white bg-primary-200 border-0  "
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    ref="successToast"
  >
    <div class="d-flex">
      <div class="toast-body">成功加入購物車</div>
      <button
        type="button"
        class="btn-close btn-close-white me-2 m-auto"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
  </div>
</div>
</div>
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'
import { mapState} from 'pinia'
import { cartStore } from '../stores/cartStore'
export default {
  data() {
    return {
      successToast: null
    }
  },
  methods: {
   
    hide() {
      this.successToast.hide()
    },
    show() {
      this.successToast.show()
    }
  },
  computed: {
    ...mapState(cartStore, ['openToast']),
  },
  watch:{
      openToast(){
        if(this.openToast===true){
          this.show();
          
        }
      }
    },
  mounted() {
    this.successToast = new Toast(this.$refs.successToast,{delay:1000})
    
  }
}
</script>
