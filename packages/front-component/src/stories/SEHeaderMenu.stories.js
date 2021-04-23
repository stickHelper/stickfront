import '@/styles/index.scss'
import SEHeaderMenu from '@/components/SEHeaderMenu/index.vue'
import logo from '@/assets/images/icon-brand-2.svg'

export default {
  title: 'Components/Header Menu',
  component: SEHeaderMenu
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEHeaderMenu },
  template: `<SEHeaderMenu
    :menus="[
      { label: 'Dashboard', path: '/dashboard', type: 'url', icon: 'icon-dashboard' },
      {
        label: 'Inventory',
        path: '',
        type: 'submenu',
        icon: 'icon-desktop',
        active: true,
        subMenus: [
          { label: 'Display', path: '/sub-menu1', type: 'url', active: true },
          { label: 'Rate (Price)', path: '/sub-menu2', type: 'url', active: true },
          { label: 'Hour', path: '/sub-menu3', type: 'url', active: true },
          { label: 'Location', path: '/sub-menu4', type: 'url', active: true },
          { label: 'Audience', path: '/sub-menu4', type: 'url', active: true },
          { label: 'Restriction', path: '/sub-menu4', type: 'url', active: true }
        ]
      },
      { label: 'Campaign', path: '/campaign', type: 'url', icon: 'icon-megaphone' }
    ]"
    :notification="{
      label: 'Notification',
      path: '',
      icon: 'icon-notification',
      active: true,
      subMenus: [
        { label: 'My Account', path: '/account', type: 'url', active: true },
        { label: 'Setting', path: '/setting', type: 'url', active: true }
      ]
    }"
    :profile="{
      label: 'Profile',
      path: '',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      active: true,
      logout: true,
      subMenus: [
        { label: 'My Account', path: '/account', type: 'url', active: true },
        { label: 'Setting', path: '/setting', type: 'url', active: true }
      ]
    }"
  >
    <img  src="${logo}" alt="logo" />
  </SEHeaderMenu>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SEHeaderMenu
        :menus="[
          { label: 'Dashboard', path: '/dashboard', type: 'url', icon: 'icon-dashboard' },
          {
            label: 'Inventory',
            path: '',
            type: 'submenu',
            icon: 'icon-desktop',
            active: true,
            subMenus: [
              { label: 'Display', path: '/sub-menu1', type: 'url', active: true },
              { label: 'Rate (Price)', path: '/sub-menu2', type: 'url', active: true },
              { label: 'Hour', path: '/sub-menu3', type: 'url', active: true },
              { label: 'Location', path: '/sub-menu4', type: 'url', active: true },
              { label: 'Audience', path: '/sub-menu4', type: 'url', active: true },
              { label: 'Restriction', path: '/sub-menu4', type: 'url', active: true }
            ]
          },
          { label: 'Campaign', path: '/campaign', type: 'url', icon: 'icon-megaphone' }
        ]"
        :notification="{
          label: 'Notification',
          path: '',
          icon: 'icon-notification',
          active: true, //show hide notification menu
          subMenus: [
            { label: 'My Account', path: '/account', type: 'url', active: true },
            { label: 'Setting', path: '/setting', type: 'url', active: true }
          ]
        }"
        :profile="{
          label: 'Profile',
          path: '',
          avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
          active: true, //show hide profile menu
          logout: true, //show hide logout button
          subMenus: [
            { label: 'My Account', path: '/account', type: 'url', active: true },
            { label: 'Setting', path: '/setting', type: 'url', active: true }
          ]
        }"
      >
        <img  src="/path/image" alt="logo" />
      </SEHeaderMenu>`
    }
  }
}
