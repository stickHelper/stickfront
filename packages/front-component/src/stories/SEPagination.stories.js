import '@/styles/index.scss'
import SEPagination from '@/components/SEPagination/index.vue'

export default {
  title: 'Components/Pagination',
  component: SEPagination
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEPagination },
  template: '<SEPagination />'
})

export const Default = Template.bind({})
