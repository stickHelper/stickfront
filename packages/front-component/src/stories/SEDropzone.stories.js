import SEDropzone from '@/components/SEDropzone/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Dropzone',
  component: SEDropzone
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEDropzone },
  template: '<SEDropzone />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEDropzone />'
    }
  }
}
