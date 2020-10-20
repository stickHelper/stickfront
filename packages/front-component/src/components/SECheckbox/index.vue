<template>
  <div :class="classes">
    <div class="se-checkbox--item">
      <input
        :id="id"
        type="checkbox"
        :name="name"
        :value="value"
        :checked="checked"
        @change="$emit('change', $event.target.value)"
      >
      <label :for="id">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SECheckbox',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Some label'
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        'se-checkbox': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
