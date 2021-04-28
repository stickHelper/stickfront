import '@/styles/index.scss'
import SESteps from '@/components/SESteps/index.vue'

export default {
  title: 'Navigation/Steps',
  component: SESteps
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SESteps },
  template: `<SESteps
    id="default-steps"
    direction="horizontal"
    size="default"
    :current="0"
    :items="[
      { label: 'Step 1', description: 'This is a description 1.' },
      { label: 'Step 2', description: 'This is a description 2.' },
      { label: 'Step 3', description: 'This is a description 3.' },
      { label: 'Step 4', description: 'This is a description 4.' }
    ]"
  />`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SESteps
        id="default-steps"
        direction="horizontal"
        size="default"
        :current="0"
        :items="[
          { label: 'Step 1', description: 'This is a description 1.' },
          { label: 'Step 2', description: 'This is a description 2.' },
          { label: 'Step 3', description: 'This is a description 3.' }
          { label: 'Step 4', description: 'This is a description 4.' }
        ]"
      />`
    }
  }
}

export const VerticalClickable = () => ({
  components: { SESteps },
  template: `<SESteps
    id="default-steps"
    direction="vertical"
    size="default"
    :current="0"
    :clickable="true"
    :items="[
      { label: 'Step 1', description: 'This is a description 1.' },
      { label: 'Step 2', description: 'This is a description 2.' },
      { label: 'Step 3', description: 'This is a description 3.' },
      { label: 'Step 4', description: 'This is a description 4.' }
    ]"
  />`
})
VerticalClickable.parameters = {
  docs: {
    source: {
      code: `<SESteps
        id="default-steps"
        direction="vertical"
        size="default"
        :current="0"
        :clickable="true"
        :items="[
          { label: 'Step 1', description: 'This is a description 1.' },
          { label: 'Step 2', description: 'This is a description 2.' },
          { label: 'Step 3', description: 'This is a description 3.' }
          { label: 'Step 4', description: 'This is a description 4.' }
        ]"
      />`
    }
  }
}
