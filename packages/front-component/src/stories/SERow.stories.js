import SERow from '@/components/SERow/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Row',
  component: SERow
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SERow },
  template: '<SERow />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SERow />'
    }
  }
}
