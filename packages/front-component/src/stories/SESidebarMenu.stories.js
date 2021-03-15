import '@/styles/index.scss'
import SESidebarMenu from '@/components/SESidebarMenu/index.vue'
import logo from '@/assets/logo-stickearn.png'

export default {
  title: 'Components/Sidebar Menu',
  component: SESidebarMenu
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESidebarMenu },
  template: `<SESidebarMenu
    :isVueRouter='false'
    :menus="[
      { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
      { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
      { label: 'Label 1', path: '', type: 'label', icon: '' },
      { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
      { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
      { label: 'Label 2', path: '', type: 'label', icon: '' },
      {
        label: 'menu 5',
        path: '',
        type: 'submenu',
        icon: 'icon-stopwatch',
        active: true,
        subMenus: [
          { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
          { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
          { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
          { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
        ]
      }
    ]"
  >
    <img  src="${logo}" alt="logo" />
  </SESidebarMenu>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="/path/image" alt="logo" />
</SESidebarMenu>`
    }
  }
}

export const ExpandMenu = () => ({
  components: { SESidebarMenu },
  template: `<SESidebarMenu
  :isVueRouter='false'
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
  :isExpand="true"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
  `
})

ExpandMenu.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
  :isExpand="true"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}

export const Turquoise = () => ({
  components: { SESidebarMenu },
  template: `<SESidebarMenu
  :isVueRouter='false'
  theme="turquoise"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
  `
})

Turquoise.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  theme="turquoise"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}

export const Yellow = () => ({
  components: { SESidebarMenu },
  template: `<SESidebarMenu
  :isVueRouter='false'
  theme="yellow"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
  `
})

Yellow.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  theme="yellow"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}

export const Accent = () => ({
  components: { SESidebarMenu },
  template: `<SESidebarMenu
  :isVueRouter='false'
  theme="accent"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
  `
})

Accent.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  theme="accent"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    {
      label: 'menu 5',
      path: '',
      type: 'submenu',
      icon: 'icon-stopwatch',
      active: true,
      subMenus: [
        { label: 'sub menu 1', path: '/sub-menu1', type: 'url', active: true },
        { label: 'sub menu 2', path: '/sub-menu2', type: 'url', active: true },
        { label: 'sub menu 3', path: '/sub-menu3', type: 'url', active: true },
        { label: 'sub menu 4', path: '/sub-menu4', type: 'url', active: true }
      ]
    }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}
