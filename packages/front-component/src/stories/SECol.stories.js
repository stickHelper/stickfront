import SERow from '@/components/SERow/index.vue'
import SECol from '@/components/SECol/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Layout/Column',
  component: SECol
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SECol, SERow },
  template: `<SERow>
    <SECol>
      // Add your content here
    </SECol>
  </SERow>`
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: '<SECol />'
    }
  }
}
