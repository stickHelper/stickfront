<template>
  <div
    :id="id"
    :class="classes"
    :style="styles"
  >
    <img
      :src="src"
      :alt="alt"
    >
  </div>
</template>

<script>
export default {
  name: 'SEImg',
  props: {
    id: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['square'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: null
    },
    src: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    width: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-img': true,
        [`se-img--${this.type}`]: this.type !== null,
        [this.className]: this.className !== null,
        'full-width': this.fullWidth,
        'full-height': this.fullHeight
      }
    },
    styles() {
      let styles = null
      if (this.height) {
        styles += `height: ${this.height};`
      }
      if (this.width) {
        styles += `width: ${this.width};`
      }
      return styles
    }
  }
}
</script>
