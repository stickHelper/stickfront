<template>
  <div :id="id" :class="classes">
    <RadioGroup
      :default-value="defaultValue"
      :disabled="disabled"
      :size="size"
      @change="onChange"
    >
      <slot />
    </RadioGroup>
  </div>
</template>

<script>
// import Vue from 'vue'
import { Radio } from 'ant-design-vue'

// Vue.use(Radio)

export default {
  name: 'SERadioGroup',
  components: {
    RadioGroup: Radio.Group
  },
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: [String, Number, Boolean],
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
        'se-radio__group': true,
        [this.className]: this.className !== null,
        [`se-radio__group-${this.size}`]: this.size !== null
      }
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
