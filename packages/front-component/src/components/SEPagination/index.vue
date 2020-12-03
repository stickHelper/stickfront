<template>
  <div
    :id="id"
    :class="classes"
  >
    <ul>
      <li @click="prevPage">
        <span>
          <i class="icon icon-angle-left" />
        </span>
      </li>
      <li
        v-for="(page, index) in paginated"
        :key="index"
        :class="page == pageActive ? 'active' : null"
        @click="choosePage(page)"
      >
        <span :class="page === '...' ? 'separator' : null">{{ page }}</span>
      </li>
      <li @click="nextPage">
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
    totalPages: {
      type: [Number, String],
      default: 1
    },
    currentPage: {
      type: [Number, String],
      default: 1
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['rectangle'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      pageActive: this.currentPage
    }
  },
  computed: {
    classes() {
      return {
        'se-pagination': true,
        [this.type]: this.type !== null,
        [this.className]: this.className !== null
      }
    },
    paginated() {
      let start = 0
      let end = 0
      let ceil = 0
      let floor = 0
      const limit = 5
      const page = Number(this.pageActive)
      const totalPages = Number(this.totalPages)
      const arrPages = []

      if (totalPages >= limit) {
        if (limit) {
          ceil += Math.ceil(limit / 2) + 1
          if (page <= ceil) {
            start = 1
            end = limit
            floor += page + Math.ceil(limit / 2)
          } else if (floor >= totalPages) {
            const newTotal = totalPages + 1
            start = newTotal - limit
            end = totalPages
          } else {
            const readFloor = Math.floor(limit / 2)
            start = page - readFloor
            end = page + readFloor
          }
        } else {
          start = 1
          end = totalPages
        }
      } else {
        start = 1
        end = totalPages
      }

      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
          arrPages.push(i)
        }
        return arrPages
      }

      return this.isTotalMoreThan(start, end, limit, page, totalPages)
    }
  },
  methods: {
    choosePage: function (page) {
      if (page !== '...') {
        this.pageActive = page
        this.$emit('change', page)
      }
    },
    nextPage: function () {
      if (this.pageActive === this.totalPages) return
      this.pageActive += 1
    },
    prevPage: function () {
      if (this.pageActive === 1) return
      this.pageActive -= 1
    },
    isTotalMoreThan: function (start, end, limit, page, total) {
      const readCeil = 1 + Math.ceil(limit / 2)
      const newCeil = Math.ceil(limit / 2)
      const limit1 = limit - 1
      const total1 = total - 4
      const total2 = total - Math.ceil(limit / 2)
      const total3 = total - (Math.floor(limit / 2) + 1)
      const arrPages = []

      if (end > total) {
        end = total
      }
      if (page < 5) {
        for (let i = start; i <= end; i++) {
          arrPages.push(i)
        }
      }
      if (page > readCeil) {
        arrPages.push(1)
      }
      if (page > limit1 && page >= newCeil) {
        arrPages.push('...')
        for (let i = start; i <= end; i++) {
          arrPages.push(i)
        }
      }
      if (page <= total1 && page <= total2) {
        arrPages.push('...')
      }
      if (page <= total3) {
        arrPages.push(total)
      }
      return arrPages
    }
  }
}
</script>
