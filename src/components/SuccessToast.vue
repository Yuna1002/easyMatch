<template>
  <div
    class="toast align-items-center text-white bg-success border-0"
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
</template>
<script>
import Toast from 'bootstrap/js/dist/toast'
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
  mounted() {
    this.successToast = [].slice.call(this.successToast).map(function (toastEl) {
      return new Toast(toastEl)
    })
  }
}
</script>
