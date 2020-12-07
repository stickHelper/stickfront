import SEToast from '@/components/SEToast/index.vue'

export default {
  title: 'Components/Toast',
  component: SEToast
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEToast },
  template: '<SEToast message="This is toaster" />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SEToast />'
    }
  }
}