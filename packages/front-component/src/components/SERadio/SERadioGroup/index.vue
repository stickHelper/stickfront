<template>
  <div :id="id" :class="classes">
    <div
      v-if="labelName && labelName !== ''"
      class="label-name"
    >
      {{ labelName }}
      <span v-if="isRequired" class="asterisk">*</span>
    </div>

    <RadioGroup
      v-model="currentValue"
      :default-value="defaultValue"
      :disabled="disabled"
      :size="size"
      @change="onChange"
    >
      <slot />
    </RadioGroup>

    <div v-if="helper || info" class="mt-xs-2">
      <div class="se-radio__group-helper">
        {{ helper }}
      </div>
      <div class="se-radio__group-info">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import { Radio } from 'ant-design-vue'

// Vue.use(Radio)

export default {
  name: 'SERadioGroup',
  components: {
    RadioGroup: Radio.Group
  },
  model: {
    prop: 'value',
    event: 'changeValue'
  },
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    labelName: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: [String, Number, Boolean],
      default: null
    },
    disabled: {
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
    value: {
      type: [String, Number],
      default: null
    },
    buttonStyle: {
      type: String,
      default: 'outline',
      validator: function (value) {
        return ['outline', 'solid'].indexOf(value) !== -1
      }
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
      currentValue: this.defaultValue || this.value
    }
  },
  computed: {
    classes() {
      return {
        'se-radio__group': true,
        [this.className]: this.className !== null,
        [`se-radio__group-${this.size}`]: this.size !== null,
        disabled: this.disabled,
        error: this.isError,
        success: this.isSuccess
      }
    }
  },
  methods: {
    onChange(e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
