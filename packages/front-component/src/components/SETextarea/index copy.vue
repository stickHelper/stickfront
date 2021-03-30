<template>
  <div :class="['se-textarea', className, isError ? 'error' : null]">
    <label
      v-if="labelName && labelName !== ''"
      :for="inputName"
    >
      {{ labelName }}
    </label>
    <textarea
      :id="inputName"
      :class="isError ? 'error' : null"
      :placeholder="placeholder"
      :value="valueInput"
      :rows="rows"
      :style="icon && icon !== '' ? 'padding-right: 35px' : null"
      @input="$emit('input', $event.target.value)"
    />
    <i
      v-if="icon && icon !== ''"
      :class="['icon', icon]"
    />
    <div class="se-textarea--info">
      {{ info }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SETextarea',
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
      type: String,
      default: null
    },
    rows: {
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
  }
}
</script>
