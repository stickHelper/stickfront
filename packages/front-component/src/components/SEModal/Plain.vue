<template>
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
import { Modal } from 'ant-design-vue'
import SEButton from '@/components/SEButton'

export default {
  components: {
    AModal: Modal,
    SEButton
  },
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
      this.visible = false
    }
  }
}
</script>
