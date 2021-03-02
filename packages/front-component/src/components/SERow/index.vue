<template>
  <Row
    :id="id"
    :class="classes"
    :align="align"
    :justify="justify"
    :type="type"
  >
    <slot />
  </Row>
</template>

<script>
import { Row } from 'ant-design-vue'

export default {
  name: 'SERow',
  components: {
    Row
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
    align: {
      type: String,
      default: 'top',
      validator: function (value) {
        return ['top', 'middle', 'bottom'].indexOf(value) !== -1
      }
    },
    justify: {
      type: String,
      default: 'start',
      validator: function (value) {
        return ['start', 'end', 'center', 'space-around', 'space-between'].indexOf(value) !== -1
      }
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['flex'].indexOf(value) !== -1
      }
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
