<template>
  <Icon
    :id="id"
    :class="classes"
    :type="type"
    :theme="theme"
    :spin="spin"
    :rotate="rotate"
    :two-tone-color="twoToneColor"
    :style="styled"
  />
</template>

<script>
import { Icon } from 'ant-design-vue'

export default {
  name: 'SEIcon',
  components: {
    Icon
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
    type: {
      type: String,
      default: null,
      required: true
    },
    theme: {
      type: String,
      default: 'outlined',
      validator: function (value) {
        return ['outlined', 'filled', 'twoTone'].indexOf(value) !== -1
      }
    },
    spin: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: Number,
      default: null
    },
    twoToneColor: {
      type: String,
      default: null
    },
    styled: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-icon': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
