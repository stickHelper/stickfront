<template>
  <div :id="id" :class="classes">
    <Radio
      :default-checked="defaultChecked"
      :disabled="disabled"
      :size="size"
      :value="value"
      :style="styles"
      @change="$emit('change', $event.target.value)"
    >
      <slot />
    </Radio>
  </div>
</template>

<script>
// import Vue from 'vue'
import { Radio } from 'ant-design-vue'

// Vue.use(Radio)

export default {
  name: 'SERadio',
  components: {
    Radio
  },
  props: {
    id: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: null
    },
    defaultChecked: {
      type: Boolean,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    styles: {
      type: Object,
      default: () => null
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['large', null].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-radio': true,
        [this.className]: this.className !== null,
        [`se-radio__${this.size}`]: this.size !== null
      }
    }
  }
}
</script>
