import SESwitch from '@/components/SESwitch/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Data Entry/Switch',
  component: SESwitch
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESwitch },
  template: `<div>
  <SESwitch
    id="value1"
    name="default"
    value="value1"
    class-name="mb-xs-2"
  />
  <SESwitch
    id="value2"
    name="default"
    value="value2"
  />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SESwitch
  name="default"
  value="value1"
  :checked="true"
/>
<SESwitch
  id="own"
  name="default"
  value="value1"
/>`
    }
  }
}

export const Size = () => ({
  components: { SESwitch },
  template: `<div>
    <SESwitch
      id="valueSmall1"
      name="default"
      value="valueSmall1"
      class-name="mb-xs-2"
      size="small"
    />
    <SESwitch
      id="valueSmall2"
      name="default"
      value="valueSmall2"
    />
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<SESwitch
  id="valueSmall1"
  name="default"
  value="valueSmall1"
  class-name="mb-xs-2"
  size="small"
/>
<SESwitch
  id="valueSmall2"
  name="default"
  value="valueSmall2"
/>
      `
    }
  }
}
