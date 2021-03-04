import SECheckbox from '@/components/SECheckbox/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Checkbox',
  component: SECheckbox,
  argTypes: {
    size: { control: { type: 'select', options: ['small'] } },
    color: { control: { type: 'select', options: ['primary', 'secondary'] } }
  }
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

export const Colors = (args) => ({
  components: { SECheckbox },
  template: `<div>
    <SECheckbox
      id="deafult"
      name="colors"
      value="deafult"
      label="Default"
      checked
      class-name="mb-xs-2"
    />
    <SECheckbox
      id="primary"
      name="colors"
      value="primary"
      label="Primary"
      color="primary"
      checked
      class-name="mb-xs-2"
    />
    <SECheckbox
      id="secondary"
      name="colors"
      value="secondary"
      color="secondary"
      checked
      label="Secondary"
    />
  </div>`
})

export const Disabled = (args) => ({
  components: { SECheckbox },
  template: `<div>
    <SECheckbox
      id="default"
      name="size"
      value="default"
      label="Disabled"
      :is-disabled="true"
    />
  </div>`
})

Disabled.parameters = {
  docs: {
    source: {
      code: `<SECheckbox
  id="default"
  name="size"
  value="default"
  label="Dsiabled"
  :is-disabled="true"
/>`
    }
  }
}
