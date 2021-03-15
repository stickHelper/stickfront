<template>
  <span
    v-click-outside="hide"
    class="w-100"
  >
    <span
      class="submenu-label"
      @click="showSubmenu = !showSubmenu"
    >
      <div
        v-if="expandMenu"
        class="no-wrap w-100"
      >
        <span class="se-sidebarmenu--icon">
          <i :class="menu.icon" />
        </span>
        <span class="se-sidebarmenu--label">
          {{ menu.label }}
          <span class="se-sidebarmenu--icon">
            <i class="icon" :class="showSubmenu ? 'icon-angle-up' : 'icon-angle-down'" />
          </span>
        </span>
      </div>
      <div
        v-else
        class="no-wrap"
      >
        <span class="se-sidebarmenu--icon">
          <i :class="menu.icon" />
        </span>
      </div>
    </span>
    <ul
      v-if="expandMenu && showSubmenu"
      class="submenu-list"
    >
      <li
        v-for="(subMenu, idx) in menu.subMenus"
        :key="idx"
        class="submenu-item"
      >
        <a :href="subMenu.path">
          <div
            class="no-wrap"
          >
            <span class="se-sidebarmenu--label">
              {{ subMenu.label }}
            </span>
          </div>
        </a>
      </li>
    </ul>
  </span>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SubMenu',
  directives: {
    ClickOutside
  },
  props: {
    menu: {
      type: Object,
      default: () => null
    },
    expandMenu: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSubmenu: false
    }
  },
  methods: {
    hide() {
      this.showSubmenu = false
    }
  }
}
</script>

<style>

</style>
