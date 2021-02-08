<template>
  <div
    :id="id"
    :class="classes"
    @click="$emit('click')"
  >
    <img
      v-if="type === 'img'"
      :src="content"
    >
    <span v-else-if="type === 'icon'">
      <i :class="`icon ${content}`" />
    </span>
    <span v-else>
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'SEAvatar',
  props: {
    id: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small', 'medium', 'large', 'extra-large'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['icon', 'img'].indexOf(value) !== -1
      }
    },
    content: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    square: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'se-avatar': true,
        [`se-avatar--${this.size}`]: this.size !== null,
        [`se-avatar--${this.type}`]: this.type !== null,
        'se-avatar--square': this.square,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
