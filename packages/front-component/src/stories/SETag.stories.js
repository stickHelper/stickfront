import '@/styles/index.scss'
import SETag from '@/components/SETag/index.vue'
import { Space } from 'ant-design-vue'

export default {
  title: 'Components/Tags',
  component: SETag,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'accent', 'normal', 'dark', 'turquoise', 'red', 'green', 'light-blue', 'blue'] } },
    shape: { control: { type: 'select', options: ['square', 'rounded'] } },
    size: { control: { type: 'select', options: ['default', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETag, Space },
  template: `<div>
    <div>
      <Space>
        <SETag>Basic</SETag>
        <SETag size="large">Basic</SETag>
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SETag shape="rounded">Basic</SETag>
        <SETag shape="rounded" size="large">Basic</SETag>
      </Space>
    </div>
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SETag>Basic</SETag>
  <SETag size="large">Basic</SETag>
</div>

<div>
  <SETag shape="rounded">Basic</SETag>
  <SETag shape="rounded" size="large">Basic</SETag>
</div>
      `
    }
  }
}

export const Color = () => ({
  components: { SETag, Space },
  template: `<div>
    <div>
      <Space>
        <SETag color="primary">Primary</SETag>
        <SETag color="secondary">Secondary</SETag>
        <SETag color="accent">Accent</SETag>
        <SETag color="line">Line</SETag>
        <SETag color="normal">Normal</SETag>
        <SETag color="dark">Dark</SETag>
        <SETag color="turquoise">Turquoise</SETag>
        <SETag color="red">Red</SETag>
        <SETag color="error">Error</SETag>
        <SETag color="salmon">Salmon</SETag>
        <SETag color="green">Green</SETag>
        <SETag color="light-blue">Light Blue</SETag>
        <SETag color="blue">Blue</SETag>
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SETag color="primary" :full-color="true">Primary</SETag>
        <SETag color="secondary" :full-color="true">Secondary</SETag>
        <SETag color="accent" :full-color="true">Accent</SETag>
        <SETag color="line" :full-color="true">Line</SETag>
        <SETag color="normal" :full-color="true">Normal</SETag>
        <SETag color="dark" :full-color="true">Dark</SETag>
        <SETag color="turquoise" :full-color="true">Turquoise</SETag>
        <SETag color="red" :full-color="true">Red</SETag>
        <SETag color="error" :full-color="true">Error</SETag>
        <SETag color="salmon" :full-color="true">Salmon</SETag>
        <SETag color="green" :full-color="true">Green</SETag>
        <SETag color="light-blue" :full-color="true">Light Blue</SETag>
        <SETag color="blue" :full-color="true">Blue</SETag>
      </Space>
    </div>
  </div>
  `
})
Color.parameters = {
  docs: {
    source: {
      code: `<div>
  <SETag color="primary">Primary</SETag>
  <SETag color="secondary">Secondary</SETag>
  <SETag color="accent">Accent</SETag>
  <SETag color="line">Line</SETag>
  <SETag color="normal">Normal</SETag>
  <SETag color="dark">Dark</SETag>
  <SETag color="turquoise">Turquoise</SETag>
  <SETag color="red">Red</SETag>
  <SETag color="error">Error</SETag>
  <SETag color="salmon">Salmon</SETag>
  <SETag color="green">Green</SETag>
  <SETag color="light-blue">Light Blue</SETag>
  <SETag color="blue">Blue</SETag>
</div>

<div>
  <SETag color="primary" :full-color="true">Primary</SETag>
  <SETag color="secondary" :full-color="true">Secondary</SETag>
  <SETag color="accent" :full-color="true">Accent</SETag>
  <SETag color="line" :full-color="true">Line</SETag>
  <SETag color="normal" :full-color="true">Normal</SETag>
  <SETag color="dark" :full-color="true">Dark</SETag>
  <SETag color="turquoise" :full-color="true">Turquoise</SETag>
  <SETag color="red" :full-color="true">Red</SETag>
  <SETag color="error" :full-color="true">Error</SETag>
  <SETag color="salmon" :full-color="true">Salmon</SETag>
  <SETag color="green" :full-color="true">Green</SETag>
  <SETag color="light-blue" :full-color="true">Light Blue</SETag>
  <SETag color="blue" :full-color="true">Blue</SETag>
</div>
`
    }
  }
}

