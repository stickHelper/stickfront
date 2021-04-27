import '@/styles/index.scss'
import SEAlert from '@/components/SEAlert/index.vue'
import BasicExample from '@/components/SEAlert/Basic.vue'
import CloseableExample from '@/components/SEAlert/Closeable.vue'
import IconExample from '@/components/SEAlert/Icon.vue'
import SmootUnmountExample from '@/components/SEAlert/SmootUnmount.vue'

export default {
  title: 'Components/Alert',
  component: SEAlert,
  argTypes: {
    type: { control: { type: 'select', options: ['success', 'info', 'warning', 'error'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasicExample },
  template: '<BasicExample />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SESpace direction="vertical" size="middle">
      <SEAlert message="Success Text" type="success" />
      <SEAlert
        type="warning"
        message="Warning text"
        banner
      />
      <SEAlert
        type="warning"
        message="Very long warning text warning text text text text text text text"
        banner
        closable
      />
      <SEAlert
        type="warning"
        :show-icon="false"
        message="Warning text without icon"
        banner
      />
      <SEAlert
        type="error"
        message="Error text"
        banner
      />
    </SESpace>
  </div>
</template>
`
    }
  }
}

export const Closeable = () => ({
  components: { CloseableExample },
  template: '<CloseableExample/>'
})

Closeable.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SESpace direction="vertical" size="middle">
      <SEAlert
        message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        type="warning"
        closable
        @close="onClose"
      />
      <SEAlert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description Error Description Error Description"
        type="error"
        closable
        @close="onClose"
      />
    </SESpace>
  </div>
</template>

<script>
export default {
  methods: {
    onClose(e) {
      console.log(e, 'I was closed.')
    }
  }
}
</script>
`
    }
  }
}

export const Icon = () => ({
  components: { IconExample },
  template: '<IconExample/>'
})

Icon.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SESpace direction="vertical" size="middle">
      <SEAlert
        message="Success Tips"
        type="success"
        show-icon
      />
      <SEAlert
        message="Informational Notes"
        type="info"
        show-icon
      />
      <SEAlert
        message="Warning"
        type="warning"
        show-icon
      />
      <SEAlert
        message="Error"
        type="error"
        show-icon
      />
      <SEAlert
        message="Success Tips"
        description="Detailed description and advices about successful copywriting."
        type="success"
        show-icon
      />
      <SEAlert
        message="Informational Notes"
        description="Additional description and informations about copywriting."
        type="info"
        show-icon
      />
      <SEAlert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        show-icon
      />
      <SEAlert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        show-icon
      />
    </SESpace>
  </div>
</template>  
`
    }
  }
}

export const SmootUnmount = () => ({
  components: { SmootUnmountExample },
  template: '<SmootUnmountExample/>'
})

SmootUnmount.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SEAlert
      v-if="visible"
      message="Alert Message Text"
      type="success"
      closable
      :after-close="handleClose"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleClose() {
      this.visible = false
    }
  }
}
</script>
    
`
    }
  }
}
