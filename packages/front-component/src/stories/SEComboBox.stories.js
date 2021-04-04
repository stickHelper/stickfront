import SECombobox from '@/components/SECombobox/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/Combobox',
  component: SECombobox,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SECombobox },
  template: `<div>
  <SECombobox
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
    placeholder="Choose options..."
  />

  <br/>

  <SECombobox
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
    placeholder="Choose options..."
    helper="Helper text"
  />

  <br/>
    
  <SECombobox
    label-name="Label info"
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
    placeholder="Choose options..."
    helper="Helper text"
  />
</div>
  `
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SECombobox
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
  placeholder="Choose options..."
/>

<SECombobox
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
  placeholder="Choose options..."
  helper="Helper text"
/>
      
<SECombobox
  label-name="Label info"
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
  placeholder="Choose options..."
  helper="Helper text"
/>`
    }
  }
}

export const Info = () => ({
  components: { SECombobox },
  template: `<div>
  <SECombobox
    label-name="Label info"
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
    placeholder="Choose options..."
    info="Message info"
  />
  <br>

  <SECombobox
    label-name="Label error"
    isRequired
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
    placeholder="Choose options..."
    info="Message error"
    isError
  />

  <br>

  <SECombobox
    label-name="Label success"
    :options="[
      { value: 'option1', name: 'option 1' },
      { value: 'option2', name: 'option 2' },
      { value: 'option3', name: 'option 3' },
      { value: 'option4', name: 'option 4' },
      { value: 'option5', name: 'option 5' }
    ]"
    placeholder="Choose options..."
    info="Message success"
    isSuccess
  />
</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SECombobox
  label-name="Label info"
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
  placeholder="Choose options..."
  info="Message info"
/>

<SECombobox
  label-name="Label error"
  isRequired
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
  placeholder="Choose options..."
  info="Message error"
  isError
/>

<SECombobox
  label-name="Label success"
  :options="[
    { value: 'option1', name: 'option 1' },
    { value: 'option2', name: 'option 2' },
    { value: 'option3', name: 'option 3' },
    { value: 'option4', name: 'option 4' },
    { value: 'option5', name: 'option 5' }
  ]"
  placeholder="Choose options..."
  info="Message success"
  isSuccess
/>`
    }
  }
}

export const Disabled = (args) => ({
  components: { SECombobox },
  template: '<SECombobox disabled />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SECombobox disabled />'
    }
  }
}

export const Size = (args) => ({
  components: { SECombobox },
  template: `<div>
    <SECombobox size="small" />
    <SECombobox />
    <SECombobox size="large" />
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
