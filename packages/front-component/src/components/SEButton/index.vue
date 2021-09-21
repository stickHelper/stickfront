<template>
  <div
    :id="id"
    :class="classes"
  >
    <AntButton
      :size="size"
      :shape="shape"
      :icon="icon"
      :loading="loading"
      :block="block"
      :html-type="htmlType"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <slot />
    </AntButton>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

export default {
  name: 'SEButton',
  components: {
    AntButton: Button
  },
  props: {
    id: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'accent',
      validator: function (value) {
        return ['primary', 'secondary', 'accent', 'normal', 'dark', 'line', 'error', 'red', 'salmon', 'turquoise', 'blue', 'light-blue'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small', 'large'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['outline'].indexOf(value) !== -1
      }
    },
    shape: {
      type: String,
      default: null,
      validator: function (value) {
        return ['circle', 'round'].indexOf(value) !== -1
      }
    },
    className: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    block: {
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
    },
    htmlType: {
      type: String,
      default: 'button'
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

<style lang="scss">
@import '@bit/stickcomponent.stickfront.styles-global/src/styles/base/_variable.scss';
.se-btn {
  padding: $gutter-xxl;
}
</style>
