<template>
  <a-switch
    :id="id"
    :class="classes"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :loading="loading"
    :size="size"
    @change="onChange"
  />
</template>

<script>
import { Switch } from 'ant-design-vue'

export default {
  name: 'SESwitch',
  components: {
    'a-switch': Switch
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
    defaultChecked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['small', 'default'].indexOf(value) !== -1
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
        'se-switch': true,
        [`se-switch__${this.size}`]: this.size !== null,
        [`se-switch__${this.color}`]: this.color !== null,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    onChange(checked) {
      this.$emit('change', checked)
    }
  }
}
</script>
