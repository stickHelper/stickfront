import SEButton from '@/components/SEButton/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Button',
  component: SEButton,
  argTypes: {
    color: { control: { type: 'select', options: ['accent', 'primary', 'secondary', 'normal', 'dark'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    label: { description: '' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEButton },
  template: '<SEButton @onClick="onClick" v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}
Default.parameters = {
  docs: {
    source: {
      code: '<SEButton label="default" />'
    }
  }
}

export const Color = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton label="Primary" color="primary" />
    <SEButton label="Secondary" color="secondary" />
    <SEButton label="Default" />
    <SEButton label="Normal" color="normal" />
    <SEButton label="Dark" color="dark" />
  </div>
  `
})

Color.parameters = {
  docs: {
    source: {
      code: ` <SEButton label="Primary" color="primary" />
<SEButton label="Secondary" color="secondary" />
<SEButton label="Default" />
<SEButton label="Normal" color="normal" />
<SEButton label="Dark" color="dark" />
      `
    }
  }
}

export const Size = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton label="Small" size="small" />
    <SEButton label="Medium" />
    <SEButton label="Large" size="large" />
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<SEButton label="Small" size="small" />
<SEButton label="Medium" />
<SEButton label="Large" size="large" />
      `
    }
  }
}
