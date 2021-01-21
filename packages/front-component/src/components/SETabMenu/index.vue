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
        {{ menu.label }}
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
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    triggerMenu(index) {
      if (this.maxSlot && index + 1 <= this.maxSlot) {
        this.activeIndex = index
        this.$emit('triggerIndex', index)
      } else {
        this.activeIndex = index
        this.$emit('triggerIndex', index)
      }
    }
  }
}
</script>
