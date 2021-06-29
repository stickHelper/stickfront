<template>
  <div>
    <SEButton @click="showToaster">
      Show Toaster
    </SEButton>
    <SEToast
      id="se-toast"
      :is-active="activeToaster"
      :on-click="onClickToaster"
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
      activeToaster: false
    }
  },
  methods: {
    onClickToaster() {
      console.log('Notification Clicked!')
    },
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
