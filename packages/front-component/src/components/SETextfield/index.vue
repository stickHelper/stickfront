<template>
  <div
    :id="id"
    :class="classes"
  >
    <label v-if="labelName && labelName !== ''">
      {{ labelName }}
    </label>

    <div class="se-textfield__field">
      <a-input
        :placeholder="placeholder"
        :size="size"
        :disabled="disabled"
        :addon-before="addonBefore"
        :addon-after="addonAfter"
        :default-value="defaultValue"
        @change="onChange"
        @pressEnter="onChange"
      >
        <template slot="prefix">
          <slot name="prefix" />
        </template>
        <template slot="suffix">
          <slot name="suffix" />
        </template>
        <template slot="addonBefore">
          <slot name="addonBefore" />
        </template>
        <template slot="addonAfter">
          <slot name="addonAfter" />
        </template>
      </a-input>
    </div>

    <div class="se-textfield__helper">
      {{ helper }}
    </div>
    <div class="se-textfield__info">
      {{ info }}
    </div>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'

export default {
  name: 'SETextfield',
  components: {
    'a-input': Input
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
      default: ''
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['small', 'large', 'default'].indexOf(value) !== -1
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: null
    },
    defaultValue: {
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
    },
    helper: {
      type: String,
      default: null
    },
    addonAfter: {
      type: String,
      default: null
    },
    addonBefore: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      tags: [],
      showList: false
    }
  },
  computed: {
    classes() {
      return {
        'se-textfield': true,
        [`se-textfield__${this.size}`]: this.size !== null,
        [this.className]: this.className !== null,
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
