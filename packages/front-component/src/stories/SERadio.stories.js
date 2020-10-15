import SERadio from '@/components/SERadio/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Radio',
  component: SERadio
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SERadio },
  template: `<div>
  <SERadio
    id="value1"
    name="default"
    value="value1"
    label="Radio 1"
    class-name="mb-xs-2"
  />
  <SERadio
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
      code: `<SERadio
  name="default"
  value="value1"
  label="Radio 1"
  :checked="true"
/>
<SERadio
  id="own"
  name="default"
  value="value1"
  label="Radio 2"
/>`
    }
  }
}
