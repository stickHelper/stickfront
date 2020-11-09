<template>
  <div :class="classes">
    <div class="se-switch--item">
      <input
        :id="id"
        type="checkbox"
        :name="name"
        :value="value"
        :checked="checked"
        @change="$emit('change', $event.target.value)"
      >
      <label
        :for="id"
      >
        Switch
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SESwitch',
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
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-switch': true,
        [`se-switch--${this.size}`]: this.size !== null,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
