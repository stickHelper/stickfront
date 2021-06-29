import SEToast from '@/components/SEToast/index.vue'
import SEToastBasic from '@/components/SEToast/SEToastBasic.vue'
import SEToastPlacement from '@/components/SEToast/SEToastPlacement.vue'
import SEToastIcon from '@/components/SEToast/SEToastIcon.vue'
import SEToastDuration from '@/components/SEToast/SEToastDuration.vue'

import '@/styles/index.scss'

export default {
  title: 'Components/Toast',
  component: SEToast,
  argTypes: {
    icon: { control: { type: 'select', options: ['success', 'info', 'warning', 'error'] } },
    placement: { control: { type: 'select', options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEToastBasic },
  template: '<SEToastBasic />'
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SEButton @click="showToaster">Show Toaster</SEButton>
    <SEToast
      id="se-toast"
      :isActive="activeToaster"
      :onClick="onClickToaster"
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

      setTimeout(() => this.activeToaster = false, 300)
    }
  }
}
</script>
`
    }
  }
}

export const Placement = () => ({
  components: { SEToastPlacement },
  template: '<SEToastPlacement />'
})

Placement.parameters = {
  docs: {
    source: {
      code: `<template>
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
      :isActive="activeToaster"
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
      this.activeToaster = true
      this.toasterPlacement = placement

      this.clearToaster()
    },
    clearToaster() {
      setTimeout(() => this.activeToaster = false, 1000)
    }
  }
}
</script>
`
    }
  }
}

export const Icon = () => ({
  components: { SEToastIcon },
  template: '<SEToastIcon />'
})

Icon.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SEButton @click="showToaster('success')">Success</SEButton>
    <SEButton color="blue" @click="showToaster('info')">Info</SEButton>
    <SEButton color="secondary" @click="showToaster('warning')">Warning</SEButton>
    <SEButton color="error" @click="showToaster('error')">Error</SEButton>
    <SEToast
      :isActive="activeToaster"
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
    SEIcon,
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
      this.toasterPlacement = icon

      this.clearToaster()
    },
    clearToaster() {
      setTimeout(() => this.activeToaster = false, 300)
    }
  }
}
</script>
`
    }
  }
}

export const Duration = () => ({
  components: { SEToastDuration },
  template: '<SEToastDuration type="warning" :isActive="true" />'
})

Duration.parameters = {
  docs: {
    source: {
      code: `<template>
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
`
    }
  }
}
