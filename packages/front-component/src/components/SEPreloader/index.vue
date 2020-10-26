<template>
  <div
    :id="id"
    class="se-preload"
  >
    <span :class="classes" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SEPreloader',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return ['orange'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-preloader': true,
        [`se-preloader--${this.color}`]: this.color !== null,
        [`se-preloader--${this.size}`]: true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
