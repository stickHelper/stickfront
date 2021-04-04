import '@/styles/index.scss'
import 'ant-design-vue/dist/antd.css'

import SETooltip from '@/components/SETooltip/index.vue'
import SETooltipPlacement from '@/components/SETooltip/Placement.vue'
import { Tooltip } from 'ant-design-vue'

export default {
  title: 'Components/Tooltip',
  component: Tooltip
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETooltip },
  template: `<div>
    <SETooltip />
  </div>
`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETooltip>
    <template slot="title">
      prompt text
    </template>
    Tooltip will show when mouse enter.
  </SETooltip>
</template>
      `
    }
  }
}

export const Placement = () => ({
  components: { SETooltipPlacement },
  template: `<div>
    <SETooltipPlacement />
  `
})

Placement.parameters = {
  docs: {
    source: {
      code: `<SEAvatar icon="user" />
<SEAvatar>U</SEAvatar>
<SEAvatar>USER</SEAvatar>
<SEAvatar src="https://randomuser.me/api/portraits/women/17.jpg" />
<SEAvatar styleCustom="color: #f56a00; backgroundColor: #fde3cf">
  U
</SEAvatar>
<SEAvatar styleCustom="backgroundColor:#87d068" icon="user" />
      `
    }
  }
}
