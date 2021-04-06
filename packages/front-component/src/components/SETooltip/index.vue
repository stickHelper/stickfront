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
import Components from '@stickearn/stickfront'
// import { Tooltip } from 'ant-design-vue'

Vue.use(Components)
export default {
  components: {
    // SETooltip: Tooltip
  },
  mounted() {
    console.log('Components2', Components)
  }
}
</script>
