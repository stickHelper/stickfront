<template>
  <div
    v-if="showCode"
    class="code-card-highlight"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardHighlight',
  props: {
    showCode: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';

pre {
  tab-size: 2 !important;
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 0px;
  border: transparent;
}
code {
  padding-left: 17px;
  padding-right: 20px;
}
</style>>
