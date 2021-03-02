<template>
  <Space
    :align="align"
    :direction="direction"
    :size="size"
  >
    <slot />
  </Space>
</template>

<script>
import { Space } from 'ant-design-vue'

export default {
  name: 'SESpace',
  components: {
    Space
  },
  props: {
    align: {
      type: String,
      default: null,
      validator: function (value) {
        return ['start', 'end', 'center', 'baseline'].indexOf(value) !== -1
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: function (value) {
        return ['vertical', 'horizontal'].indexOf(value) !== -1
      }
    },
    size: {
      type: [String, Number],
      default: 'small',
      validator: function (value) {
        return typeof val === 'number' || ['small', 'middle', 'large'].indexOf(value) !== -1
      }
    }
  }
}
</script>
