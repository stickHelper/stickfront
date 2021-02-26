<template>
  <button
    :id="id"
    type="button"
    :class="classes"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'SEButton',
  props: {
    id: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'accent',
      validator: function (value) {
        return ['primary', 'secondary', 'accent', 'normal', 'dark', 'line', 'error', 'salmon', 'turquoise', 'blue', 'light-blue'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['extra-small', 'small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['icon', 'outline', 'text'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: null
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isDimmed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'se-btn': true,
        [`se-btn--${this.color}`]: true,
        [`se-btn--${this.size}`]: true,
        [`se-btn--${this.type}`]: this.type !== null,
        'se-btn--dimmed': this.isDimmed,
        [this.className]: this.className !== null,
        'full-width': this.fullWidth,
        disabled: this.disabled
      }
    }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
