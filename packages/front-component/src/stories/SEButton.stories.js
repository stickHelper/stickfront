import '@/styles/index.scss'
import SEButton from '@/components/SEButton/index.vue'
import SEIcon from '@/components/SEIcon/index.vue'
import { Space } from 'ant-design-vue'

export default {
  title: 'Components/Button',
  component: SEButton,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'normal', 'dark', 'line', 'error', 'red', 'salmon', 'turquoise', 'blue', 'light-blue'] } },
    size: { control: { type: 'select', options: ['small', 'large'] } },
    type: { control: { type: 'select', options: ['outline'] } },
    shape: { control: { type: 'select', options: ['circle', 'round'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEButton, Space },
  template: `<Space>
  <SEButton v-bind="$props">Default</SEButton>
  <SEButton type="outline">Outline</SEButton>
</Space>
`
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEButton v-bind="$props">Default</SEButton>
  <SEButton type="outline">Outline</SEButton>      
</div>`
    }
  }
}

export const Color = () => ({
  components: { SEButton, Space },
  template: `<div >
  <div>
    <Space size="middle">
      <SEButton color="primary">Primary</SEButton>
      <SEButton color="secondary">Secondary</SEButton>
      <SEButton color="normal">Normal</SEButton>
      <SEButton color="dark">Dark</SEButton>
      <SEButton color="line">Line</SEButton>
      <SEButton color="red">red</SEButton>
      <SEButton color="error">Error</SEButton>
      <SEButton color="salmon">Salmon</SEButton>
      <SEButton color="blue">Blue</SEButton>
      <SEButton color="light-blue">Light Blue</SEButton>
    </Space>
  </div>
  <br />
  <div>
    <Space size="middle">
      <SEButton color="primary" type="outline">Primary</SEButton>
      <SEButton color="secondary" type="outline">Secondary</SEButton>
      <SEButton color="normal" type="outline">Normal</SEButton>
      <SEButton color="dark" type="outline">Dark</SEButton>
      <SEButton color="line" type="outline">Line</SEButton>
      <SEButton color="red" type="outline">red</SEButton>
      <SEButton color="error" type="outline">Error</SEButton>
      <SEButton color="salmon" type="outline">Salmon</SEButton>
      <SEButton color="blue" type="outline">Blue</SEButton>
      <SEButton color="light-blue" type="outline">Light Blue</SEButton>
    </Space>
  </div>
</div>
  `
})

Color.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEButton color="primary">Primary</SEButton>
  <SEButton color="secondary">Secondary</SEButton>
  <SEButton color="normal">Normal</SEButton>
  <SEButton color="dark">Dark</SEButton>
  <SEButton color="line">Line</SEButton>
  <SEButton color="red">red</SEButton>
  <SEButton color="error">Error</SEButton>
  <SEButton color="salmon">Salmon</SEButton>
  <SEButton color="blue">Blue</SEButton>
  <SEButton color="light-blue">Light Blue</SEButton>      
</div>
<div>
  <SEButton color="primary" type="outline">Primary</SEButton>
  <SEButton color="secondary" type="outline">Secondary</SEButton>
  <SEButton color="normal" type="outline">Normal</SEButton>
  <SEButton color="dark" type="outline">Dark</SEButton>
  <SEButton color="line" type="outline">Line</SEButton>
  <SEButton color="red" type="outline">red</SEButton>
  <SEButton color="error" type="outline">Error</SEButton>
  <SEButton color="salmon" type="outline">Salmon</SEButton>
  <SEButton color="blue" type="outline">Blue</SEButton>
  <SEButton color="light-blue" type="outline">Light Blue</SEButton>
</div>
      `
    }
  }
}

export const Size = () => ({
  components: { SEButton, Space },
  template: `<div>
  <Space size="middle">
    <SEButton size="small">Small</SEButton>
    <SEButton>Default</SEButton>
    <SEButton size="large">Large</SEButton>
  </Space>
  <br /><br />
  <Space size="middle">
    <SEButton size="small" type="outline">Small</SEButton>
    <SEButton type="outline">Default</SEButton>
    <SEButton size="large" type="outline">Large</SEButton>
  </Space>
</div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEButton size="small">Small</SEButton>
  <SEButton>Default</SEButton>
  <SEButton size="large">Large</SEButton>
</div>
<div>
  <SEButton size="small" type="outline">Small</SEButton>
  <SEButton type="outline">Default</SEButton>
  <SEButton size="large" type="outline">Large</SEButton>
</div>
      `
    }
  }
}

export const Shape = () => ({
  components: { SEButton, Space },
  template: `<div>
  <Space>
    <SEButton shape="circle" size="small" icon="search" />
    <SEButton shape="circle">A</SEButton>
    <SEButton shape="circle" size="large" icon="search" />
  </Space>
  <br /><br />
  <Space>
    <SEButton shape="round" size="small">Round</SEButton>
    <SEButton shape="round">Round</SEButton>
    <SEButton shape="round" size="large">Round</SEButton>
  </Space>
</div>
  `
})

Shape.parameters = {
  docs: {
    source: {
      code: `<div>
  <div>
    <SEButton shape="circle" size="small" icon="search" />
    <SEButton shape="circle">A</SEButton>
    <SEButton shape="circle" size="large" icon="search" />
  </div>
  <div>
    <SEButton shape="round" size="small">Round</SEButton>
    <SEButton shape="round">Round</SEButton>
    <SEButton shape="round" size="large">Round</SEButton>
  </div>
</div>`
    }
  }
}

export const Loading = () => ({
  components: { SEButton, Space },
  template: `<Space size="middle">
    <SEButton loading>Loading</SEButton>
    <SEButton color="primary" size="large" loading>Loading</SEButton>
  </Space>
  `
})

Loading.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEButton loading>Loading</SEButton>
  <SEButton color="primary" size="large" loading>Loading</SEButton>
</div>    
`
    }
  }
}

export const Block = () => ({
  components: { SEButton, Space },
  template: `<div >
    <div>
      <SEButton block>Block</SEButton>
    </div>
    <br />
    <div>
      <SEButton color="primary" size="large" block>Block</SEButton>
    </div>
  </div>
  `
})

Block.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEButton block>Block</SEButton>
  <SEButton color="primary" size="large" block>Block</SEButton>
</div>    
`
    }
  }
}

export const Icon = () => ({
  components: { SEButton, Space, SEIcon },
  template: `<Space size="middle">
    <SEButton><SEIcon type="left" />Go back</SEButton>
    <SEButton>Go forward<SEIcon type="right" /></SEButton>
  </Space>
  `
})

Icon.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEButton><SEIcon type="left" />Go back</SEButton>
  <SEButton>Go forward<SEIcon type="right" /></SEButton>
</div>    
`
    }
  }
}
