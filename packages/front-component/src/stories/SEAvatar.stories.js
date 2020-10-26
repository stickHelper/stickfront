import '@/styles/index.scss'
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
  template: `<div class="flex">
    <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" class-name="mr-md-2" />
    <SEAvatar type="icon" content="icon-user" class-name="mr-md-2" />
    <SEAvatar content="SE" class-name="mr-md-2" />
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
    <div class="flex mb-md-2">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="small" class-name="mr-md-2" />
      <SEAvatar type="icon" content="icon-user" size="small" class-name="mr-md-2" />
      <SEAvatar content="SE" size="small" class-name="mr-md-2" />
    </div>
    <div class="flex mb-md-2">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="medium" class-name="mr-md-2" />
      <SEAvatar type="icon" content="icon-user" size="medium" class-name="mr-md-2" />
      <SEAvatar content="SE" size="medium" class-name="mr-md-2" />
    </div>
    <div class="flex mb-md-2">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="large" class-name="mr-md-2" />
      <SEAvatar type="icon" content="icon-user" size="large" class-name="mr-md-2" />
      <SEAvatar content="SE" size="large" class-name="mr-md-2" />
    </div>
    <div class="flex">
      <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="extra-large" class-name="mr-md-2" />
      <SEAvatar type="icon" content="icon-user" size="extra-large" class-name="mr-md-2" />
      <SEAvatar content="SE" size="extra-large" class-name="mr-md-2" />
    </div>
  </div>
  `
})

Size.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="small" class-name="mr-md-2" />
  <SEAvatar type="icon" content="icon-user" size="small" class-name="mr-md-2" />
  <SEAvatar content="SE" size="small" class-name="mr-md-2" />
</div>
<div>
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="medium" class-name="mr-md-2" />
  <SEAvatar type="icon" content="icon-user" size="medium" class-name="mr-md-2" />
  <SEAvatar content="SE" size="medium" class-name="mr-md-2" />
</div>
<div>
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="large" class-name="mr-md-2" />
  <SEAvatar type="icon" content="icon-user" size="large" class-name="mr-md-2" />
  <SEAvatar content="SE" size="large" class-name="mr-md-2" />
</div>
<div>
  <SEAvatar type="img" content="https://randomuser.me/api/portraits/women/17.jpg" size="extra-large" class-name="mr-md-2" />
  <SEAvatar type="icon" content="icon-user" size="extra-large" class-name="mr-md-2" />
  <SEAvatar content="SE" size="extra-large" class-name="mr-md-2" />
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
