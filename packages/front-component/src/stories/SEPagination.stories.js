import '@/styles/index.scss'
import SEPagination from '@/components/SEPagination/index.vue'

export default {
  title: 'Components/Pagination',
  component: SEPagination
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEPagination },
  template: '<SEPagination totalPages="10" />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEPagination totalPages="10" />'
    }
  }
}
