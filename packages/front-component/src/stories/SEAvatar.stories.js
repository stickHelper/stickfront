import '@/styles/index.scss'
import 'ant-design-vue/dist/antd.css'

import SEAvatar from '@/components/SEAvatar/index.vue'
import { Space } from 'ant-design-vue'

export default {
  title: 'Components/Avatar',
  component: SEAvatar,
  argTypes: {
    size: {
      description: 'You can add using number or list of size',
      control: { type: 'select', options: ['small', 'default', 'large'] }
    },
    styleCustom: {
      description: 'You can add inline style custom'
    }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEAvatar, Space },
  template: `<div>
    <div>
      <Space>
        <SEAvatar :size="64" icon="user" />
        <SEAvatar size="large" icon="user" />
        <SEAvatar icon="user" />
        <SEAvatar size="small" icon="user" />
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SEAvatar shape="square" :size="64" icon="user" />
        <SEAvatar shape="square" size="large" icon="user" />
        <SEAvatar shape="square" icon="user" />
        <SEAvatar shape="square" size="small" icon="user" />
      </Space>
    </div>
  </div>
`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEAvatar :size="64" icon="user" />
  <SEAvatar size="large" icon="user" />
  <SEAvatar icon="user" />
  <SEAvatar size="small" icon="user" />
</div>
<div>
  <SEAvatar shape="square" :size="64" icon="user" />
  <SEAvatar shape="square" size="large" icon="user" />
  <SEAvatar shape="square" icon="user" />
  <SEAvatar shape="square" size="small" icon="user" />
</div>
      `
    }
  }
}

export const Type = () => ({
  components: { SEAvatar, Space },
  template: `<Space>
    <SEAvatar icon="user" />
    <SEAvatar>U</SEAvatar>
    <SEAvatar>USER</SEAvatar>
    <SEAvatar src="https://randomuser.me/api/portraits/women/17.jpg" />
    <SEAvatar styleCustom="color: #f56a00; backgroundColor: #fde3cf">
      U
    </SEAvatar>
    <SEAvatar styleCustom="backgroundColor:#87d068" icon="user" />
  </Space>
  `
})

Type.parameters = {
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
