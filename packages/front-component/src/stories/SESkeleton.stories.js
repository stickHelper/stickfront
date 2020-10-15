import SESkeleton from '@/components/SESkeleton/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Skeleton',
  component: SESkeleton,
  argTypes: {
    height: { description: '' },
    width: { description: '' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESkeleton },
  template: '<SESkeleton />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SESkeleton />'
    }
  }
}

export const Custom = () => ({
  components: { SESkeleton },
  template: `<div>
    <SESkeleton width="40%" height="30px" />
    <SESkeleton width="70%" height="30px" />
    <SESkeleton width="50%" height="30px" />
    <SESkeleton width="60%" height="30px" />
  </div>
  `
})

Custom.parameters = {
  docs: {
    source: {
      code: ` <SESkeleton width="40%" height="30px" />
<SESkeleton width="70%" height="30px" />
<SESkeleton width="50%" height="30px" />
<SESkeleton width="60%" height="30px" />
      `
    }
  }
}
