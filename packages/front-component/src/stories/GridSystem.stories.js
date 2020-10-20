import GridSystem from '@/components/GridSystem/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Global/Grid System',
  component: GridSystem
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { GridSystem },
  template: '<GridSystem />'
})

export const Default = Template.bind({})
