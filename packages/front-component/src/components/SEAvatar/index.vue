<template>
  <div
    :id="id"
    :class="classes"
    @click="$emit('click')"
  >
    <a-avatar
      :size="size"
      :icon="icon"
      :shape="shape"
      :src="src"
      :src-set="srcSet"
      :alt="alt"
      :style="styleCustom"
    >
      <slot />
    </a-avatar>
  </div>
</template>

<script>
import { Avatar } from 'ant-design-vue'

export default {
  name: 'SEAvatar',
  components: {
    'a-avatar': Avatar
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
    icon: {
      type: String,
      default: null
    },
    shape: {
      type: String,
      default: 'circle',
      validator: function (value) {
        return ['circle', 'square'].indexOf(value) !== -1
      }
    },
    size: {
      type: [String, Number],
      default: 'default',
      validator: val => {
        return typeof val === 'number' || ['small', 'large', 'default'].includes(val)
      }
    },
    src: {
      type: String,
      default: null
    },
    srcSet: {
      type: String,
      default: null
    },
    alt: {
      type: String,
      default: null
    },
    styleCustom: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-avatar': true,
        [`se-avatar__${this.size}`]: this.size !== null,
        [`se-avatar__${this.shape}`]: this.shape !== null,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
