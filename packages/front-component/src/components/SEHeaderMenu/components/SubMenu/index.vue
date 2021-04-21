<template>
  <span
    class="w-100"
    @mouseover="mouseEvent(true)"
    @mouseleave="mouseEvent(false)"
  >
    <span class="submenu-label">
      <div
        class="flex w-100 se-headermenu--btn"
        :class="showSubmenu ? 'active' : null"
      >
        <span class="se-headermenu--icon">
          <i :class="menu.icon" />
        </span>
        <div class="se-headermenu--label">
          <div>
            {{ menu.label }}
          </div>
          <span class="se-headermenu--icon">
            <i class="icon" :class="showSubmenu ? 'icon-angle-up' : 'icon-angle-down'" />
          </span>
        </div>
      </div>
    </span>
    <div
      v-if="showSubmenu"
      class="submenu-list"
    >
      <ul>
        <li
          v-for="(subMenu, idx) in menu.subMenus"
          :key="idx"
          class="submenu-item"
        >
          <a :href="subMenu.path">
            <div
              class="flex"
            >
              <div class="se-headermenu--label">
                {{ subMenu.label }}
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </span>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {
    menu: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      showSubmenu: false
    }
  },
  methods: {
    mouseEvent(value) {
      if (!this.showSubmenu) {
        this.showSubmenu = true
      } else {
        this.showSubmenu = value
      }
    }
  }
}
</script>
