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
      { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
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
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
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
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
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
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
  ]"
  :isExpand="true"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}

export const Mint = () => ({
  components: { SESidebarMenu },
  template: `<SESidebarMenu
  :isVueRouter='false'
  theme="mint"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
  `
})

Mint.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  theme="mint"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}

export const Orange = () => ({
  components: { SESidebarMenu },
  template: `<SESidebarMenu
  :isVueRouter='false'
  theme="orange"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
  `
})

Orange.parameters = {
  docs: {
    source: {
      code: `<SESidebarMenu
  :isVueRouter='false'
  theme="orange"
  :menus="[
    { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
    { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
    { label: 'Label 1', path: '', type: 'label', icon: '' },
    { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
    { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
    { label: 'Label 2', path: '', type: 'label', icon: '' },
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
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
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
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
    { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
  ]"
>
  <img  src="${logo}" alt="logo" />
</SESidebarMenu>
      `
    }
  }
}
