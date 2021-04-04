import '@/styles/index.scss'
import SESelect from '@/components/SESelect/index.vue'

export default {
  title: 'Data Entry/Select',
  component: SESelect,
  argTypes: {
    mode: { control: { type: 'select', options: ['multiple', 'tags', 'default'] } },
    size: { control: { type: 'select', options: ['large', 'small', 'default'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESelect },
  template: `<div>
  <SESelect
    default-value="lucy"
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
  />
  <br />
  <SESelect
    default-value="lucy"
    loading
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
  />
  <br />
  <SESelect
    default-value="lucy"
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
    disabled
  />
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SESelect
  default-value="lucy"
  :options="[
    { label: 'jack', value: 'jack' },
    { label: 'lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' }
  ]"
/>

<SESelect
  default-value="lucy"
  loading
  :options="[
    { label: 'jack', value: 'jack' },
    { label: 'lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' }
  ]"
/>

<SESelect
  default-value="lucy"
  :options="[
    { label: 'jack', value: 'jack' },
    { label: 'lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' }
  ]"
  disabled
/>
`
    }
  }
}

export const Info = () => ({
  components: { SESelect },
  template: `<div>
  <SESelect
    label-name="Label info"
    info="Message info"
    placeholder="Please Select"
    helper="Helper text"
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
  />

  <br />
  <SESelect
    isError
    label-name="Label error"
    info="Message error"
    placeholder="Please Select"
    helper="Helper text"
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
  />

  <br />

  <SESelect
    isSuccess
    label-name="Label succes"
    info="Message succes"
    placeholder="Please Select"
    helper="Helper text"
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
  /> 

</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SESelect
  label-name="Label info"
  info="Message info"
  placeholder="Please Select"
  helper="Helper text"
  :options="[
    { label: 'jack', value: 'jack' },
    { label: 'lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' }
  ]"
/>

<SESelect
  isError
  label-name="Label error"
  info="Message error"
  placeholder="Please Select"
  helper="Helper text"
  :options="[
    { label: 'jack', value: 'jack' },
    { label: 'lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' }
  ]"
/>

<SESelect
  isSuccess
  label-name="Label succes"
  info="Message succes"
  placeholder="Please Select"
  helper="Helper text"
  :options="[
    { label: 'jack', value: 'jack' },
    { label: 'lucy', value: 'lucy' },
    { label: 'Yiminghe', value: 'yiminghe' }
  ]"
/>    
`
    }
  }
}

export const Multipe = () => ({
  components: { SESelect },
  template: `<div>
  <SESelect
    mode="multiple"
    :default-value="['a1', 'b1']"
    style="width: 100%"
    placeholder="Please select"
    :options="[
      { label: 'a1', value: 'a1'}, 
      { label: 'b1', value: 'b1'},
      { label: 'c1', value: 'c1'}, 
      { label: 'd1', value: 'd1'},
      { label: 'e1', value: 'e1'}, 
      { label: 'f1', value: 'f1'},
      { label: 'g1', value: 'g1'}, 
      { label: 'h1', value: 'h1'},
      { label: 'i1', value: 'i1'}, 
      { label: 'j1', value: 'j1'}
    ]"
  >
  </SESelect>  

</div>`
})

Multipe.parameters = {
  docs: {
    source: {
      code: `<SESelect
  mode="multiple"
  :default-value="['a1', 'b1']"
  style="width: 100%"
  placeholder="Please select"
  :options="[
    { label: 'a1', value: 'a1'}, 
    { label: 'b1', value: 'b1'},
    { label: 'c1', value: 'c1'}, 
    { label: 'd1', value: 'd1'},
    { label: 'e1', value: 'e1'}, 
    { label: 'f1', value: 'f1'},
    { label: 'g1', value: 'g1'}, 
    { label: 'h1', value: 'h1'},
    { label: 'i1', value: 'i1'}, 
    { label: 'j1', value: 'j1'}
  ]"
/>
`
    }
  }
}

export const Size = () => ({
  components: { SESelect },
  template: `<div>
  <SESelect
    label-name="Small"
    size="small"
    :options="[
      { label: 'lucy', value: 'lucy' }
    ]"
  />

  <br />

  <SESelect
    label-name="Default"
    :options="[
      { label: 'lucy', value: 'lucy' }
    ]"
  />

  <br />

  <SESelect
    label-name="Large"
    size="large"
    :options="[
      { label: 'lucy', value: 'lucy' }
    ]"
  />

</div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<SESelect
  label-name="Small"
  size="small"
  :options="[
    { label: 'lucy', value: 'lucy' }
  ]"
/>

<SESelect
  label-name="Default"
  :options="[
    { label: 'lucy', value: 'lucy' }
  ]"
/>

<SESelect
  label-name="Large"
  size="large"
  :options="[
    { label: 'lucy', value: 'lucy' }
  ]"
/>
`
    }
  }
}
