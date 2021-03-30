import SETextarea from '@/components/SETextarea/index.vue'
import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/Textarea',
  component: SETextarea
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETextarea },
  template: `<div>
  <SETextarea autoSize />
  
  <br />

  <SETextarea
    placeholder="Placeholder"
    label-name="Label Info"
    :autoSize="{ minRows: 2, maxRows: 6 }"
  />

  <br />

  <SETextarea
    placeholder="Placeholder"
    label-name="Label Info"
    helper="Helper text"
    info="Message info"
    :autoSize="{ minRows: 3, maxRows: 5 }"
  />
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<SETextarea autoSize />

<SETextarea
  placeholder="Placeholder"
  label-name="Label Info"
  :autoSize="{ minRows: 2, maxRows: 6 }"
/>

<SETextarea
  placeholder="Placeholder"
  label-name="Label Info"
  helper="Helper text"
  info="Message info"
  :autoSize="{ minRows: 3, maxRows: 5 }"
/>
`
    }
  }
}

export const Info = () => ({
  components: { SETextarea },
  template: `<div>
  <SETextarea label-name="Label info" info="Message info" />

  <br />

  <SETextarea label-name="Label error" :isError="true" info="Message Error" />

  <br />

  <SETextarea label-name="Label success" :isSuccess="true" info="Message Success" />

</div>`
})

Info.parameters = {
  docs: {
    source: {
      code: `<SETextarea label-name="Label info" info="Message info" />

<SETextarea label-name="Label error" :isError="true" info="Message Error" />

<SETextarea label-name="Label success" :isSuccess="true" info="Message Success" />    
`
    }
  }
}

export const Disabled = (args) => ({
  components: { SETextarea },
  template: '<SETextarea disabled />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: '<SETextarea disabled  />'
    }
  }
}
