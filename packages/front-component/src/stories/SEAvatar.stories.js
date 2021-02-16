import '@/styles/index.scss'
import '@/styles/index.css'
import SEAvatar from '@/components/SEAvatar/index.vue'

export default {
  title: 'Components/Avatar',
  component: SEAvatar,
  argTypes: {
    size: { control: { type: 'select', options: ['small', 'medium', 'large', 'extra-large'] } },
    type: { control: { type: 'select', options: ['img', 'icon'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEAvatar },
  template: `<div class="flex space-x-2">
    <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" />
    <SEAvatar type="icon" content="icon-user" />
    <SEAvatar content="SE" />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" />
<SEAvatar type="icon" content="icon-user" />
<SEAvatar content="SE" />
      `
    }
  }
}

export const Size = () => ({
  components: { SEAvatar },
  template: `<div>
    <div class="flex space-x-2 mb-3">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="small" />
      <SEAvatar type="icon" content="icon-user" size="small" />
      <SEAvatar content="SE" size="small" />
    </div>
    <div class="flex space-x-2 mb-3">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="medium" />
      <SEAvatar type="icon" content="icon-user" size="medium" />
      <SEAvatar content="SE" size="medium" />
    </div>
    <div class="flex space-x-2 mb-3">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="large" />
      <SEAvatar type="icon" content="icon-user" size="large" />
      <SEAvatar content="SE" size="large" />
    </div>
    <div class="flex space-x-2 mb-3">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="extra-large" />
      <SEAvatar type="icon" content="icon-user" size="extra-large" />
      <SEAvatar content="SE" size="extra-large" />
    </div>
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<div class="flex space-x-2 mb-3">
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="small" />
  <SEAvatar type="icon" content="icon-user" size="small" />
  <SEAvatar content="SE" size="small" />
</div>
<div class="flex space-x-2 mb-3">
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="medium" />
  <SEAvatar type="icon" content="icon-user" size="medium" />
  <SEAvatar content="SE" size="medium" />
</div>
<div class="flex space-x-2 mb-3">
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="large" />
  <SEAvatar type="icon" content="icon-user" size="large" />
  <SEAvatar content="SE" size="large" />
</div>
<div class="flex space-x-2 mb-3">
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="extra-large" />
  <SEAvatar type="icon" content="icon-user" size="extra-large" />
  <SEAvatar content="SE" size="extra-large" />
</div>
      `
    }
  }
}

export const Variant = () => ({
  components: { SEAvatar },
  template: '<SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" :square="true" />'
})

Variant.parameters = {
  docs: {
    source: {
      code: '<SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" :square="true" />'
    }
  }
}
