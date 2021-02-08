<template>
  <div
    id="se-template"
    class="se-template"
  >
    <SETopBar
      padding-left="114px"
      :breadcrumbs="breadcrumbs"
    >
      <template v-slot:avatar-item>
        <slot name="avatar-item" />
      </template>
    </SETopBar>
    <SESidebarMenu
      :menus="menus"
      :is-expand="true"
      @expandMenu="expandMenu($event)"
    >
      <img
        v-if="isExpandMenu"
        :src="brandExpand"
        alt="logo"
      >
      <img
        v-else
        :src="brandIcon"
        alt="logo"
      >
    </SESidebarMenu>

    <div class="se-content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import SESidebarMenu from '@/components/SESidebarMenu'
import SETopBar from '@/components/SETopBar'

import logo from '@/assets/images/logo-brand.svg'
import icon from '@/assets/images/icon-brand.svg'

export default {
  name: 'DefaultTemplate',
  components: {
    SESidebarMenu,
    SETopBar
  },
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    brandExpand: {
      type: String,
      default: logo
    },
    brandIcon: {
      type: String,
      default: icon
    }
  },
  data() {
    return {
      isExpandMenu: false
    }
  },
  methods: {
    expandMenu(value) {
      this.isExpandMenu = value
    }
  }
}
</script>

<style lang="scss">

</style>
