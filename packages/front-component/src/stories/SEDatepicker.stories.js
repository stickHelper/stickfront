import SEDatepicker from '@/components/SEDatepicker/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Components/Datepicker',
  component: SEDatepicker
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEDatepicker },
  template: '<SEDatepicker />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker />'
    }
  }
}

export const Label = () => ({
  components: { SEDatepicker },
  template: '<SEDatepicker label-name="Label info" />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker label-name="Label info" />'
    }
  }
}

export const Info = () => ({
  components: { SEDatepicker },
  template: '<SEDatepicker info="Message info" />'
})

Info.parameters = {
  docs: {
    source: {
      code: '<SEDatepicker info="Message info" />'
    }
  }
}

export const Error = (args) => ({
  components: { SEDatepicker },
  template: '<SEDatepicker label-name="Label error" :isError="true" info="Message Error" />'
})

Error.parameters = {
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
