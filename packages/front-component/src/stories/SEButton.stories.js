import SEButton from '@/components/SEButton/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Button',
  component: SEButton,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'normal', 'dark', 'line', 'error', 'salmon', 'turquoise', 'blue', 'light-blue'] } },
    size: { control: { type: 'select', options: ['exrta-small', 'small', 'medium', 'large'] } },
    type: { control: { type: 'select', options: ['icon', 'outline', 'text'] } },
    label: { description: '' }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEButton },
  template: '<SEButton v-bind="$props">Default</SEButton>'
})

export const Default = Template.bind({})
Default.args = {
  label: 'Default'
}
Default.parameters = {
  docs: {
    source: {
      code: '<SEButton>Default</SEButton>'
    }
  }
}

export const Color = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton color="primary">Primary</SEButton>
    <SEButton color="secondary">Secondary</SEButton>
    <SEButton color="normal">Normal</SEButton>
    <SEButton color="dark">Dark</SEButton>
    <SEButton color="line">Line</SEButton>
    <SEButton color="error">Error</SEButton>
    <SEButton color="salmon">Salmon</SEButton>
    <SEButton color="blue">Blue</SEButton>
    <SEButton color="light-blue">Light Blue</SEButton>
  </div>
  `
})

Color.parameters = {
  docs: {
    source: {
      code: `<SEButton color="primary">Primary</SEButton>
<SEButton color="secondary">Secondary</SEButton>
<SEButton color="normal">Normal</SEButton>
<SEButton color="dark">Dark</SEButton>
<SEButton color="line">Line</SEButton>
<SEButton color="error">Error</SEButton>
<SEButton color="salmon">Salmon</SEButton>
<SEButton color="blue">Blue</SEButton>
<SEButton color="light-blue">Light Blue</SEButton>
      `
    }
  }
}

export const Size = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton size="extra-small">Extra Small</SEButton>
    <SEButton size="small">Small</SEButton>
    <SEButton>Medium</SEButton>
    <SEButton size="large">Large</SEButton>
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<SEButton size="small">Small</SEButton>
<SEButton>Medium</SEButton>
<SEButton size="large">Large</SEButton>
      `
    }
  }
}

export const Type = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton type="icon">00</SEButton>
    <SEButton type="icon"><i class="icon icon-chevron-left"></i></SEButton>
    <SEButton type="outline" color="primary">Outline</SEButton>
    <SEButton type="text" color="secondary">Button Text</SEButton>
  </div>
  `
})

Type.parameters = {
  docs: {
    source: {
      code: `<SEButton type="icon">00</SEButton>
<SEButton type="icon"><i class="icon icon-chevron-left"></i></SEButton>
<SEButton type="outline" color="primary">Primary</SEButton>
<SEButton type="text" color="secondary">Secondary</SEButton>`
    }
  }
}

export const fullWidth = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton :full-width="true">Full Width</SEButton>
  </div>
  `
})

fullWidth.parameters = {
  docs: {
    source: {
      code: '<SEButton :full-width="true">Full Width</SEButton>'
    }
  }
}

export const Dimmed = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton color="primary" :isDimmed="true">Primary</SEButton>
    <SEButton color="secondary" :isDimmed="true">Secondary</SEButton>
    <SEButton color="normal" :isDimmed="true">Normal</SEButton>
    <SEButton color="dark" :isDimmed="true">Dark</SEButton>
    <SEButton color="line" :isDimmed="true">Line</SEButton>
    <SEButton color="error" :isDimmed="true">Error</SEButton>
    <SEButton color="salmon" :isDimmed="true">Salmon</SEButton>
    <SEButton color="blue" :isDimmed="true">Blue</SEButton>
    <SEButton color="light-blue" :isDimmed="true">Light Blue</SEButton>
  </div>
  `
})

Dimmed.parameters = {
  docs: {
    source: {
      code: `<SEButton color="primary">Primary</SEButton>
<SEButton color="secondary">Secondary</SEButton>
<SEButton color="normal">Normal</SEButton>
<SEButton color="dark">Dark</SEButton>
<SEButton color="line">Line</SEButton>
<SEButton color="error">Error</SEButton>
<SEButton color="salmon">Salmon</SEButton>
<SEButton color="blue">Blue</SEButton>
<SEButton color="light-blue">Light Blue</SEButton>
      `
    }
  }
}

export const Disabled = () => ({
  components: { SEButton },
  template: `<div>
    <SEButton :disabled="true">Disabled</SEButton>
  </div>
  `
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SEButton :disabled="true">Disabled</SEButton>'
    }
  }
}
