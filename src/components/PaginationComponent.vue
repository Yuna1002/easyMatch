<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: !pages.has_pre }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="getProducts(pages.current_page - 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="page in pages.total_pages"
        :key="page"
        :class="{ active: page === pages.current_page }"
      >
        <span class="page-link" v-if="page === pages.current_page">{{ page }}</span>
        <a v-else class="page-link" href="#" @click.prevent="getProducts(page)">{{ page }}</a>
      </li>

      <li class="page-item" :class="{ disabled: !pages.has_next }">
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="getProducts(pages.current_page + 1)"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { productsStore } from '../stores/productsStore'
export default {
  methods: {
    ...mapActions(productsStore, ['getProducts'])
  },
  computed: {
    ...mapState(productsStore, ['pages'])
  }
}
</script>
