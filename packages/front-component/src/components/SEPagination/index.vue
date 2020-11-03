<template>
  <div
    :id="id"
    :class="classes"
  >
    <ul>
      <li>
        <span>
          <i class="icon icon-angle-left" />
        </span>
      </li>
      <li
        v-for="(page) in Number(totalRows)"
        :key="page"
        :class="page == currentPage ? 'active' : null"
        @click="choosePage(page)"
      >
        <span>{{ page }}</span>
      </li>
      <li>
        <span>
          <i class="icon icon-angle-right" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SEPagination',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    totalRows: {
      type: [Number, String],
      default: 5
    },
    perPage: {
      type: [Number, String],
      default: 10
    },
    currentPage: {
      type: [Number, String],
      default: 1
    }
  },
  computed: {
    classes() {
      return {
        'se-pagination': true,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    choosePage: function (page) {
      this.$emit('change', page)
    }
  }
}
</script>
