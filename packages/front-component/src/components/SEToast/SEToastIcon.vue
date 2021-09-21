<template>
  <div>
    <SEButton @click="showToaster('success')">
      Success
    </SEButton>
    <SEButton color="blue" @click="showToaster('info')">
      Info
    </SEButton>
    <SEButton color="secondary" @click="showToaster('warning')">
      Warning
    </SEButton>
    <SEButton color="error" @click="showToaster('error')">
      Error
    </SEButton>
    <SEToast
      :is-active="activeToaster"
      :icon="toasterIcon"
    />
  </div>
</template>

<script>
import SEButton from '@/components/SEButton/index.vue'
import SEToast from '@/components/SEToast/index.vue'

export default {
  name: 'Icon',
  components: {
    SEButton,
    SEToast
  },
  data() {
    return {
      activeToaster: false,
      toasterIcon: 'success'
    }
  },
  methods: {
    showToaster(icon) {
      this.activeToaster = !this.activeToaster
      this.toasterIcon = icon

      this.hideToaster()
    },
    hideToaster() {
      setTimeout(() => {
        this.activeToaster = false
      }, 300)
    }
  }
}
</script>
