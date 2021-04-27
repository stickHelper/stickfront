<template>
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
import SEAlert from './index'

export default {
  name: 'SmootUnmount',
  components: {
    SEAlert
  },
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
