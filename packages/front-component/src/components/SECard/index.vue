<template>
  <div
    :id="idElem"
    :class="classes"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SECard',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['depth-1', 'depth-2', 'depth-3'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-card': true,
        [this.className]: this.className !== null,
        [this.type]: this.type !== null
      }
    },
    idElem() {
      return this.id !== null ? `se-card-${this.id}` : null
    }
  }
}
</script>
