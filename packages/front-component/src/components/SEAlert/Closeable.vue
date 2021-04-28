<template>
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
import SEAlert from './index'

export default {
  name: 'Closeable',
  components: {
    SEAlert
  },
  methods: {
    onClose(e) {
      // console.log(e, 'I was closed.')
    }
  }
}
</script>
