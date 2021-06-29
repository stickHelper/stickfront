<template>
  <div>
    <SEButton @click="showToaster('topLeft')">
      <SEIcon type="radius-upleft" />topLeft
    </SEButton>
    <SEButton @click="showToaster('topRight')">
      <SEIcon type="radius-upright" />topRight
    </SEButton>
    <SEButton @click="showToaster('bottomLeft')">
      <SEIcon type="radius-bottomleft" />bottomLeft
    </SEButton>
    <SEButton @click="showToaster('bottomRight')">
      <SEIcon type="radius-bottomright" />bottomRight
    </SEButton>
    <SEToast
      :is-active="activeToaster"
      :placement="toasterPlacement"
    />
  </div>
</template>

<script>
import SEIcon from '@/components/SEIcon/index.vue'
import SEButton from '@/components/SEButton/index.vue'
import SEToast from '@/components/SEToast/index.vue'

export default {
  name: 'Placement',
  components: {
    SEIcon,
    SEButton,
    SEToast
  },
  data() {
    return {
      activeToaster: false,
      toasterPlacement: 'topRight'
    }
  },
  methods: {
    showToaster(placement) {
      this.activeToaster = !this.activeToaster
      this.toasterPlacement = placement

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
