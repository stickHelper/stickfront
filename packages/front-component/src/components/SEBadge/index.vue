<template>
  <div
    :id="id"
    :class="classes"
  >
    <Badge
      :count="count"
      :dot="dot"
      :show-zero="showZero"
      :overflow-count="overflowCount"
      :status="status"
      :text="text"
      :color="color"
    >
      <slot />
    </Badge>
  </div>
</template>

<script>
import { Badge } from 'ant-design-vue'

export default {
  name: 'SEBadge',
  components: {
    Badge
  },
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    count: {
      type: [Number, String],
      default: null
    },
    dot: {
      type: Boolean,
      default: false
    },
    // offset: {
    //   type: Array,
    //   default: () => null
    // },
    overflowCount: {
      type: Number,
      default: 99
    },
    showZero: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return [
          'pink',
          'red',
          'yellow',
          'orange',
          'cyan',
          'green',
          'blue',
          'purple',
          'geekblue',
          'magenta',
          'volcano',
          'gold',
          'lime'
        ].indexOf(value) !== -1
      }
    },
    status: {
      type: String,
      default: null,
      validator: function (value) {
        return [
          'success',
          'processing',
          'default',
          'warning',
          'error'
        ].indexOf(value) !== -1
      }
    },
    text: {
      type: String,
      default: null
    }
    // numberStyle: {
    //   type: Object,
    //   default: () => null
    // },
    // title: {
    //   type: String,
    //   default: this.count
    // }
  },
  computed: {
    classes() {
      return {
        'se-badge-a': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
