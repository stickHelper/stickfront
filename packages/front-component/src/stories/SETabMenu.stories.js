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

export const CustomIcon = () => ({
  components: { SETabMenu },
  template: `<SETabMenu
    :menus="[
      {
        label: 'All',
        icon: 'layers-alt',
        count: 5
      },
      {
        label: 'Published',
        icon: 'check-circle',
        count: 9
      },
      {
        label: 'Draft',
        icon: 'file-alt',
        count: 10
      }
    ]"
    custom="custom-icon"
    :default-index="2"
  />
  `
})
CustomIcon.parameters = {
  docs: {
    source: {
      code: `<SETabMenu
  :menus="[
    {
      label: 'All',
      icon: 'layers-alt',
      count: 10
    },
    {
      label: 'Published',
      icon: 'check-circle',
      count: 10
    },
    {
      label: 'Draft',
      icon: 'file-alt',
      count: 10
    }
  ]"
  custom="custom-icon"
  :default-index="2"
/>
`
    }
  }
}
