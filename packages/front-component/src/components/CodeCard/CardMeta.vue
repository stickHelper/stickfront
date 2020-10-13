<template>
  <div class="code-card-meta">
    <slot />
    <span class="code-expand">
      <img
        v-if="isShow"
        alt="expand code"
        title="show code"
        src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
        class="code-expand-icon-show"
        @click="hideCode"
      >
      <img
        v-else
        alt="expand code"
        title="hide code"
        src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
        class="code-expand-icon-show"
        @click="showCode"
      >
    </span>
  </div>
</template>

<script>
export default {
  name: 'CardMeta',
  data: function () {
    return { isShow: false }
  },
  methods: {
    onClick: function () {
      this.$emit('showCode', this.isShow)
    },
    showCode: function () {
      this.isShow = true
      this.onClick()
    },
    hideCode: function () {
      this.isShow = false
      this.onClick()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