export const Closable = () => ({
  components: { SETag, Space },
  template: `<div>
    <div>
      <Space>
        <SETag closable color="primary">Primary</SETag>
        <SETag closable color="secondary">Secondary</SETag>
        <SETag closable color="accent">Accent</SETag>
        <SETag closable color="line">Line</SETag>
        <SETag closable color="normal">Normal</SETag>
        <SETag closable color="dark">Dark</SETag>
        <SETag closable color="turquoise">Turquoise</SETag>
        <SETag closable color="red">Red</SETag>
        <SETag closable color="error">Error</SETag>
        <SETag closable color="salmon">Salmon</SETag>
        <SETag closable color="green">Green</SETag>
        <SETag closable color="light-blue">Light Blue</SETag>
        <SETag closable color="blue">Blue</SETag>
      </Space>
    </div>
    <br />
    <div>
      <Space>
        <SETag closable color="primary" :full-color="true">Primary</SETag>
        <SETag closable color="secondary" :full-color="true">Secondary</SETag>
        <SETag closable color="accent" :full-color="true">Accent</SETag>
        <SETag closable color="line" :full-color="true">Line</SETag>
        <SETag closable color="normal" :full-color="true">Normal</SETag>
        <SETag closable color="dark" :full-color="true">Dark</SETag>
        <SETag closable color="turquoise" :full-color="true">Turquoise</SETag>
        <SETag closable color="red" :full-color="true">Red</SETag>
        <SETag closable color="error" :full-color="true">Error</SETag>
        <SETag closable color="salmon" :full-color="true">Salmon</SETag>
        <SETag closable color="green" :full-color="true">Green</SETag>
        <SETag closable color="light-blue" :full-color="true">Light Blue</SETag>
        <SETag closable color="blue" :full-color="true">Blue</SETag>
      </Space>
    </div>
  </div>
  `
})
// export const FullColor = () => ({
//   components: { SEBadge },
//   template: `<div>
//     <SEBadge :full-color="true" color="primary">Primary</SEBadge>
//     <SEBadge :full-color="true" color="secondary">Secondary</SEBadge>
//     <SEBadge :full-color="true" color="accent">Accent</SEBadge>
//     <SEBadge :full-color="true" color="normal">Normal</SEBadge>
//     <SEBadge :full-color="true" color="dark">Dark</SEBadge>
//     <SEBadge :full-color="true" color="turquoise">Turquoise</SEBadge>
//     <SEBadge :full-color="true" color="red">Red</SEBadge>
//     <SEBadge :full-color="true" color="error">Error</SEBadge>
//     <SEBadge :full-color="true" color="salmon">Salmon</SEBadge>
//     <SEBadge :full-color="true" color="green">Green</SEBadge>
//     <SEBadge :full-color="true" color="light-blue">Light Blue</SEBadge>
//     <SEBadge :full-color="true" color="blue">Blue</SEBadge>
//   </div>
//   `
// })
// FullColor.parameters = {
//   docs: {
//     source: {
//       code: `<SEBadge :full-color="true" color="primary">Primary</SEBadge>
// <SEBadge :full-color="true" color="secondary">Secondary</SEBadge>
// <SEBadge :full-color="true" color="accent">Accent</SEBadge>
// <SEBadge :full-color="true" color="normal">Normal</SEBadge>
// <SEBadge :full-color="true" color="dark">Dark</SEBadge>
// <SEBadge :full-color="true" color="turquoise">Turquoise</SEBadge>
// <SEBadge :full-color="true" color="red">Red</SEBadge>
// <SEBadge :full-color="true" color="error">Error</SEBadge>
// <SEBadge :full-color="true" color="salmon">Salmon</SEBadge>
// <SEBadge :full-color="true" color="green">Green</SEBadge>
// <SEBadge :full-color="true" color="light-blue">Light Blue</SEBadge>
// <SEBadge :full-color="true" color="blue">Blue</SEBadge>
//       `
//     }
//   }
// }

