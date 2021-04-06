<template>
  <div
    :id="id"
    :class="classes"
  >
    <div v-if="labelName && labelName !== ''" class="label-name">
      {{ labelName }}
    </div>

    <div class="se-textarea__field">
      <a-textarea
        v-model="currentValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :default-value="defaultValue"
        :allow-clear="allowClear"
        :auto-size="autoSize"
        @change="onChange"
        @pressEnter="onChange"
      >
      <!--  -->
      </a-textarea>
    </div>

    <div v-if="helper || info" class="mt-xs-2">
      <div class="se-textarea__helper">
        {{ helper }}
      </div>
      <div class="se-textarea__info">
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>
import { Input } from 'ant-design-vue'

export default {
  name: 'SETextarea',
  components: {
    'a-textarea': Input.TextArea
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
    allowClear: {
      type: Boolean,
      default: false
    },
    autoSize: {
      type: [Boolean, Object],
      default: () => null
    },
    info: {
      type: String,
      default: null
    },
    helper: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      tags: [],
      showList: false,
      currentValue: this.value
    }
  },
  computed: {
    classes() {
      return {
        'se-textarea': true,
        [`se-textarea__${this.size}`]: this.size !== null,
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
