<template>
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

<script>
import SEAlert from './index'

export default {
  name: 'Icon',
  components: {
    SEAlert
  }
}
</script>
