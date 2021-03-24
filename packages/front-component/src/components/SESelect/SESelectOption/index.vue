<template>
  <a-select-option
    :key="key"
    :class="className"
    :disabled="disabled"
    :title="title"
    :value="value"
  >
    ini
    <slot />
  </a-select-option>
</template>

<script>
import { Select } from 'ant-design-vue'

export default {
  name: 'SESelectOption',
  components: {
    'a-select-option': Select.Option
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    key: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    title: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    }
  }
}
</script>
