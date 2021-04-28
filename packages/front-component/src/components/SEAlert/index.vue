<template>
  <div class="se-alert">
    <Alert
      :banner="banner"
      :closable="closable"
      :description="description"
      :message="message"
      :show-icon="showIcon"
      :type="type"
      :after-close="afterClose"
      @close="$emit('close')"
    >
      <template slot="description">
        <slot name="description" />
      </template>
      <template slot="message">
        <slot name="message" />
      </template>
      <template slot="icon">
        <slot name="icon" />
      </template>
    </Alert>
  </div>
</template>

<script>
import { Alert } from 'ant-design-vue'

export default {
  name: 'SEAlert',
  components: {
    Alert
  },
  props: {
    banner: {
      type:  Boolean,
      default: false
    },
    closable: {
      type:  Boolean,
      default: false
    },
    description: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: null
    },
    showIcon: {
      type:  Boolean,
      default: true
    },
    type: {
      type:  String,
      default: 'info',
      validator: function (value) {
        return ['success', 'info', 'warning', 'error'].indexOf(value) !== -1
      }
    },
    // eslint-disable-next-line vue/require-default-prop
    afterClose: {
      type: Function
    }
  }
}
</script>
