<template>
  <div
    :class="classes"
    @mouseover="mouseEvent(true)"
    @mouseleave="mouseEvent(false)"
  >
    <div class="se-sidebarmenu--brand">
      <slot />
    </div>
    <ul class="se-sidebarmenu--list">
      <li
        v-for="(menu, index) in menus"
        :key="index"
        class="se-sidebarmenu--item"
      >
        <router-link
          v-if="isVueRouter"
          :to="menu.path"
          :class="menu.type === 'label' ? 'label-menu' : null"
        >
          <div class="se-sidebarmenu--icon">
            <span :class="menu.icon" />
          </div>
          <span
            v-if="expandMenu"
            class="se-sidebarmenu--label"
          >{{ menu.label }}</span>
        </router-link>
        <a
          v-else
          :href="menu.path"
          :class="menu.type === 'label' ? 'label-menu' : null"
        >
          <div
            v-if="expandMenu"
            class="no-wrap"
          >
            <span class="se-sidebarmenu--icon">
              <i :class="menu.icon" />
            </span>
            <span class="se-sidebarmenu--label">
              {{ menu.label }}
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
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SESidebarMenu',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    isVueRouter: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      default: () => []
    },
    isExpand: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'purple',
      validator: function (value) {
        return ['purple', 'turquoise', 'accent', 'yellow'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      expandMenu: false
    }
  },
  computed: {
    classes() {
      return {
        'se-sidebarmenu': true,
        [this.className]: this.className !== null,
        [this.theme]: true,
        show: !this.isExpand ? true : this.expandMenu
      }
    }
  },
  mounted() {
    if (!this.isExpand) {
      this.expandMenu = true
    }
  },
  methods: {
    mouseEvent(value) {
      if (!this.isExpand) {
        this.expandMenu = true
      } else {
        this.expandMenu = value
        this.$emit('expandMenu', value)
      }
    }
  }
}
</script>
