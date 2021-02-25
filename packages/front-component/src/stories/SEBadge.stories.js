import '@/styles/index.scss'
import SEBadge from '@/components/SEBadge/index.vue'
import SEAvatar from '@/components/SEAvatar/index.vue'
import SEIcon from '@/components/SEIcon/index.vue'
import { Space } from 'ant-design-vue'

export default {
  title: 'Components/Badge',
  component: SEBadge,
  argTypes: {
    color: { control: { type: 'select', options: ['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'] } },
    status: { control: { type: 'select', options: ['success', 'processing', 'default', 'warning', 'error'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Space, SEAvatar, SEBadge, SEIcon },
  template: `<div>
  <Space size="large">
    <SEBadge count="5"><SEAvatar shape="square" icon="user" /></SEBadge> 
    <SEBadge count="0" show-zero><SEAvatar shape="square" icon="user" /></SEBadge> 
    <SEBadge dot><SEAvatar shape="square" icon="user" /></SEBadge>
    <SEBadge dot><SEIcon type="notification" /></SEBadge>
    <SEBadge dot><a href="#">Link something</a></SEBadge>
  </Space>
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEBadge count="5"><SEAvatar shape="square" icon="user" /></SEBadge> 
  <SEBadge count="0" show-zero><SEAvatar shape="square" icon="user" /></SEBadge> 
  <SEBadge dot><SEAvatar shape="square" icon="user" /></SEBadge>
  <SEBadge dot><SEIcon type="notification" /></SEBadge>
  <SEBadge dot><a href="#">Link something</a></SEBadge>
</div>`
    }
  }
}

export const OverflowCount = () => ({
  components: { SEBadge, Space, SEAvatar },
  template: `<Space size="large">
  <SEBadge :count="99">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="100">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="99" :overflow-count="10">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="1000" :overflow-count="999">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
</Space>
  `
})
OverflowCount.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEBadge :count="99">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="100">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="99" :overflow-count="10">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="1000" :overflow-count="999">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
</div>
      `
    }
  }
}

export const Status = () => ({
  components: { SEBadge, Space, SEAvatar },
  template: `<Space direction="vertical">
  <SEBadge status="success" text="Success" />
  <SEBadge status="error" text="Error" />
  <SEBadge status="default" text="Default" />
  <SEBadge status="processing" text="Processing" />
  <SEBadge status="warning" text="warning" />
</Space>
  `
})
Status.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEBadge :count="99">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="100">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="99" :overflow-count="10">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
  <SEBadge :count="1000" :overflow-count="999">
    <SEAvatar shape="square" icon="user" />
  </SEBadge>
</div>
      `
    }
  }
}

export const Color = () => ({
  components: { SEBadge, Space },
  template: `<Space size="middle" direction="vertical">
    <div>
      <h5 class="mb-3">Presets:</h5>
      <SEBadge color="pink" text="pink" />
      <SEBadge color="red" text="red" />
      <SEBadge color="yellow" text="yellow" />
      <SEBadge color="orange" text="orange" />
      <SEBadge color="cyan" text="cyan" />
      <SEBadge color="green" text="green" />
      <SEBadge color="blue" text="blue" />
      <SEBadge color="purple" text="purple" />
      <SEBadge color="geekblue" text="geekblue" />
      <SEBadge color="magenta" text="magenta" />
      <SEBadge color="volcano" text="volcano" />
      <SEBadge color="gold" text="gold" />
      <SEBadge color="lime" text="lime" />
    </div>
    <div>
      <h5 class="mb-3">Custom:</h5>
      <SEBadge color="#f50" text="#f50" />
      <SEBadge color="#2db7f5" text="#2db7f5" />
      <SEBadge color="#87d068" text="#87d068" />
      <SEBadge color="#108ee9" text="#108ee9" />
    </div>
  </Space>
  `
})

Color.parameters = {
  docs: {
    source: {
      code: `<div>
  <h5 class="mb-3">Presets:</h5>
  <SEBadge color="pink" text="pink" />
  <SEBadge color="red" text="red" />
  <SEBadge color="yellow" text="yellow" />
  <SEBadge color="orange" text="orange" />
  <SEBadge color="cyan" text="cyan" />
  <SEBadge color="green" text="green" />
  <SEBadge color="blue" text="blue" />
  <SEBadge color="purple" text="purple" />
  <SEBadge color="geekblue" text="geekblue" />
  <SEBadge color="magenta" text="magenta" />
  <SEBadge color="volcano" text="volcano" />
  <SEBadge color="gold" text="gold" />
  <SEBadge color="lime" text="lime" />
</div>
<div>
  <h5 class="mb-3">Custom:</h5>
  <SEBadge color="#f50" text="#f50" />
  <SEBadge color="#2db7f5" text="#2db7f5" />
  <SEBadge color="#87d068" text="#87d068" />
  <SEBadge color="#108ee9" text="#108ee9" />
</div>
      `
    }
  }
}
