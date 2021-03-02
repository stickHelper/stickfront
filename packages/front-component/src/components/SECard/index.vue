<template>
  <Card
    :id="id"
    :class="classes"
    :active-tab-key="activeTabKey"
    :default-active-tab-key="defaultActiveTabKey"
    :hoverable="hoverable"
    :loading="loading"
    :size="size"
    :title="title"
    :extra="extra"
  >
    <slot />
    <template #actions>
      <slot name="actions" />
    </template>
    <template #cover>
      <slot name="cover" />
    </template>
    <slot name="title" />
  </Card>
</template>

<script>
import { Card } from 'ant-design-vue'

export default {
  name: 'SECard',
  components: {
    Card
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
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['depth-1', 'depth-2', 'depth-3'].indexOf(value) !== -1
      }
    },
    activeTabKey: {
      type: String,
      default: null
    },
    defaultActiveTabKey: {
      type: String,
      default: null
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['default', 'small'].indexOf(value) !== -1
      }
    },
    title: {
      type: String,
      default: null
    },
    extra: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-card': true,
        [this.className]: this.className !== null,
        [this.type]: this.type !== null
      }
    }
  }
}
</script>