// export const Rounded = () => ({
//   components: { SEBadge },
//   template: `<div>
//     <SEBadge type="rounded" :full-color="true" color="primary">Primary</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="secondary">Secondary</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="accent">Accent</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="normal">Normal</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="dark">Dark</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="turquoise">Turquoise</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="red">Red</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="error">Error</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="salmon">Salmon</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="green">Green</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="light-blue">Light Blue</SEBadge>
//     <SEBadge type="rounded" :full-color="true" color="blue">Blue</SEBadge>
//   </div>
//   `
// })
// Rounded.parameters = {
//   docs: {
//     source: {
//       code: `<SEBadge type="rounded" :full-color="true" color="primary">Primary</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="secondary">Secondary</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="accent">Accent</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="normal">Normal</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="dark">Dark</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="turquoise">Turquoise</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="red">Red</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="error">Error</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="salmon">Salmon</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="green">Green</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="light-blue">Light Blue</SEBadge>
// <SEBadge type="rounded" :full-color="true" color="blue">Blue</SEBadge>
//       `
//     }
//   }
// }

// export const Bald = () => ({
//   components: { SEBadge },
//   template: `<div>
//     <SEBadge type="bald" color="primary">Primary</SEBadge>
//     <SEBadge type="bald" color="secondary">Secondary</SEBadge>
//     <SEBadge type="bald" color="accent">Accent</SEBadge>
//     <SEBadge type="bald" color="normal">Normal</SEBadge>
//     <SEBadge type="bald" color="dark">Dark</SEBadge>
//     <SEBadge type="bald" color="turquoise">Turquoise</SEBadge>
//     <SEBadge type="bald" color="red">Red</SEBadge>
//     <SEBadge type="bald" color="error">Error</SEBadge>
//     <SEBadge type="bald" color="salmon">Salmon</SEBadge>
//     <SEBadge type="bald" color="green">Green</SEBadge>
//     <SEBadge type="bald" color="light-blue">Light Blue</SEBadge>
//     <SEBadge type="bald" color="blue">Blue</SEBadge>
//   </div>
//   `
// })
// Bald.parameters = {
//   docs: {
//     source: {
//       code: `<SEBadge type="bald" color="primary">Primary</SEBadge>
// <SEBadge type="bald" color="secondary">Secondary</SEBadge>
// <SEBadge type="bald" color="accent">Accent</SEBadge>
// <SEBadge type="bald" color="normal">Normal</SEBadge>
// <SEBadge type="bald" color="dark">Dark</SEBadge>
// <SEBadge type="bald" color="turquoise">Turquoise</SEBadge>
// <SEBadge type="bald" color="red">Red</SEBadge>
// <SEBadge type="bald" color="error">Error</SEBadge>
// <SEBadge type="bald" color="salmon">Salmon</SEBadge>
// <SEBadge type="bald" color="green">Green</SEBadge>
// <SEBadge type="bald" color="light-blue">Light Blue</SEBadge>
// <SEBadge type="bald" color="blue">Blue</SEBadge>
//       `
//     }
//   }
// }

