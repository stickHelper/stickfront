import '@/styles/index.scss'
import SEDropdown from '@/components/SEDropdown/index.vue'
import SESpace from '@/components/SESpace/index.vue'
import SEButton from '@/components/SEButton/index.vue'

export default {
  title: 'Navigation/Dropdown',
  component: SEDropdown
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEDropdown },
  data() {
    return {
      dataList: [
        {
          label: 'Top Impression',
          key: 'impression'
        },
        {
          label: 'Lowest Price',
          key: 'lowest-price'
        },
        {
          label: 'Highest Price',
          key: 'highest-price'
        }
      ]
    }
  },
  template: `<div>
  <SEDropdown>
    Click Me !

    <template v-slot:list>
      <li class="se-dropdown__item">
        Edit
      </li>
      <li class="se-dropdown__item">
        Delete
      </li>
    </template>
  </SEDropdown>
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SEDropdown>
  Click Me !

  <template v-slot:list>
    <li class="se-dropdown__item">
      Edit
    </li>
    <li class="se-dropdown__item">
      Delete
    </li>
  </template>
</SEDropdown>`
    }
  }
}

export const Other = (args) => ({
  components: { SEDropdown, SESpace, SEButton },
  template: `<SESpace>
  <SEDropdown top="37px" width="200px" position="left">
    <SEButton>Left Align</SEButton>

    <template v-slot:list>
      <li class="se-dropdown__item">
        This is list number 1
      </li>
      <li class="se-dropdown__item">
        This is list number 2
      </li>
    </template>
  </SEDropdown>
  
</SESpace>`
})

Other.parameters = {
  docs: {
    source: {
      code: `<SEDropdown top="37px" width="200px" position="left">
  <SEButton>Left Align</SEButton>

  <template v-slot:list>
    <li class="se-dropdown__item">
      This is list number 1
    </li>
    <li class="se-dropdown__item">
      This is list number 2
    </li>
  </template>
</SEDropdown>`
    }
  }
}
