import '@/styles/index.scss'
import SESpace from '@/components/SESpace/index.vue'
import SEButton from '@/components/SEButton/index.vue'

export default {
  title: 'Layout/Space',
  component: SESpace,
  argTypes: {
    align: { control: { type: 'select', options: ['start', 'end', 'center', 'baseline'] } },
    direction: { control: { type: 'select', options: ['vertical', 'horizontal'] } },
    size: { control: { type: 'select', options: ['small', 'middle', 'large'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESpace, SEButton },
  template: `<div>
  <SESpace>
    Space
    <SEButton color="primary">Button</SEButton>
    <SEButton color="secondary">Button</SEButton>
    <SEButton color="salmon">Button</SEButton>
  </SESpace>  
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<div>
  Space
  <SEButton color="primary">Button</SEButton>
  <SEButton color="secondary">Button</SEButton>
  <SEButton color="salmon">Button</SEButton>    
</div>`
    }
  }
}

export const Vertical = () => ({
  components: { SESpace, SEButton },
  template: `<div>
  <SESpace direction="vertical">
    Vertical
    <SEButton color="primary">Button</SEButton>
    <SEButton color="secondary">Button</SEButton>
    <SEButton color="salmon">Button</SEButton>
  </SESpace>  
</div>
  `
})

Vertical.parameters = {
  docs: {
    source: {
      code: `<SESpace direction="vertical">
  Vertical
  <SEButton color="primary">Button</SEButton>
  <SEButton color="secondary">Button</SEButton>
  <SEButton color="salmon">Button</SEButton>
</SESpace>  
      `
    }
  }
}

export const Align = () => ({
  components: { SESpace, SEButton },
  template: `<div>
  <SESpace align="center">
  center
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
  <br /><br />
  <SESpace align="start">
    start
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
  <br /><br />
  <SESpace align="end">
    end
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
  <br /><br />
  <SESpace align="baseline">
    baseline
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
</div>
  `
})

Align.parameters = {
  docs: {
    source: {
      code: `<div>
  <SESpace align="center">
  center
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
  
  <SESpace align="start">
    start
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
  
  <SESpace align="end">
    end
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
  
  <SESpace align="baseline">
    baseline
    <SEButton color="primary" size="small">Button</SEButton>
    <SEButton color="secondary" size="small">Button</SEButton>
    <SEButton color="salmon" size="large">Button</SEButton>
  </SESpace>
</div>
      `
    }
  }
}
