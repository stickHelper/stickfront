<template>
  <div
    :id="id"
    v-click-outside="hide"
    :class="classes"
  >
    <div
      class="se-dropdown__trigger"
      @click="triggerDropdown"
    >
      <slot />
    </div>

    <div
      class="se-dropdown__card"
      :class="position"
      :style="{ 'min-width': width, 'top': top }"
    >
      <ul
        v-if="show"
        class="se-dropdown__list"
      >
        <slot name="list" @click="hide" />
      </ul>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SEDropdown',
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
    label: {
      type: String,
      default: null
    },
    position: {
      type: String,
      default: 'right',
      validator: function (value) {
        return ['right', 'left'].indexOf(value) !== -1
      }
    },
    width: {
      type: String,
      default: 'auto'
    },
    top: {
      type: String,
      default: '32px'
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    classes() {
      return {
        'se-dropdown': true,
        [this.className]: this.className !== null
      }
    },
    currentValue() {
      let value = ''
      this.items.forEach(item => {
        if (item.key === this.value) {
          value = item.label
        }
      })
      return value
    }
  },
  methods: {
    triggerDropdown() {
      this.show = !this.show
      this.$emit('show', this.show)
    },
    handleValue(value) {
      this.$emit('change', value)
      this.hide()
    },
    hide() {
      this.show = false
    }
  }
}
</script>
