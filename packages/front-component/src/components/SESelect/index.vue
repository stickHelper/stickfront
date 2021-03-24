<template>
  <div
    :id="id"
    :class="classes"
  >
    <div
      v-if="labelName && labelName !== ''"
      class="label-name"
    >
      {{ labelName }}
      <span v-if="isRequired" class="asterisk">*</span>
    </div>

    <a-select
      style="width: 100%"
      :placeholder="placeholder"
      :allow-clear="allowClear"
      :auto-clear-search-value="autoClearSearchValue"
      :auto-focus="autoFocus"
      :default-active-first-option="defaultActiveFirstOption"
      :default-value="defaultValue"
      :disabled="disabled"
      :size="size"
      :mode="mode"
      :default-open="defaultOpen"
      :open="open"
      :loading="loading"
      @change="handleChange"
    >
      <slot />
    </a-select>

    <div v-if="helper || info" class="mt-xs-2">
      <div class="se-select__helper">
        {{ helper }}
      </div>
      <div class="se-select__info">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>
import { Select } from 'ant-design-vue'

export default {
  name: 'SESelect',
  components: {
    'a-select': Select
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
    labelName: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: [String, Number],
      default: null
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    autoClearSearchValue: {
      type: Boolean,
      default: true
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    defaultValue: {
      type: [String, Number, Array],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['large', 'small', 'default'].indexOf(value) !== -1
      }
    },
    mode: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['multiple', 'tags', 'default'].indexOf(value) !== -1
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultOpen: {
      type: Boolean,
      default: null
    },
    open: {
      type: Boolean,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    helper: {
      type: String,
      default: null
    },
    info: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  computed: {
    classes() {
      return {
        'se-select': true,
        [this.className]: this.className !== null,
        disabled: this.disabled,
        error: this.isError,
        success: this.isSuccess
      }
    }
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e)
    }
  }
}
</script>
