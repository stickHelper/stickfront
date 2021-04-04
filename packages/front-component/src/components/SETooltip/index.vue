<template>
  <SETooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </SETooltip>
</template>

<script>
import { Tooltip } from 'ant-design-vue'

export default {
  components: {
    SETooltip: Tooltip
  }
}
</script>
