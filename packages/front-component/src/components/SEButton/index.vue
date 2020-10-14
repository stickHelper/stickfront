<template>
  <button
    type="button"
    :class="classes"
    :style="style"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'SEButton',
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'accent',
      validator: function (value) {
        return ['primary', 'secondary', 'accent', 'normal', 'dark'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-btn': true,
        [`se-btn--${this.color}`]: true,
        [`se-btn--${this.size}`]: true,
        [`${this.className}`]: this.className !== null
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('onClick')
    }
  }
}
</script>
