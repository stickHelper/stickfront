import '@/styles/index.scss'
import SEBadge from '@/components/SEBadge/index.vue'

export default {
  title: 'Components/Badge',
  component: SEBadge,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'normal', 'dark', 'mint', 'red', 'green', 'light-blue', 'blue'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEBadge },
  template: '<SEBadge>Default</SEBadge>'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEBadge><--content-here--></SEBadge>'
    }
  }
}

export const Color = () => ({
  components: { SEBadge },
  template: `<div>
    <SEBadge color="primary">Primary</SEBadge>
    <SEBadge color="secondary">Secondary</SEBadge>
    <SEBadge color="accent">Accent</SEBadge>
    <SEBadge color="normal">Normal</SEBadge>
    <SEBadge color="dark">Dark</SEBadge>
    <SEBadge color="mint">Mint</SEBadge>
    <SEBadge color="red">Red</SEBadge>
    <SEBadge color="error">Error</SEBadge>
    <SEBadge color="salmon">Salmon</SEBadge>
    <SEBadge color="green">Green</SEBadge>
    <SEBadge color="light-blue">Light Blue</SEBadge>
    <SEBadge color="blue">Blue</SEBadge>
  </div>
  `
})
Color.parameters = {
  docs: {
    source: {
      code: `<SEBadge color="primary">Primary</SEBadge>
<SEBadge color="secondary">Secondary</SEBadge>
<SEBadge color="accent">Accent</SEBadge>
<SEBadge color="normal">Normal</SEBadge>
<SEBadge color="dark">Dark</SEBadge>
<SEBadge color="mint">Mint</SEBadge>
<SEBadge color="red">Red</SEBadge>
<SEBadge color="error">Error</SEBadge>
<SEBadge color="salmon">Salmon</SEBadge>
<SEBadge color="green">Green</SEBadge>
<SEBadge color="light-blue">Light Blue</SEBadge>
<SEBadge color="blue">Blue</SEBadge>
      `
    }
  }
}

export const Bald = () => ({
  components: { SEBadge },
  template: `<div>
    <SEBadge type="bald" color="primary">Primary</SEBadge>
    <SEBadge type="bald" color="secondary">Secondary</SEBadge>
    <SEBadge type="bald" color="accent">Accent</SEBadge>
    <SEBadge type="bald" color="normal">Normal</SEBadge>
    <SEBadge type="bald" color="dark">Dark</SEBadge>
    <SEBadge type="bald" color="mint">Mint</SEBadge>
    <SEBadge type="bald" color="red">Red</SEBadge>
    <SEBadge type="bald" color="error">Error</SEBadge>
    <SEBadge type="bald" color="salmon">Salmon</SEBadge>
    <SEBadge type="bald" color="green">Green</SEBadge>
    <SEBadge type="bald" color="light-blue">Light Blue</SEBadge>
    <SEBadge type="bald" color="blue">Blue</SEBadge>
  </div>
  `
})
Bald.parameters = {
  docs: {
    source: {
      code: `<SEBadge type="bald" color="primary">Primary</SEBadge>
<SEBadge type="bald" color="secondary">Secondary</SEBadge>
<SEBadge type="bald" color="accent">Accent</SEBadge>
<SEBadge type="bald" color="normal">Normal</SEBadge>
<SEBadge type="bald" color="dark">Dark</SEBadge>
<SEBadge type="bald" color="mint">Mint</SEBadge>
<SEBadge type="bald" color="red">Red</SEBadge>
<SEBadge type="bald" color="error">Error</SEBadge>
<SEBadge type="bald" color="salmon">Salmon</SEBadge>
<SEBadge type="bald" color="green">Green</SEBadge>
<SEBadge type="bald" color="light-blue">Light Blue</SEBadge>
<SEBadge type="bald" color="blue">Blue</SEBadge>
      `
    }
  }
}

