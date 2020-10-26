import SESwitch from '@/components/SESwitch/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Switch',
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
    label="Radio 1"
    class-name="mb-xs-2"
  />
  <SESwitch
    id="value2"
    name="default"
    value="value2"
    label="Radio 2"
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
  label="Radio 1"
  :checked="true"
/>
<SESwitch
  id="own"
  name="default"
  value="value1"
  label="Radio 2"
/>`
    }
  }
}
