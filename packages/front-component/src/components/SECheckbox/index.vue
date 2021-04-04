<template>
  <div :class="classes">
    <Checkbox
      :disabled="disabled"
      :default-checked="defaultChecked"
      :value="value"
      :indeterminate="indeterminate"
      @change="onChange"
    >
      <slot />
    </Checkbox>
  </div>
</template>

<script>
import { Checkbox } from 'ant-design-vue'

export default {
  name: 'SECheckbox',
  components: {
    Checkbox
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
    checked: {
      type: Boolean,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return ['purple', 'yellow'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-checkbox': true,
        [`se-checkbox__${this.size}`]: this.size !== null,
        [`se-checkbox__${this.color}`]: this.color !== null,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.checked)
    }
  }
}
</script>
