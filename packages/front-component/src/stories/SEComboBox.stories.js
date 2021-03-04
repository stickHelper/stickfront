import SECombobox from '@/components/SECombobox/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Components/Combobox',
  component: SECombobox,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'extra-small'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SECombobox },
  template: `<SECombobox
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
  />
  `
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SECombobox
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
  />      
</div>`
    }
  }
}

export const Label = () => ({
  components: { SECombobox },
  template: '<SECombobox label-name="Label info" />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SECombobox label-name="Label info" />'
    }
  }
}

export const Info = () => ({
  components: { SECombobox },
  template: '<SECombobox info="Message info" />'
})

Info.parameters = {
  docs: {
    source: {
      code: '<SECombobox info="Message info" />'
    }
  }
}

export const Error = (args) => ({
  components: { SECombobox },
  template: '<SECombobox label-name="Label error" :isError="true" info="Message Error" />'
})

Error.parameters = {
  docs: {
    source: {
      code: '<SECombobox label-name="Label error" :isError="true" info="Message Error" />'
    }
  }
}

export const Success = (args) => ({
  components: { SECombobox },
  template: '<SECombobox label-name="Label success" :isSuccess="true"/>'
})

Success.parameters = {
  docs: {
    source: {
      code: '<SECombobox label-name="Label success" :isSuccess="true" />'
    }
  }
}

export const Disabled = (args) => ({
  components: { SECombobox },
  template: '<SECombobox :is-disabled="true" />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SECombobox :is-disabled="true"  />'
    }
  }
}

export const Size = (args) => ({
  components: { SECombobox },
  template: `<div>
    <SECombobox size="small" />
    <SECombobox />
  </div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<SECombobox size="small" />
<SECombobox />`
    }
  }
}

export const Searchable = (args) => ({
  components: { SECombobox },
  template: `<div>
    <SECombobox
      size="small"
      :isSearch="true"
      :options="[
        { value: 'option1', name: 'option 1' },
        { value: 'option2', name: 'option 2' },
        { value: 'option3', name: 'option 3' },
        { value: 'option4', name: 'option 4' },
        { value: 'option5', name: 'option 5' }
      ]"
    />
    <SECombobox
      :isSearch="true"
      :options="[
        { value: 'option1', name: 'option 1' },
        { value: 'option2', name: 'option 2' },
        { value: 'option3', name: 'option 3' },
        { value: 'option4', name: 'option 4' },
        { value: 'option5', name: 'option 5' }
      ]"
    />
  </div>`
})

Searchable.parameters = {
  docs: {
    source: {
      code: `<SECombobox
  size="small"
  :isSearch="true"
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
/>
<SECombobox
  :isSearch="true"
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
/>
`
    }
  }
}
