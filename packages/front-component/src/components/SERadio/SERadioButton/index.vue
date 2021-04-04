<template>
  <RadioButton
    :default-checked="defaultChecked"
    :disabled="disabled"
    :value="value"
    :size="size"
    :class="classes"
  >
    <slot />
  </RadioButton>
</template>

<script>
// import Vue from 'vue'
import { Radio } from 'ant-design-vue'

// Vue.use(Radio)

export default {
  name: 'SERadioButton',
  components: {
    RadioButton: Radio.Button
  },
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  props: {
    className: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultChecked: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['large', 'small', 'default'].indexOf(value) !== -1
      }
    },
    value: {
      type: [String, Number],
      default: null
    },
    buttonStyle: {
      type: String,
      default: 'outline',
      validator: function (value) {
        return ['outline', 'solid'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-radio__button': true,
        [this.className]: this.className !== null,
        [`se-radio__button-${this.size}`]: this.size !== null
      }
    }
  }
}
</script>
