<template>
  <div
    :id="id"
    :class="classes"
  >
    <span
      v-if="isTick"
      class="tick"
    />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SEBadge',
  props: {
    id: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return ['primary', 'secondary', 'accent', 'normal', 'dark', 'turquoise', 'red', 'error', 'salmon', 'green', 'light-blue', 'blue'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['bald', 'buttton', 'tick', 'outline', 'rounded'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: null
    },
    isTick: {
      type: Boolean,
      default: false
    },
    fullColor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'se-badge': true,
        [`se-badge--${this.color}`]: this.color !== null,
        [`se-badge--${this.type}`]: this.type !== null,
        'se-badge--full-color': this.fullColor,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
