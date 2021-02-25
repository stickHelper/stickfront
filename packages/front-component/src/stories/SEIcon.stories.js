import '@/styles/index.scss'
import Icon from '@/components/Icon/index.vue'
import SEIcon from '@/components/SEIcon/index.vue'
import { Space } from 'ant-design-vue'

export default {
  title: 'Global/Icons',
  component: SEIcon
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon />'
})

export const Default = Template.bind({})

export const AntIcon = () => ({
  components: { SEIcon, Space },
  template: `<div>
  <h6>For more information about the ant-design icon, you can check <a href="https://www.antdv.com/components/icon">here</a>. Because this icon is different from then default</h6>
  <br />
  <Space size="middle">
    <SEIcon type="user" />
    <SEIcon type="check-circle" theme="filled" />
    <SEIcon type="sync" spin />
    <SEIcon type="smile" :rotate="180" />
    <SEIcon type="loading" />
    <SEIcon type="smile" theme="twoTone" />
    <SEIcon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
  </Space>
</div>
  `
})

AntIcon.decorators = [() => ({ template: '<div style="font-size: 24px;"><story /></div>' })]

AntIcon.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEIcon type="user" />
  <SEIcon type="check-circle" theme="filled" />
  <SEIcon type="sync" spin />
  <SEIcon type="smile" :rotate="180" />
  <SEIcon type="loading" />
  <SEIcon type="smile" theme="twoTone" />
  <SEIcon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
</div>
      `
    }
  }
}
