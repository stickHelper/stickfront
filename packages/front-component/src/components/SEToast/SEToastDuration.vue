<template>
  <div>
    <SEButton @click="showToaster">
      Custom Duration
    </SEButton>
    <SEToast
      id="se-toast"
      :is-active="activeToaster"
      :duration="toasterDuration"
      description="I will never close automatically. I will never close automatically. I will never close automatically."
    />
  </div>
</template>

<script>
import SEButton from '@/components/SEButton/index.vue'
import SEToast from '@/components/SEToast/index.vue'

export default {
  name: 'Basic',
  components: {
    SEButton,
    SEToast
  },
  data() {
    return {
      activeToaster: false,
      toasterDuration: 0
    }
  },
  methods: {
    showToaster() {
      this.activeToaster = !this.activeToaster

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
