import '@/styles/index.scss'
import SEPaginationV2 from '@/components/SEPaginationV2/index.vue'

export default {
  title: 'Components/PaginationV2',
  component: SEPaginationV2,
  argTypes: {
    size: { control: { type: 'select', options: ['default', 'small'] } },
    color: { control: { type: 'select', options: ['purple'] } },
    type: { control: { type: 'select', options: ['rectangle', 'circle'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEPaginationV2 },
  template: '<SEPaginationV2 :total="500" />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEPaginationV2 :total="500" />'
    }
  }
}

export const Circle = () => ({
  components: { SEPaginationV2 },
  template: '<SEPaginationV2 :total="500" type="circle" />'
})

Circle.parameters = {
  docs: {
    source: {
      code: '<SEPaginationV2 :total="500" type="circle" />'
    }
  }
}

export const Small = () => ({
  components: { SEPaginationV2 },
  template: `<div>
  <SEPaginationV2 :total="500" size="small" />
  <SEPaginationV2 :total="500" type="circle" size="small" />
</div>`
})

Small.parameters = {
  docs: {
    source: {
      code: `<SEPaginationV2 :total="500" size="small" />

<SEPaginationV2 :total="500" type="circle" size="small" />`
    }
  }
}

export const SizeChange = () => ({
  components: { SEPaginationV2 },
  template: `<div>
  <SEPaginationV2 :total="500" size="small" show-size-changer />
  <SEPaginationV2 :total="500" type="circle" size="small" show-size-changer />
</div>`
})

SizeChange.parameters = {
  docs: {
    source: {
      code: `<SEPaginationV2 :total="500" size="small" show-size-changer />

<SEPaginationV2 :total="500" type="circle" size="small" show-size-changer />`
    }
  }
}
