import '@/styles/index.scss'
import SETabMenu from '@/components/SETabMenu/index.vue'

export default {
  title: 'Components/Tab Menu',
  component: SETabMenu
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETabMenu },
  template: `<SETabMenu
      :menus="[
        { label: 'Menu 1' },
        { label: 'Menu 2' },
        { label: 'Menu 3' }
      ]"
    />
  `
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SETabMenu
  :menus="[
    { label: 'Menu 1' },
    { label: 'Menu 2' },
    { label: 'Menu 3' }
  ]"
/>
`
    }
  }
}

export const Small = () => ({
  components: { SETabMenu },
  template: `<SETabMenu
    :menus="[
      { label: 'Menu 1' },
      { label: 'Menu 2' },
      { label: 'Menu 3' }
    ]"
    size="small"
  />
  `
})
Small.parameters = {
  docs: {
    source: {
      code: `<SETabMenu
  :menus="[
    {label: Menu 1},
    {label: Menu 2},
    {label: Menu 3}
  ]"
  size="small"
/>
`
    }
  }
}

export const MaxSlot = () => ({
  components: { SETabMenu },
  template: `<SETabMenu
    :menus="[
      { label: 'Menu 1' },
      { label: 'Menu 2' },
      { label: 'Menu 3' }
    ]"
    :maxSlot="2"
  />
  `
})
MaxSlot.parameters = {
  docs: {
    source: {
      code: `<SETabMenu
  :menus="[
    {label: Menu 1},
    {label: Menu 2},
    {label: Menu 3}
  ]"
  :maxSlot="2"
/>
`
    }
  }
}
