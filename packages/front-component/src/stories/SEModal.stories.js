import '@/styles/index.scss'
import SEModal from '@/components/SEModal/index.vue'

export default {
  title: 'Components/Modal',
  component: SEModal,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEModal },
  template: `<div>
    <SEModal :showModal="true" >
      Content here ...
    </SEModal>
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEModal :showModal="true" > Content here ...</SEModal>'
    }
  }
}

export const Small = () => ({
  components: { SEModal },
  template: `<SEModal :showModal="true" size="small" >
    Content here ...
  </SEModal>
  `
})

Small.parameters = {
  docs: {
    source: {
      code: `<SEModal :showModal="true" size="small" >
  Content here ...
</SEModal>
      `
    }
  }
}

export const Large = () => ({
  components: { SEModal },
  template: `<SEModal :showModal="true" size="large" >
    Content here ...
  </SEModal>
  `
})

Large.parameters = {
  docs: {
    source: {
      code: `<SEModal :showModal="true" size="large" >
  Content here ...
</SEModal>
      `
    }
  }
}
