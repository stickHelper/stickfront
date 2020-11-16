import SECheckbox from '@/components/SECheckbox/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Checkbox',
  component: SECheckbox
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SECheckbox },
  template: `<div>
  <SECheckbox
    id="value1"
    name="default"
    value="value1"
    label="Checkbox 1"
    class-name="mb-xs-2"
  />
  <SECheckbox
    id="value2"
    name="default"
    value="value2"
    label="Checkbox 2"
  />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SECheckbox
  name="default"
  value="value1"
  label="Checkbox 1"
  :checked="true"
/>
<SECheckbox
  id="own"
  name="default"
  value="value1"
  label="Checkbox 2"
/>`
    }
  }
}

export const Size = (args) => ({
  components: { SECheckbox },
  template: `<div>
    <SECheckbox
      id="small"
      name="size"
      value="small"
      label="Small"
      size="small"
      class-name="mb-xs-2"
    />
    <SECheckbox
      id="default"
      name="size"
      value="default"
      label="Default"
    />
  </div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<SECheckbox
  id="small"
  name="size"
  value="small"
  label="Small"
  size="small"
  class-name="mb-xs-2"
/>
<SECheckbox
  id="default"
  name="size"
  value="default"
  label="Default"
/>`
    }
  }
}
