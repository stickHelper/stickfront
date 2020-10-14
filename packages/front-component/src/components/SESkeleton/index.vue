<template>
  <div
    :class="classes"
    :style="style"
  />
</template>

<script>
export default {
  name: 'SESkeleton',
  props: {
    className: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100px'
    }
  },
  computed: {
    classes() {
      return {
        'se-skeleton': true,
        [`${this.className}`]: this.className !== null
      }
    },
    style() {
      return {
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>
