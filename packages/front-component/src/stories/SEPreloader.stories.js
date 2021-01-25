import SEPreloader from '@/components/SEPreloader/index.vue'
import '@/styles/index.scss'

export default {
  title: 'Components/Preloader',
  component: SEPreloader,
  color: { control: { type: 'select', options: ['yellow'] } },
  size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEPreloader },
  template: '<SEPreloader></SEPreloader>'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEPreloader></SEPreloader>'
    }
  }
}

export const Size = () => ({
  components: { SEPreloader },
  template: `<div class="flex">
    <SEPreloader size="small"></SEPreloader>
    <SEPreloader></SEPreloader>
    <SEPreloader size="large"></SEPreloader>
  </div>
  `
})
Size.parameters = {
  docs: {
    source: {
      code: `<SEPreloader size="small"></SEPreloader>
<SEPreloader></SEPreloader>
<SEPreloader size="large"></SEPreloader>
      `
    }
  }
}

export const Color = () => ({
  components: { SEPreloader },
  template: `<div class="flex">
    <SEPreloader size="small" color="yellow"></SEPreloader>
    <SEPreloader color="yellow"></SEPreloader>
    <SEPreloader size="large" color="yellow"></SEPreloader>
  </div>
  `
})
Color.parameters = {
  docs: {
    source: {
      code: `<SEPreloader size="small" color="yellow"></SEPreloader>
<SEPreloader color="yellow"></SEPreloader>
<SEPreloader size="large" color="yellow"></SEPreloader>
      `
    }
  }
}

export const Text = () => ({
  components: { SEPreloader },
  template: `<div class="flex">
    <SEPreloader>Loading...</SEPreloader>
  </div>
  `
})
Text.parameters = {
  docs: {
    source: {
      code: '<SEPreloader>Loading...</SEPreloader>'
    }
  }
}
