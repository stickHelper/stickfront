<template>
  <div :class="classes">
    <div class="se-headermenu--left">
      <div class="se-headermenu--brand">
        <slot />
      </div>
      <ul class="se-headermenu--list">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="se-headermenu--item"
          :class="menu.type"
        >
          <template v-if="menu.type === 'submenu'">
            <SubMenu :menu="menu" />
          </template>
          <template v-else>
            <router-link
              v-if="isVueRouter"
              :to="menu.path"
              :class="menu.type === 'label' ? 'label-menu' : null"
            >
              <div class="se-headermenu--icon">
                <span :class="menu.icon" />
              </div>
              <span class="se-headermenu--label">
                {{ menu.label }}
              </span>
            </router-link>
            <a
              v-else
              :href="menu.path"
              :class="menu.type === 'label' ? 'label-menu' : null"
            >
              <div class="flex se-headermenu--btn">
                <span class="se-headermenu--icon">
                  <i :class="menu.icon" />
                </span>
                <div class="se-headermenu--label">
                  {{ menu.label }}
                </div>
              </div>
            </a>
          </template>
        </li>
      </ul>
    </div>
    <div class="se-headermenu--right">
      <ul class="se-headermenu--list">
        <li
          v-if="notification.active"
          class="se-headermenu--item"
        >
          <div
            v-click-outside="hide"
            class="se-headermenu--notification"
            @click="showSubNotif = !showSubNotif"
          >
            <SEBadge :count="10" :overflow-count="9">
              <i
                class="icon text-xl"
                :class="notification.icon"
              />
            </SEBadge>
            <div
              v-if="showSubNotif"
              class="submenu-list right"
            >
              <ul>
                <li
                  v-for="(subMenu, idx) in notification.subMenus"
                  :key="idx"
                  class="submenu-item"
                >
                  <a :href="subMenu.path">
                    {{ subMenu.label }}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li
          v-if="profile.active"
          class="se-headermenu--item"
        >
          <div
            class="se-headermenu--profile"
            @mouseover="mouseEventDropdown(true)"
            @mouseleave="mouseEventDropdown(false)"
          >
            <SEAvatar
              shape="square"
              :size="44"
              :src="profile.avatar"
            />
            <div
              v-if="showSubProfile"
              class="submenu-list right"
            >
              <ul>
                <li
                  v-for="(subMenu, idx) in profile.subMenus"
                  :key="idx"
                  class="submenu-item"
                >
                  <a :href="subMenu.path">
                    {{ subMenu.label }}
                  </a>
                </li>
                <li
                  v-if="profile.logout"
                  class="submenu-item logout"
                >
                  <a @click="$emit('clickLogout')">
                    <i class="icon icon-exit" /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import SubMenu from './components/SubMenu'
import SEAvatar from '@/components/SEAvatar/index.vue'
import SEBadge from '@/components/SEBadge/index.vue'

export default {
  name: 'SEHeaderMenu',
  components: {
    SubMenu,
    SEAvatar,
    SEBadge
  },
  directives: {
    ClickOutside
  },
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
    notification: {
      type: Object,
      default: () => null
    },
    profile: {
      type: Object,
      default: () => null
    }
  },
  data() {
    return {
      showSubNotif: false,
      showSubProfile: false
    }
  },
  computed: {
    classes() {
      return {
        'se-headermenu': true,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    mouseEventDropdown(value) {
      this.showSubNotif = false

      if (!this.showSubProfile) {
        this.showSubProfile = true
      } else {
        this.showSubProfile = value
      }
    },
    onClick() {
      this.$emit('clickLogout')
    },
    hide() {
      this.showSubNotif = false
    }
  }
}
</script>
