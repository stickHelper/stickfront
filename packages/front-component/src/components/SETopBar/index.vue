<template>
  <div
    id="se-topbar"
    class="se-topbar"
  >
    <div
      v-if="leftSide"
      class="se-topbar--leftside"
    >
      <slot name="left-side" />
    </div>
    <div
      class="se-topbar--content"
      :style="styles"
    >
      <div class="content-left">
        <SEBreadcrumbs
          :items="breadcrumbs"
          :is-vue-router="isVueRouter"
        />
      </div>
      <div class="content-right">
        <slot name="right-side" />
        <div
          v-click-outside="hideProfile"
          class="se-topbar--avatar"
        >
          <SEAvatar
            type="icon"
            content="icon-user"
            class-name="ml-xs-3"
            @click="showProfile = !showProfile"
          />
          <ul
            v-if="showProfile"
            class="avatar-list"
          >
            <slot name="avatar-item" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

import SEAvatar from '@/components/SEAvatar'
import SEBreadcrumbs from '@/components/SEBreadcrumbs'

export default {
  name: 'SETopBar',
  directives: {
    ClickOutside
  },
  components: {
    SEAvatar,
    SEBreadcrumbs
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    },
    isVueRouter: {
      type: Boolean,
      default: false
    },
    leftSide: {
      type: Boolean,
      default: false
    },
    paddingLeft: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showProfile: false
    }
  },
  computed: {
    styles() {
      let styles = ''
      if (this.leftSide) {
        styles += 'width: calc(100% - 27.5%);'
      }
      if (this.paddingLeft) {
        styles += `padding-left: ${this.paddingLeft};`
      }
      return styles
    }
  },
  methods: {
    hideProfile() {
      this.showProfile = false
    }
  }
}
</script>
