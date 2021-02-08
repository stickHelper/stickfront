import SEBreadcrumbs from '@/components/SEBreadcrumbs/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Breadcrumbs',
  component: SEBreadcrumbs
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEBreadcrumbs },
  template: `<SEBreadcrumbs
    :items="[
      {
        label: 'Base Route',
        isActive: false,
        path: '/base'
      },
      {
        label: 'Details Route',
        isActive: true,
        path: ''
      }
    ]"
  />`
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<SEBreadcrumbs
        :items="[
          {
            label: 'Base Route',
            isActive: false,
            path: '/base'
          },
          {
            label: 'Details Route',
            isActive: true,
            path: ''
          }
        ]"
      />`
    }
  }
}
