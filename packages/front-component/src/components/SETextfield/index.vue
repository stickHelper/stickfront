<template>
  <div :class="classes">
    <label
      v-if="labelName && labelName !== ''"
      :for="name"
    >
      {{ labelName }}
    </label>
    <input
      :id="name"
      type="text"
      :name="name"
      :maxlength="maxlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="valueInput"
      :style="icon && icon !== '' ? 'padding-right: 35px' : null"
      @input="$emit('input', $event.target.value)"
    >
    <i
      v-if="icon && icon !== ''"
      :class="['icon', icon]"
    />
    <div class="se-textfield--info">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SETextfield',
  props: {
    inputName: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'text'
    },
    labelName: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Placeholder'
    },
    icon: {
      type: String,
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    valueInput: {
      type: [String, Number],
      default: null
    },
    maxlength: {
      type: [String, Number],
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return {
        'se-textfield': true,
        [this.className]: this.className !== null,
        error: this.isError ? 'error' : null
      }
    },
    name() {
      return this.inputName !== null ? this.inputName : null
    },
    disabled() {
      return this.isDisabled
    }
  }
}
</script>
