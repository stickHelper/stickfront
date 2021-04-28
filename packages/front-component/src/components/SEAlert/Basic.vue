<template>
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

<script>
import SEAlert from './index'

export default {
  name: 'Basic',
  components: {
    SEAlert
  }
}
</script>