export const Outline = () => ({
  components: { SEBadge },
  template: `<div>
    <SEBadge type="outline" color="primary">Primary</SEBadge>
    <SEBadge type="outline" color="secondary">Secondary</SEBadge>
    <SEBadge type="outline" color="accent">Accent</SEBadge>
    <SEBadge type="outline" color="normal">Normal</SEBadge>
    <SEBadge type="outline" color="dark">Dark</SEBadge>
    <SEBadge type="outline" color="mint">Mint</SEBadge>
    <SEBadge type="outline" color="red">Red</SEBadge>
    <SEBadge type="outline" color="error">Error</SEBadge>
    <SEBadge type="outline" color="salmon">Salmon</SEBadge>
    <SEBadge type="outline" color="green">Green</SEBadge>
    <SEBadge type="outline" color="light-blue">Light Blue</SEBadge>
    <SEBadge type="outline" color="blue">Blue</SEBadge>
  </div>
  `
})
Outline.parameters = {
  docs: {
    source: {
      code: `<SEBadge type="outline" color="primary">Primary</SEBadge>
<SEBadge type="outline" color="secondary">Secondary</SEBadge>
<SEBadge type="outline" color="accent">Accent</SEBadge>
<SEBadge type="outline" color="normal">Normal</SEBadge>
<SEBadge type="outline" color="dark">Dark</SEBadge>
<SEBadge type="outline" color="mint">Mint</SEBadge>
<SEBadge type="outline" color="red">Red</SEBadge>
<SEBadge type="outline" color="error">Error</SEBadge>
<SEBadge type="outline" color="salmon">Salmon</SEBadge>
<SEBadge type="outline" color="green">Green</SEBadge>
<SEBadge type="outline" color="light-blue">Light Blue</SEBadge>
<SEBadge type="outline" color="blue">Blue</SEBadge>
      `
    }
  }
}

export const Tick = () => ({
  components: { SEBadge },
  template: `<div>
    <SEBadge :is-tick="true" type="bald" color="primary">Primary</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="secondary">Secondary</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="accent">Accent</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="normal">Normal</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="dark">Dark</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="mint">Mint</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="red">Red</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="error">Error</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="salmon">Salmon</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="green">Green</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="light-blue">Light Blue</SEBadge>
    <SEBadge :is-tick="true" type="bald" color="blue">Blue</SEBadge>
  </div>
  `
})
Tick.parameters = {
  docs: {
    source: {
      code: `<SEBadge :is-tick="true" type="bald" color="primary">Primary</SEBadge>
<SEBadge :is-tick="true" type="bald" color="secondary">Secondary</SEBadge>
<SEBadge :is-tick="true" type="bald" color="accent">Accent</SEBadge>
<SEBadge :is-tick="true" type="bald" color="normal">Normal</SEBadge>
<SEBadge :is-tick="true" type="bald" color="dark">Dark</SEBadge>
<SEBadge :is-tick="true" type="bald" color="mint">Mint</SEBadge>
<SEBadge :is-tick="true" type="bald" color="red">Red</SEBadge>
<SEBadge :is-tick="true" type="bald" color="error">Error</SEBadge>
<SEBadge :is-tick="true" type="bald" color="salmon">Salmon</SEBadge>
<SEBadge :is-tick="true" type="bald" color="green">Green</SEBadge>
<SEBadge :is-tick="true" type="bald" color="light-blue">Light Blue</SEBadge>
<SEBadge :is-tick="true" type="bald" color="blue">Blue</SEBadge>
      `
    }
  }
}

export const Icon = () => ({
  components: { SEBadge },
  template: `<div>
    <SEBadge color="primary">
      Primary
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="secondary">
      Secondary
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="accent">
      Accent
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="normal">
      Normal
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="dark">
      Dark
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="mint">
      Mint
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="red">
      Red
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="error">
      Error
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="salmon">
      Salmon
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="green">
      Green
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="light-blue">
      Light Blue
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
    <SEBadge color="blue">
      Blue
      <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
    </SEBadge>
  </div>
  `
})
Icon.parameters = {
  docs: {
    source: {
      code: `<SEBadge color="primary">
  Primary
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="secondary">
  Secondary
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="accent">
  Accent
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="normal">
  Normal
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="dark">
  Dark
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="mint">
  Mint
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="red">
  Red
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="error">
  Error
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="salmon">
  Salmon
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="green">
  Green
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="light-blue">
  Light Blue
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
<SEBadge color="blue">
  Blue
  <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
</SEBadge>
      `
    }
  }
}
