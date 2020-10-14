<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'CardDemo',
  props: {
    className: {
      type: String,
      default: 'flex-between'
    }
  },
  computed: {
    classes() {
      return {
        'code-card-demo': true,
        [`${this.className}`]: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
