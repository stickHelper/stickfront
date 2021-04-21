<template>
  <div class="se-formbuilderitem">
    <component
      :is="componentName"
      ref="component"
      v-model="componentValue"
      v-bind="customComponentParameters"
      :value-input="valueInput"
      :class-name="className"
    />
  </div>
</template>

<script>

export default {
  name: 'SEFormBuilderItem',
  props: {
    customComponentName: {
      type: String,
      required:true
    },
    customComponentParameters: {
      type: Object,
      default: () => null
    },
    defaultValue: {
      type: [String, Number, Array, Object, Boolean],
      default: () => null
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      valueInput: {},
      componentName: '',
      componentValue: {}
    }
  },
  mounted() {
    this.valueInput = this.defaultValue
    this.setComponentName(this.customComponentName)
    this.setComponentParameters(this.customComponentParameters)
  },
  methods: {
    setComponentName(name) {
      this.componentName = name
    },
    setComponentParameters(parameters) {
      this.customComponentParameters = parameters
    },
    validate() {
      if (typeof this.$refs.component.validate === 'function') {
        return this.$refs.component.validate()
      }
      return true
    },
    reset() {
      if (typeof this.$refs.component.reset === 'function') {
        return this.$refs.component.reset()
      }
    },
    getValue() {
      return this.reparseJson(this.componentValue)
    },
    reparseJson(json) {
      return JSON.parse(JSON.stringify(json))
    }
  }
}
</script>
