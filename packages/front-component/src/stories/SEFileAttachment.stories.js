import SEFileAttachment from '@/components/SEFileAttachment/index.vue'

export default {
  title: 'Data Entry/File Attachment',
  component: SEFileAttachment
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEFileAttachment },
  template: '<SEFileAttachment />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment />'
    }
  }
}

export const Label = () => ({
  components: { SEFileAttachment },
  template: '<SEFileAttachment label-name="Label info" />'
})

Label.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment label-name="Label info" />'
    }
  }
}

export const LabelInline = () => ({
  components: { SEFileAttachment },
  template: '<SEFileAttachment label-name="Label info" :isInline="true" />'
})

LabelInline.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment label-name="Label info" :isInline="true" />'
    }
  }
}

export const Info = () => ({
  components: { SEFileAttachment },
  template: '<SEFileAttachment info="Message info" />'
})

Info.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment info="Message info" />'
    }
  }
}

export const Error = (args) => ({
  components: { SEFileAttachment },
  template: '<SEFileAttachment label-name="Label error" :isError="true" info="Message Error" />'
})

Error.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment label-name="Label error" :isError="true" info="Message Error" />'
    }
  }
}

export const Success = (args) => ({
  components: { SEFileAttachment },
  template: '<SEFileAttachment label-name="Label success" :isSuccess="true"/>'
})

Success.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment label-name="Label success" :isSuccess="true" />'
    }
  }
}

export const Disabled = (args) => ({
  components: { SEFileAttachment },
  template: '<SEFileAttachment :is-disabled="true" />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SEFileAttachment :is-disabled="true"  />'
    }
  }
}
