<template>
  <div :class="classes">
    <div
      class="se-checkbox__item"
      :class="isDisabled ? 'disabled' : null"
    >
      <input
        :id="id"
        type="checkbox"
        :name="name"
        :value="value"
        :disabled="isDisabled"
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
      default: null
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    },
    color: {
      type: String,
      default: null,
      validator: function (value) {
        return ['primary', 'secondary'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-checkbox': true,
        [`se-checkbox__${this.size}`]: this.size !== null,
        [`se-checkbox__${this.color}`]: this.color !== null,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
