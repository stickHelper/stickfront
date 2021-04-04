import '@/styles/index.scss'
import SESlider from '@/components/SESlider/index.vue'

export default {
  title: 'Data Entry/Slider',
  component: SESlider
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESlider },
  template: `<div class="mt-lg-5">
    <SESlider />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SESlider />'
    }
  }
}

export const Range = () => ({
  components: { SESlider },
  template: `<div class="mt-lg-5">
    <SESlider type="range" />
  </div>
  `
})

Range.parameters = {
  docs: {
    source: {
      code: '<SESlider type="range" />'
    }
  }
}
