<template>
  <div
    :id="id"
    :class="classes"
  >
    <template v-if="!clickable">
      <ASteps
        :direction="direction"
        :size="size"
        :current="currentMenu"
      >
        <AStep
          v-for="(item, index) in items"
          :key="`steps-${index}`"
          :title="item.label"
          :description="item.description"
        />
      </ASteps>
    </template>
    <template v-else>
      <ASteps
        :direction="direction"
        :size="size"
        :current="currentMenu"
        @change="onChange"
      >
        <AStep
          v-for="(item, index) in items"
          :key="`steps-${index}`"
          :title="item.label"
          :description="item.description"
        />
      </ASteps>
    </template>
  </div>
</template>
<script>
import { Steps } from 'ant-design-vue'

export default {
  name: 'SESteps',
  components: {
    ASteps: Steps,
    AStep: Steps.Step
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
    direction: {
      type: String,
      default: 'horizontal'
    },
    size: {
      type: String,
      default: 'default'
    },
    current: {
      type: Number,
      default: 0
    },
    clickable: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentMenu: 0
    }
  },
  computed: {
    classes() {
      return {
        'se-steps': true,
        [this.className]: this.className !== null
      }
    }
  },
  mounted() {
    this.currentMenu = this.current
  },
  methods: {
    onChange(val) {
      this.currentMenu = val
      this.$emit('triggerIndex', val)
    }
  }
}
</script>
