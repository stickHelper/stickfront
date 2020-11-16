<template>
  <div
    :id="id"
    :class="classes"
  >
    <div
      v-click-outside="hideModal"
      :class="contentClass"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SEModal',
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
    showModal: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'medium',
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      show: this.showModal
    }
  },
  computed: {
    classes() {
      return {
        'se-modal': true,
        [this.className]: this.className !== null,
        show: this.show
      }
    },
    contentClass() {
      return {
        'se-modal--content': true,
        [`se-modal--content-${this.size}`]: true
      }
    }
  },
  methods: {
    hideModal() {
      this.show = false
    }
  }
}
</script>
