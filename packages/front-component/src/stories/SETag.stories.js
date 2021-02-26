import '@/styles/index.scss'
import SETag from '@/components/SETag/index.vue'
import { Space } from 'ant-design-vue'

export default {
  title: 'Components/Tags',
  component: SETag,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'normal', 'dark', 'turquoise', 'red', 'green', 'light-blue', 'blue'] } },
    shape: { control: { type: 'select', options: ['square', 'round'] } },
    size: { control: { type: 'select', options: ['default', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETag, Space },
  template: `<div>
    <div>
      <Space>
        <SETag>Basic</SETag>
        <SETag size="large">Basic</SETag>
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SETag shape="round">Basic</SETag>
        <SETag shape="round" size="large">Basic</SETag>
      </Space>
    </div>
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SETag>Basic</SETag>
  <SETag size="large">Basic</SETag>
</div>

<div>
  <SETag shape="rounded">Basic</SETag>
  <SETag shape="rounded" size="large">Basic</SETag>
</div>
      `
    }
  }
}

export const Color = () => ({
  components: { SETag, Space },
  template: `<div>
    <div>
      <Space>
        <SETag color="primary">Primary</SETag>
        <SETag color="secondary">Secondary</SETag>
        <SETag color="accent">Accent</SETag>
        <SETag color="line">Line</SETag>
        <SETag color="normal">Normal</SETag>
        <SETag color="dark">Dark</SETag>
        <SETag color="turquoise">Turquoise</SETag>
        <SETag color="red">Red</SETag>
        <SETag color="error">Error</SETag>
        <SETag color="salmon">Salmon</SETag>
        <SETag color="green">Green</SETag>
        <SETag color="light-blue">Light Blue</SETag>
        <SETag color="blue">Blue</SETag>
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SETag color="primary" :full-color="true">Primary</SETag>
        <SETag color="secondary" :full-color="true">Secondary</SETag>
        <SETag color="accent" :full-color="true">Accent</SETag>
        <SETag color="line" :full-color="true">Line</SETag>
        <SETag color="normal" :full-color="true">Normal</SETag>
        <SETag color="dark" :full-color="true">Dark</SETag>
        <SETag color="turquoise" :full-color="true">Turquoise</SETag>
        <SETag color="red" :full-color="true">Red</SETag>
        <SETag color="error" :full-color="true">Error</SETag>
        <SETag color="salmon" :full-color="true">Salmon</SETag>
        <SETag color="green" :full-color="true">Green</SETag>
        <SETag color="light-blue" :full-color="true">Light Blue</SETag>
        <SETag color="blue" :full-color="true">Blue</SETag>
      </Space>
    </div>
  </div>
  `
})
Color.parameters = {
  docs: {
    source: {
      code: `<div>
  <SETag color="primary">Primary</SETag>
  <SETag color="secondary">Secondary</SETag>
  <SETag color="accent">Accent</SETag>
  <SETag color="line">Line</SETag>
  <SETag color="normal">Normal</SETag>
  <SETag color="dark">Dark</SETag>
  <SETag color="turquoise">Turquoise</SETag>
  <SETag color="red">Red</SETag>
  <SETag color="error">Error</SETag>
  <SETag color="salmon">Salmon</SETag>
  <SETag color="green">Green</SETag>
  <SETag color="light-blue">Light Blue</SETag>
  <SETag color="blue">Blue</SETag>
</div>

<div>
  <SETag color="primary" :full-color="true">Primary</SETag>
  <SETag color="secondary" :full-color="true">Secondary</SETag>
  <SETag color="accent" :full-color="true">Accent</SETag>
  <SETag color="line" :full-color="true">Line</SETag>
  <SETag color="normal" :full-color="true">Normal</SETag>
  <SETag color="dark" :full-color="true">Dark</SETag>
  <SETag color="turquoise" :full-color="true">Turquoise</SETag>
  <SETag color="red" :full-color="true">Red</SETag>
  <SETag color="error" :full-color="true">Error</SETag>
  <SETag color="salmon" :full-color="true">Salmon</SETag>
  <SETag color="green" :full-color="true">Green</SETag>
  <SETag color="light-blue" :full-color="true">Light Blue</SETag>
  <SETag color="blue" :full-color="true">Blue</SETag>
</div>
`
    }
  }
}

export const Closable = () => ({
  components: { SETag, Space },
  template: `<div>
    <div>
      <Space>
        <SETag closable color="primary">Primary</SETag>
        <SETag closable color="secondary">Secondary</SETag>
        <SETag closable color="accent">Accent</SETag>
        <SETag closable color="line">Line</SETag>
        <SETag closable color="normal">Normal</SETag>
        <SETag closable color="dark">Dark</SETag>
        <SETag closable color="turquoise">Turquoise</SETag>
        <SETag closable color="red">Red</SETag>
        <SETag closable color="error">Error</SETag>
        <SETag closable color="salmon">Salmon</SETag>
        <SETag closable color="green">Green</SETag>
        <SETag closable color="light-blue">Light Blue</SETag>
        <SETag closable color="blue">Blue</SETag>
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SETag closable color="primary" :full-color="true">Primary</SETag>
        <SETag closable color="secondary" :full-color="true">Secondary</SETag>
        <SETag closable color="accent" :full-color="true">Accent</SETag>
        <SETag closable color="line" :full-color="true">Line</SETag>
        <SETag closable color="normal" :full-color="true">Normal</SETag>
        <SETag closable color="dark" :full-color="true">Dark</SETag>
        <SETag closable color="turquoise" :full-color="true">Turquoise</SETag>
        <SETag closable color="red" :full-color="true">Red</SETag>
        <SETag closable color="error" :full-color="true">Error</SETag>
        <SETag closable color="salmon" :full-color="true">Salmon</SETag>
        <SETag closable color="green" :full-color="true">Green</SETag>
        <SETag closable color="light-blue" :full-color="true">Light Blue</SETag>
        <SETag closable color="blue" :full-color="true">Blue</SETag>
      </Space>
    </div>
  </div>
  `
})