// export const Outline = () => ({
//   components: { SEBadge },
//   template: `<div>
//     <SEBadge type="outline">Default</SEBadge>
//     <SEBadge type="outline" color="primary">Primary</SEBadge>
//     <SEBadge type="outline" color="secondary">Secondary</SEBadge>
//     <SEBadge type="outline" color="accent">Accent</SEBadge>
//     <SEBadge type="outline" color="normal">Normal</SEBadge>
//     <SEBadge type="outline" color="dark">Dark</SEBadge>
//     <SEBadge type="outline" color="turquoise">Turquoise</SEBadge>
//     <SEBadge type="outline" color="red">Red</SEBadge>
//     <SEBadge type="outline" color="error">Error</SEBadge>
//     <SEBadge type="outline" color="salmon">Salmon</SEBadge>
//     <SEBadge type="outline" color="green">Green</SEBadge>
//     <SEBadge type="outline" color="light-blue">Light Blue</SEBadge>
//     <SEBadge type="outline" color="blue">Blue</SEBadge>
//   </div>
//   `
// })
// Outline.parameters = {
//   docs: {
//     source: {
//       code: `<SEBadge type="outline" color="primary">Primary</SEBadge>
// <SEBadge type="outline" color="secondary">Secondary</SEBadge>
// <SEBadge type="outline" color="accent">Accent</SEBadge>
// <SEBadge type="outline" color="normal">Normal</SEBadge>
// <SEBadge type="outline" color="dark">Dark</SEBadge>
// <SEBadge type="outline" color="turquoise">Turquoise</SEBadge>
// <SEBadge type="outline" color="red">Red</SEBadge>
// <SEBadge type="outline" color="error">Error</SEBadge>
// <SEBadge type="outline" color="salmon">Salmon</SEBadge>
// <SEBadge type="outline" color="green">Green</SEBadge>
// <SEBadge type="outline" color="light-blue">Light Blue</SEBadge>
// <SEBadge type="outline" color="blue">Blue</SEBadge>
//       `
//     }
//   }
// }

// export const Tick = () => ({
//   components: { SEBadge },
//   template: `<div>
//     <SEBadge :is-tick="true" type="bald" color="primary">Primary</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="secondary">Secondary</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="accent">Accent</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="normal">Normal</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="dark">Dark</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="turquoise">Turquoise</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="red">Red</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="error">Error</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="salmon">Salmon</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="green">Green</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="light-blue">Light Blue</SEBadge>
//     <SEBadge :is-tick="true" type="bald" color="blue">Blue</SEBadge>
//   </div>
//   `
// })
// Tick.parameters = {
//   docs: {
//     source: {
//       code: `<SEBadge :is-tick="true" type="bald" color="primary">Primary</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="secondary">Secondary</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="accent">Accent</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="normal">Normal</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="dark">Dark</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="turquoise">Turquoise</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="red">Red</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="error">Error</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="salmon">Salmon</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="green">Green</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="light-blue">Light Blue</SEBadge>
// <SEBadge :is-tick="true" type="bald" color="blue">Blue</SEBadge>
//       `
//     }
//   }
// }

// export const Icon = () => ({
//   components: { SEBadge },
//   template: `<div>
//     <SEBadge color="primary">
//       Primary
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="secondary">
//       Secondary
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="accent">
//       Accent
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="normal">
//       Normal
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="dark">
//       Dark
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="turquoise">
//       Turquoise
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="red">
//       Red
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="error">
//       Error
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="salmon">
//       Salmon
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="green">
//       Green
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="light-blue">
//       Light Blue
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//     <SEBadge color="blue">
//       Blue
//       <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
//     </SEBadge>
//   </div>
//   `
// })
// Icon.parameters = {
//   docs: {
//     source: {
//       code: `<SEBadge color="primary">
//   Primary
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="secondary">
//   Secondary
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="accent">
//   Accent
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="normal">
//   Normal
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="dark">
//   Dark
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="turquoise">
//   Turquoise
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="red">
//   Red
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="error">
//   Error
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="salmon">
//   Salmon
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="green">
//   Green
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="light-blue">
//   Light Blue
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
// <SEBadge color="blue">
//   Blue
//   <span class="text-xs ml-md-2"><i class="icon icon-close" /></span>
// </SEBadge>
//       `
//     }
//   }
// }
