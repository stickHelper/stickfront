<template>
  <div :class="classes">
    <div v-if="showSizeChanger" class="se-pagination-v2__info">
      <SESelect
        default-value="10"
        :options="[
          { label: '10', value: 10 },
          { label: '20', value: 20 },
          { label: '30', value: 30 },
          { label: '40', value: 40 },
          { label: '50', value: 50 },
          { label: '60', value: 60 },
          { label: '70', value: 70 },
          { label: '80', value: 80 },
          { label: '90', value: 90 },
          { label: '100', value: 100 }
        ]"
        @change="$emit('changeSize', $event)"
      />
      <div>
        {{ messageInfo }}
      </div>
    </div>

    <Pagination
      v-model="current"
      :total="total"
      :page-size="perPage"
      :item-render="itemRender"
      :show-total="(total, range) => displayTotal(total, range)"
      @change="page => $emit('change', page)"
    />
  </div>
</template>

<script>
import { Pagination } from 'ant-design-vue'

export default {
  name: 'SEPaginationV2',
  components: {
    Pagination
  },
  props: {
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    showSizeChanger: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'purple',
      validator: function (value) {
        return ['purple'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: 'rectangle',
      validator: function (value) {
        return ['rectangle', 'circle'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'small'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      current: this.page,
      perPage: this.pageSize,
      messageInfo: ''
    }
  },
  computed: {
    classes() {
      return {
        'se-pagination-v2': true,
        [`se-pagination-v2__${this.color}`]: true,
        [`se-pagination-v2__${this.type}`]: true,
        [`se-pagination-v2__${this.size}`]: true
      }
    }
  },
  methods: {
    itemRender(current, type, originalElement) {
      if (type === 'prev') {
        return <a class="ant-pagination-item-link"><i class="icon icon-angle-left" /></a>
      } else if (type === 'next') {
        return <a class="ant-pagination-item-link"><i class="icon icon-angle-right" /></a>
      }
      return originalElement
    },
    displayTotal(total, range) {
      this.messageInfo = `Show ${range[0]} - ${range[1]} of ${total}`
    }
  }
}
</script>

<style>

</style>
