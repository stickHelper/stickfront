import SEDatepicker from '@/components/SEDatepicker/index.vue'
import SESpace from '@/components/SESpace/index.vue'

import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/Datepicker',
  component: SEDatepicker,
  argTypes: {
    type: { control: { type: 'select', options: ['date', 'month', 'year', 'datetime', 'time', 'week'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEDatepicker },
  template: `<div>
  <SEDatepicker />
  <br/>
  <SEDatepicker label-name="Label Info" />
  <br />
  <SEDatepicker label-name="Label Info" helper="Helper text" info="Message info" />  
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEDatepicker />

  <SEDatepicker label-name="Label Info" />

  <SEDatepicker label-name="Label Info" helper="Helper text" info="Message info" />  
</div>`
    }
  }
}

export const Info = () => ({
  components: { SEDatepicker },
  template: `<div>
  <SEDatepicker label-name="Label Info" info="Message info" />
  <br />
  <SEDatepicker label-name="Label Info" helper="Helper text" info="Message info" isError /> 
  <br />
  <SEDatepicker label-name="Label Info" helper="Helper text" info="Message info" isSuccess />
</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SEDatepicker label-name="Label Info" info="Message info" />

<SEDatepicker label-name="Label Info" helper="Helper text" info="Message info" isError /> 

<SEDatepicker label-name="Label Info" helper="Helper text" info="Message info" isSuccess />`
    }
  }
}

export const Type = (args) => ({
  components: { SEDatepicker, SESpace },
  template: `<div>
<SESpace>
  <SEDatepicker label-name="Date (Default)" />
  <SEDatepicker label-name="Month" type="month" />
  <SEDatepicker label-name="Year" type="year" />
  <SEDatepicker label-name="Datetime" type="datetime" />
  <SEDatepicker label-name="Time" type="time" />
  <SEDatepicker label-name="Week" type="week" />
</SESpace>  
</div>`
})

Type.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker label-name="Label error" :isError="true" info="Message Error" />'
    }
  }
}

export const Success = (args) => ({
  components: { SEDatepicker },
  template: '<SEDatepicker label-name="Label success" :isSuccess="true"/>'
})

Success.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker label-name="Label success" :isSuccess="true" />'
    }
  }
}

export const Disabled = (args) => ({
  components: { SEDatepicker },
  template: '<SEDatepicker :is-disabled="true" />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker :is-disabled="true"  />'
    }
  }
}

export const Size = (args) => ({
  components: { SEDatepicker },
  template: `<div>
    <SEDatepicker size="small" value-input="Small" />
    <SEDatepicker value-input="Default" />
  </div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<SEDatepicker size="small" value-input="Small" />
<SEDatepicker value-input="Default" />`
    }
  }
}
