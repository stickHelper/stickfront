import Typhography from '@/components/Typhography/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Global/Typhography',
  component: Typhography
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Typhography },
  template: '<Typhography />'
})

export const Default = Template.bind({})
