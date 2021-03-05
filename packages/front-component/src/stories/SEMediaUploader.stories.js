import '@/styles/index.scss'
import SEMediaUploader from '@/components/SEMediaUploader/index.vue'

export default {
  title: 'Components/Media Uploader',
  component: SEMediaUploader
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEMediaUploader },
  template: '<SEMediaUploader />'
})

export const Default = Template.bind({})
