import '@/styles/index.scss'
import { Modal } from 'ant-design-vue'
import BasicExample from '@/components/SEModal/BasicExample.vue'
import SEPlain from '@/components/SEModal/Plain.vue'

export default {
  title: 'Components/Modal',
  component: Modal
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasicExample },
  template: `<div>
    <BasicExample />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SEButton type="primary" @click="showModal">
      Open Modal
    </SEButton>
    <AModal
      v-model="visible"
      title="Basic Modal"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk(e) {
      console.log(e)
      this.visible = false
    },
    handleCancel(e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>
`
    }
  }
}

export const Plain = () => ({
  components: { SEPlain },
  template: '<SEPlain />'
})

Plain.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SEButton type="primary" @click="showModal">
      Open Modal
    </SEButton>
    <AModal
      v-model="visible"
      :footer="null"
      :closable="false"
      @cancel="handleCancel"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </AModal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleCancel(e) {
      console.log(e)
      this.visible = false
    }
  }
}
</script>
`
    }
  }
}
