import SETextarea from '@/components/SETextarea/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Components/Textarea',
  component: SETextarea
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETextarea },
  template: '<SETextarea />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SETextarea />'
    }
  }
}

export const Label = () => ({
  components: { SETextarea },
  template: '<SETextarea label-name="Label info" />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SETextarea label-name="Label info" />'
    }
  }
}

export const Info = () => ({
  components: { SETextarea },
  template: '<SETextarea info="Message info" />'
})

Info.parameters = {
  docs: {
    source: {
      code: '<SETextarea info="Message info" />'
    }
  }
}

export const Error = (args) => ({
  components: { SETextarea },
  template: '<SETextarea label-name="Label error" :isError="true" info="Message Error" />'
})

Error.parameters = {
  docs: {
    source: {
      code: '<SETextarea label-name="Label error" :isError="true" info="Message Error" />'
    }
  }
}

export const Icon = (args) => ({
  components: { SETextarea },
  template: '<SETextarea icon="icon-check" />'
})

Icon.parameters = {
  docs: {
    source: {
      code: '<SETextarea icon="icon-check" />'
    }
  }
}
