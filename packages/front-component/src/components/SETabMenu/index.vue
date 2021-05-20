<template>
  <div
    :id="id"
    :class="classes"
  >
    <ul class="se-tabmenu--list">
      <li
        v-for="(menu, index) in menus"
        :key="`tabmenu-${index}`"
        class="se-tabmenu--item"
        :class="activeIndex === index ? 'active' : null"
        @click="triggerMenu(index)"
      >
        <i v-if="menu.icon" :class="`icon icon-${menu.icon}`" />
        {{ menu.label }}
        <span v-if="menu.count">({{ menu.count }})</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SETabMenu',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    menus: {
      type: Array,
      default: () => [
        { label: 'Menu 1' },
        { label: 'Menu 2' }
      ]
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    },
    maxSlot: {
      type: Number,
      default: null
    },
    custom: {
      type: String,
      default: null
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  computed: {
    classes() {
      return {
        'se-tabmenu': true,
        [`se-tabmenu--${this.size}`]: this.size !== null,
        [`se-tabmenu--${this.custom}`]: this.custom !== null,
        [this.className]: this.className !== null
      }
    }
  },
  mounted() {
    this.defaultIndexMenu()
  },
  methods: {
    defaultIndexMenu() {
      this.activeIndex = this.defaultIndex
    },
    triggerMenu(index) {
      if (this.maxSlot) {
        if (index + 1 <= this.maxSlot) {
          this.activeIndex = index
          this.$emit('triggerIndex', index)
        }
      } else {
        this.activeIndex = index
        this.$emit('triggerIndex', index)
      }
    }
  }
}
</script>
