<template>
  <a-tooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </a-tooltip>
</template>

<script>
import Vue from 'vue'
import { Tooltip } from 'ant-design-vue'

Vue.use(Tooltip)
export default {
  mounted() {
    // console.log('Components2', Components)
  }
}
</script>
