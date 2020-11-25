import SEFileAttachment from '@/components/SEFileAttachment/index.vue'

export default {
	title: 'Components/File Attachment',
	component: SEFileAttachment
}

const Template = (args, {argTypes}) => ({
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

