<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <SETooltip placement="topLeft">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>TL</SEButton>
      </SETooltip>
      <SETooltip placement="top">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>Top</SEButton>
      </SETooltip>
      <SETooltip placement="topRight">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>TR</SEButton>
      </SETooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <SETooltip placement="leftTop">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>LT</SEButton>
      </SETooltip>
      <SETooltip placement="left">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>Left</SEButton>
      </SETooltip>
      <SETooltip placement="leftBottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>LB</SEButton>
      </SETooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <SETooltip placement="rightTop">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>RT</SEButton>
      </SETooltip>
      <SETooltip placement="right">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>Right</SEButton>
      </SETooltip>
      <SETooltip placement="rightBottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>RB</SEButton>
      </SETooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <SETooltip placement="bottomLeft">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>BL</SEButton>
      </SETooltip>
      <SETooltip placement="bottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>Bottom</SEButton>
      </SETooltip>
      <SETooltip placement="bottomRight">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <SEButton>BR</SEButton>
      </SETooltip>
    </div>
  </div>
</template>

<script>
import { Tooltip } from 'ant-design-vue'
import SEButton from '@/components/SEButton'

export default {
  components: {
    SETooltip: Tooltip,
    SEButton
  },
  data() {
    return {
      buttonWidth: 70
    }
  }
}
</script>

<style scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
