import SETopBard from '@/components/SETopBar/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Top Bar',
  component: SETopBard
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETopBard },
  template: `<SETopBard
    :breadcrumbs="[
      {
        label: 'Base Route',
        isActive: false,
        path: '/base'
      },
      {
        label: 'Details Route',
        isActive: true,
        path: ''
      }
    ]"
  >
    <template v-slot:avatar-item>
      <li class="avatar-item">
        <a href="/edit">My Account</a>
      </li>
      <li class="avatar-item">
        <a href="/logout">Logout</a>
      </li>
    </template>
  </SETopBard>`
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<SETopBar
      :breadcrumbs="[
        {
          label: 'Base Route',
          isActive: false,
          path: '/base'
        },
        {
          label: 'Details Route',
          isActive: true,
          path: ''
        }
      ]"
    >
      <template v-slot:avatar-item>
        <li class="avatar-item">
          <a href="/edit">My Account</a>
        </li>
        <li class="avatar-item">
          <a href="/logout">Logout</a>
        </li>
      </template>
    </SETopBar>`
    }
  }
}
