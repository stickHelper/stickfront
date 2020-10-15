import SECard from '@/components/SECard/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Card',
  component: SECard,
  argTypes: {
    type: { control: { type: 'select', options: ['depth-1', 'depth-2', 'depth-3'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SECard },
  template: '<SECard>Default</SECard>'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SECard><div>Default</div></SECard>'
    }
  }
}

export const Type = () => ({
  components: { SECard },
  template: `<div class="row">
    <div class="col-xs-4">
      <SECard type="depth-1" class-name="mt"><div>Depth 1</div></SECard>
    </div>
    <div class="col-xs-4">
      <SECard type="depth-2"><div>Depth 2</div></SECard>
    </div>
    <div class="col-xs-4">
      <SECard type="depth-3"><div>Depth 3</div></SECard>
    </div>
  </div>
  `
})

Type.parameters = {
  docs: {
    source: {
      code: `<SECard type="depth-1"><div>Depth 1</div></SECard>
<SECard type="depth-2"><div>Depth 2</div></SECard>
<SECard type="depth-"><div>Depth 3</div></SECard>
      `
    }
  }
}
