import SETextfield from '@/components/SETextfield/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Components/Textfield',
  component: SETextfield
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETextfield },
  template: '<SETextfield />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SETextfield />'
    }
  }
}

export const Label = () => ({
  components: { SETextfield },
  template: '<SETextfield label-name="Label info" />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SETextfield label-name="Label info" />'
    }
  }
}

export const Info = () => ({
  components: { SETextfield },
  template: '<SETextfield info="Message info" />'
})

Info.parameters = {
  docs: {
    source: {
      code: '<SETextfield info="Message info" />'
    }
  }
}

export const Error = (args) => ({
  components: { SETextfield },
  template: '<SETextfield label-name="Label error" :isError="true" info="Message Error" />'
})

Error.parameters = {
  docs: {
    source: {
      code: '<SETextfield label-name="Label error" :isError="true" info="Message Error" />'
    }
  }
}

export const Success = (args) => ({
  components: { SETextfield },
  template: '<SETextfield label-name="Label success" :isSuccess="true"/>'
})

Success.parameters = {
  docs: {
    source: {
      code: '<SETextfield label-name="Label success" :isSuccess="true" />'
    }
  }
}

export const Icon = (args) => ({
  components: { SETextfield },
  template: '<SETextfield icon="icon-check" />'
})

Icon.parameters = {
  docs: {
    source: {
      code: '<SETextfield icon="icon-check" />'
    }
  }
}

export const Disabled = (args) => ({
  components: { SETextfield },
  template: '<SETextfield :is-disabled="true" />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SETextfield :is-disabled="true"  />'
    }
  }
}

export const Size = (args) => ({
  components: { SETextfield },
  template: `<div>
    <SETextfield size="small" value-input="Small" />
    <SETextfield value-input="Default" />
  </div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<SETextfield size="small" value-input="Small" />
<SETextfield value-input="Default" />`
    }
  }
}
