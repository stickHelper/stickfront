<template>
  <div
    :id="id"
    :class="classes"
  >
    <Tag
      :visible="visible"
      :closable="closable"
      @close="log"
    >
      <slot />
    </Tag>
  </div>
</template>

<script>
import { Tag } from 'ant-design-vue'

export default {
  name: 'SETag',
  components: {
    Tag
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
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return ['primary', 'secondary', 'accent', 'normal', 'dark', 'turquoise', 'red', 'error', 'salmon', 'green', 'light-blue', 'blue', 'line'].indexOf(value) !== -1
      }
    },
    closable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: true
    },
    shape: {
      type: String,
      default: 'square',
      validator: function (value) {
        return ['round', 'square'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'large'].indexOf(value) !== -1
      }
    },
    fullColor: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'se-tag': true,
        [`se-tag__${this.color}`]: this.color !== null,
        [`se-tag__${this.shape}`]: this.shape !== null,
        [`se-tag__${this.size}`]: this.size !== null,
        'se-tag__full-color': this.fullColor,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    log() {
      this.$emit('close')
    }
  }
}
</script>
