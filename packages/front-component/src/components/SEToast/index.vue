<template>
  <div
    :id="id"
    ref="seToast"
    :class="classes"
  />
</template>

<script>
import { notification } from 'ant-design-vue'

export default {
  name: 'SEToast',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    toasterClass: {
      type: String,
      default: null
    },
    isActive: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 4.5
    },
    icon: {
      type: String,
      default: null,
      validator: function (value) {
        return ['success', 'info', 'warning', 'error'].indexOf(value) !== -1
      }
    },
    placement: {
      type: String,
      default: 'topRight',
      validator: function (value) {
        return ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'].indexOf(value) !== -1
      }
    },
    message: {
      type: String,
      default: 'Notification Title'
    },
    description: {
      type: String,
      default: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    },
    onClick: {
      type: Function,
      default: () => ({})
    }
  },
  computed: {
    classes() {
      return {
        'se-toast': true,
        [this.className]: this.className !== null
      }
    }
  },
  watch: {
    isActive: function (newValue) {
      if (newValue && this.isActive) {
        this.openNotification()
      }
    }
  },
  beforeDestroy() {
    notification.destroy()
  },
  methods: {
    openNotification() {
      const toastOptions = {
        message: this.message,
        description: this.description,
        duration: this.duration,
        class: this.toasterClass,
        placement: this.placement,
        getContainer: () => this.$refs.seToast,
        onClick: this.onClick
      }

      if (this.icon) {
        return notification[this.icon](toastOptions)
      }

      return notification.open(toastOptions)
    }
  }
}
</script>
