<template>
  <div class="row">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SERow',
  props: {
    className: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        row: true,
        [`${this.className}`]: this.className !== null
      }
    }
  }
}
</script>
