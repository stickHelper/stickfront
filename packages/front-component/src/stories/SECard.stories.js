import SECard from '@/components/SECard/index.vue'
import SERow from '@/components/SERow/index.vue'
import SECol from '@/components/SECol/index.vue'
import SEIcon from '@/components/SEIcon/index.vue'
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
  template: `<div>
  <SECard title="Default size card">
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </SECard>

  <br/>

  <SECard size="small" title="Small size card">
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </SECard>
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  <SECard title="Default size card">
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </SECard>

  <SECard size="small" title="Small size card">
    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </SECard>
</div>`
    }
  }
}

export const Type = () => ({
  components: { SECard, SERow, SECol },
  template: `<SERow>
  <SECol :span="8">
    <SECard type="depth-1"><div>Depth 1</div></SECard>
  </SECol>
  <SECol :span="8">
    <SECard type="depth-2"><div>Depth 2</div></SECard>
  </SECol>
  <SECol :span="8">
    <SECard type="depth-3"><div>Depth 3</div></SECard>
  </SECol>
</SERow>
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

export const Actions = () => ({
  components: { SECard, SEIcon },
  template: `<SECard title="Card with Actions">
  Card Body
  <template #actions>
    <SEIcon key="setting" type="setting" />
    <SEIcon key="edit" type="edit" />
    <SEIcon key="ellipsis" type="ellipsis" />
  </template>
</SECard>
  `
})

Actions.parameters = {
  docs: {
    source: {
      code: `<<SECard title="Card with Actions">
  Card Body
  <template #actions>
    <SEIcon key="setting" type="setting" />
    <SEIcon key="edit" type="edit" />
    <SEIcon key="ellipsis" type="ellipsis" />
  </template>
</SECard>
      `
    }
  }
}

export const Cover = () => ({
  components: { SECard, SEIcon },
  template: `<SECard title="Card with Cover" hoverable>
  Card Body
  <img
    slot="cover"
    alt="example"
    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  />
</SECard>
  `
})

Cover.parameters = {
  docs: {
    source: {
      code: `<SECard title="Card with Cover" hoverable>
  Card Body
  <img
    slot="cover"
    alt="example"
    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
  />
</SECard>
      `
    }
  }
}

export const Loading = () => ({
  components: { SECard, SEIcon },
  template: `<SECard :loading="true" title="Card with loading" hoverable>
  Card Body
</SECard>
  `
})

Loading.parameters = {
  docs: {
    source: {
      code: `SECard :loading="true" title="Card with loading" hoverable>
  Card Body
</SECard>
      `
    }
  }
}
