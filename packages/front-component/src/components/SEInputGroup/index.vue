<template>
  <div
    :id="id"
    :class="classes"
  >
    <InputGroup
      :compact="compact"
      :size="size"
    >
      <slot />
    </InputGroup>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'

export default {
  name: 'SEInputGroup',
  components: {
    InputGroup: Input.Group
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
    compact: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-inputgroup': true,
        [`se-inputgroup__${this.size}`]: this.size !== null,
        [this.className]: this.className !== null,
        disabled: this.disabled,
        error: this.isError,
        success: this.isSuccess
      }
    }
  }
}
</script>
