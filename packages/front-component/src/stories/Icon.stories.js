import '@/styles/index.scss'
import Icon from '@/components/Icon/index.vue'

export default {
  title: 'Global/Icons',
  component: Icon
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Icon },
  template: '<Icon />'
})

export const Default = Template.bind({})
