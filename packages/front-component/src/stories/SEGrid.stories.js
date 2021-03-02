import '@/styles/index.scss'
import SEGrid from '@/components/SEGrid/index.vue'

export default {
  title: 'Layout/Grid System',
  component: SEGrid
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEGrid },
  template: '<SEGrid />'
})

export const Default = Template.bind({})
