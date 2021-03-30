<template>
  <div :id="id" :class="classes">
    <div
      v-if="labelName && labelName !== ''"
      class="label-name"
    >
      {{ labelName }}
      <span v-if="isRequired" class="asterisk">*</span>
    </div>
    <template v-if="options.length">
      <CheckboxGroup
        v-model="currentValue"
        :default-value="defaultValue"
        :disabled="disabled"
        :size="size"
        :options="options"
        @change="onChange"
      />
    </template>
    <template v-else>
      <CheckboxGroup
        v-model="currentValue"
        :default-value="defaultValue"
        :disabled="disabled"
        :size="size"
        @change="onChange"
      >
        <slot />
      </CheckboxGroup>
    </template>

    <div v-if="helper || info" class="mt-xs-2">
      <div class="se-checkbox__group-helper">
        {{ helper }}
      </div>
      <div class="se-checkbox__group-info">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import { Checkbox } from 'ant-design-vue'

// Vue.use(checkbox)

export default {
  name: 'SECheckboxGroup',
  components: {
    CheckboxGroup: Checkbox.Group
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
      type: Array,
      default: () => []
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
      type: Array,
      default: () => []
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
        'se-checkbox__group': true,
        [this.className]: this.className !== null,
        [`se-checkbox__group-${this.size}`]: this.size !== null,
        disabled: this.disabled,
        error: this.isError,
        success: this.isSuccess
      }
    }
  },
  methods: {
    onChange(checkedValues) {
      this.$emit('change', checkedValues)
    }
  }
}
</script>
