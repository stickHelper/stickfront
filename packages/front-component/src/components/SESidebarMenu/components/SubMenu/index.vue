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
        class="flex w-100"
      >
        <span class="se-sidebarmenu--icon">
          <i :class="menu.icon" />
        </span>
        <div class="se-sidebarmenu--label">
          <div>
            {{ menu.label }}
          </div>
          <span class="se-sidebarmenu--icon">
            <i class="icon" :class="showSubmenu ? 'icon-angle-up' : 'icon-angle-down'" />
          </span>
        </div>
      </div>
      <div
        v-else
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
            class="flex"
          >
            <div class="se-sidebarmenu--label">
              {{ subMenu.label }}
            </div>
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
