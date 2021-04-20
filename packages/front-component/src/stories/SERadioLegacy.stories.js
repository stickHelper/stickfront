import SERadioLegacy from '@/components/SERadio/SERadioLegacy/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Data Entry/RadioLegacy',
  component: SERadioLegacy
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SERadioLegacy },
  template: `<div>
  <SERadioLegacy
    id="value1"
    name="default"
    value="value1"
    label="Radio 1"
    class-name="mb-xs-2"
  />
  <SERadioLegacy
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
      code: `<SERadioLegacy
  name="default"
  value="value1"
  label="Radio 1"
  :checked="true"
/>
<SERadioLegacy
  id="own"
  name="default"
  value="value1"
  label="Radio 2"
/>`
    }
  }
}
