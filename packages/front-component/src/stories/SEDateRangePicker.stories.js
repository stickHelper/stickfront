import SEDateRangePicker from '@/components/SEDateRangePicker/index.vue'

import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/DateRangePicker',
  component: SEDateRangePicker
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker />'
    }
  }
}

export const Label = () => ({
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker label-name="Label info" />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker label-name="Label info" />'
    }
  }
}

export const LabelInline = () => ({
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker label-name="Label info" isInline />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker label-name="Label info" isInline />'
    }
  }
}

export const Info = () => ({
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker info="Message info" />'
})

Info.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker info="Message info" />'
    }
  }
}

export const Error = (args) => ({
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker label-name="Label error" :isError="true" info="Message Error" />'
})

Error.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker label-name="Label error" :isError="true" info="Message Error" />'
    }
  }
}

export const Success = (args) => ({
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker label-name="Label success" :isSuccess="true"/>'
})

Success.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker label-name="Label success" :isSuccess="true" />'
    }
  }
}

export const Disabled = (args) => ({
  components: { SEDateRangePicker },
  template: '<SEDateRangePicker :isDisabled="true" />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SEDateRangePicker :isDisabled="true"  />'
    }
  }
}

export const Size = (args) => ({
  components: { SEDateRangePicker },
  template: `<div>
    <SEDateRangePicker size="small" />
    <SEDateRangePicker />
  </div>`
})

Size.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker size="small" /><SEDatepicker />'
    }
  }
}
