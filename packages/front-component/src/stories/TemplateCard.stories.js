import '@/styles/index.scss'
import DefaultTemplate from '@/components/Template/DefaultTemplate/index.vue'
import SECard from '@/components/SECard/index.vue'
import SERow from '@/components/SERow/index.vue'
import SECol from '@/components/SECol/index.vue'

export default {
  title: 'Template/Card',
  component: DefaultTemplate
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DefaultTemplate, SECard, SERow, SECol },
  template: `<DefaultTemplate
    :menus="[
      { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
      { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
      { label: 'Label 1', path: '', type: 'label', icon: '' },
      { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
      { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
      { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
    ]"
    :breadcrumbs="[
      { label: 'Base Route', isActive: false, path: '/base' },
      { label: 'Details Route', isActive: true, path: '' }
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
    <template v-slot:content>
      <SERow>
        <SECol lg="6" md="6">
          <SECard>
            // Content Here
          </SECard>
        </SECol>
        <SECol lg="6" md="6">
          <SECard>
            // Content Here
          </SECard>
        </SECol>
      </SERow>
    </template>
  </DefaultTemplate>`
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<DefaultTemplate
      :menus="[
        { label: 'menu 1', path: '/menu1', type: 'url', icon: 'icon-home' },
        { label: 'menu 2', path: '/menu2', type: 'url', icon: 'icon-apps' },
        { label: 'Label 1', path: '', type: 'label', icon: '' },
        { label: 'menu 3', path: '/menu3', type: 'url', icon: 'icon-user' },
        { label: 'menu 4', path: '/menu4', type: 'url', icon: 'icon-trophy' },
        { label: 'menu 5', path: '/menu5', type: 'url', icon: 'icon-stopwatch' }
      ]"
      :breadcrumbs="[
        { label: 'Base Route', isActive: false, path: '/base' },
        { label: 'Details Route', isActive: true, path: '' }
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
      <template v-slot:content>
        // Add your content here
      </template>
    </DefaultTemplate>`
    }
  }
}
