import '@/styles/index.scss'
import Class from '@/components/Class/index.vue'

export default {
  title: 'Global/Class',
  component: Class
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Class },
  template: '<Class />'
})

export const Default = Template.bind({})
