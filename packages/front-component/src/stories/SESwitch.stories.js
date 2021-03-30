import SESwitch from '@/components/SESwitch/index.vue'
import SESpace from '@/components/SESpace/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Data Entry/Switch',
  component: SESwitch
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESwitch, SESpace },
  template: `<SESpace size="middle">
  <SESwitch
    id="value1"
  />
  <SESwitch
    id="value2"
    default-checked
    disabled
  />
  <SESwitch
    id="value2"
    default-checked
    loading
  />
  </SESpace>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SESwitch
  id="value1"
/>

<SESwitch
  id="value2"
  default-checked
  disabled
/>

<SESwitch
  id="value2"
  default-checked
  loading
/>`
    }
  }
}

export const Size = () => ({
  components: { SESwitch, SESpace },
  template: `<SESpace size="middle">
    <SESwitch
      id="valueSmall1"
      size="small"
    />
    <SESwitch
      id="valueSmall2"
    />
  </SESpace>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<SESwitch
  id="valueSmall1"
  size="small"
/>

<SESwitch
  id="valueSmall2"
/>
      `
    }
  }
}

export const Colors = () => ({
  components: { SESwitch, SESpace },
  template: `<SESpace size="middle">
    <SESwitch
      id="valueSmall1"
      default-checked
    />
    <SESwitch
      id="valueSmall2"
      color="purple"
      default-checked
    />
    <SESwitch
      id="valueSmall2"
      color="yellow"
      default-checked
    />
  </SESpace>
  `
})
Colors.parameters = {
  docs: {
    source: {
      code: `<SESwitch
  id="valueSmall1"
  default-checked
/>

<SESwitch
  id="valueSmall2"
  color="purple"
  default-checked
/>

<SESwitch
  id="valueSmall2"
  color="yellow"
  default-checked
/>`
    }
  }
}
