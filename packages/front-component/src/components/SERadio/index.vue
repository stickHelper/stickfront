<template>
  <div :class="['se-radio', className]">
    <div class="se-radio--item">
      <input
        :id="id"
        type="radio"
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
  name: 'SERadio',
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
  }
}
</script>
