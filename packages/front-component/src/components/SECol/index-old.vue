<template>
  <div
    :id="id"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SECol',
  props: {
    id: {
      type: String,
      default: null
    },
    lg: {
      type: [String, Number],
      default: 12
    },
    md: {
      type: [String, Number],
      default: null
    },
    sm: {
      type: [String, Number],
      default: null
    },
    xs: {
      type: [String, Number],
      default: null
    },
    className: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        [`col-lg-${this.lg}`]: this.lg !== null,
        [`col-md-${this.md}`]: this.md !== null,
        [`col-sm-${this.sm}`]: this.sm !== null,
        [`col-xs-${this.xs}`]: this.xs !== null,
        [`${this.className}`]: this.className !== null
      }
    }
  }
}
</script>
