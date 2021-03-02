<template>
  <!-- eslint-disable vue/html-self-closing -->
  <Col
    :id="id"
    :class="classes"
    :flex="flex"
    :offset="offset"
    :oreder="oreder"
    :pull="pull"
    :push="push"
    :span="span"
    :xs="xs"
    :sm="sm"
    :md="md"
    :lg="sm"
    :xl="sm"
    :xxl="xxl"
  >
  <!-- eslint-disable-next-line vue/valid-template-root vue/no-multiple-template-root -->
  <slot />
  <!-- eslint-disable-next-line vue/no-parsing-error -->
  </Col>
</template>

<script>
import { Col } from 'ant-design-vue'

export default {
  name: 'SECol',
  components: {
    Col
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
    flex: {
      type: [String, Number],
      default: null
    },
    offset: {
      type: Number,
      default: 0
    },
    oreder: {
      type: Number,
      default: 0
    },
    pull: {
      type: Number,
      default: 0
    },
    push: {
      type: Number,
      default: 0
    },
    span: {
      type: Number,
      default: null
    },
    xs: {
      type: [Number, Object],
      default: null
    },
    sm: {
      type: [Number, Object],
      default: null
    },
    md: {
      type: [Number, Object],
      default: null
    },
    lg: {
      type: [Number, Object],
      default: null
    },
    xl: {
      type: [Number, Object],
      default: null
    },
    xxl: {
      type: [Number, Object],
      default: null
    }
  },
  computed: {
    classes() {
      return {
        [`${this.className}`]: this.className !== null
      }
    }
  }
}
</script>
