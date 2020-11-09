<template>
  <div
    :id="id"
    :class="classes"
  >
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
    <i
      v-if="isError || isSuccess ||isDisabled"
      :class="[
        'icon',
        isError ? 'icon-close' : null,
        isSuccess ? 'icon-check' : null,
        isDisabled ? 'icon-block' : null
      ]"
      :style="styles"
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
    id: {
      type: String,
      default: null
    },
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
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
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
    isSuccess: {
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
        [`se-textfield--${this.size}`]: this.size !== null,
        [this.className]: this.className !== null,
        disabled: this.isDisabled,
        error: this.isError,
        success: this.isSuccess
      }
    },
    name() {
      return this.inputName !== null ? this.inputName : null
    },
    disabled() {
      return this.isDisabled
    },
    styles() {
      let styles = null
      if (this.info && this.info !== '' && this.labelName && this.labelName !== '') {
        styles = 'top: 47%;'
      } else if (this.labelName && this.labelName !== '') {
        styles = 'top: 60%;'
      }
      return styles
    }
  }
}
</script>
