import '@/styles/index.scss'
import SEImg from '@/components/SEImg/index.vue'

export default {
  title: 'Components/Image',
  component: SEImg
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEImg },
  template: '<SEImg src="https://stickearn.com/storage/app/uploads/public/5cf/e07/ecd/thumb_241_592_495_0_0_auto.png" alt="stickearn" height="150px" width="150px" />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: '<SEImg src="https://stickearn.com/storage/app/uploads/public/5cf/e07/ecd/thumb_241_592_495_0_0_auto.png" alt="stickearn" height="150px" width="150px" />'
    }
  }
}

export const Variant = () => ({
  components: { SEImg },
  template: '<SEImg src="https://stickearn.com/storage/app/uploads/public/5cf/e07/ecd/thumb_241_592_495_0_0_auto.png" alt="stickearn" type="square" height="150px" width="150px" />'
})

Variant.parameters = {
  docs: {
    source: {
      code: '<SEImg src="https://stickearn.com/storage/app/uploads/public/5cf/e07/ecd/thumb_241_592_495_0_0_auto.png" alt="stickearn" type="square" height="150px" width="150px" />'
    }
  }
}
