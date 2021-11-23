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
      v-model="currentValue"
      style="width: 100%"
      :show-search="showSearch"
      :show-arrow="showArrow"
      :label-in-value="labelInValue"
      :placeholder="placeholder"
      :filter-option="false"
      :not-found-content="isFetching ? undefined : null"
      :allow-clear="allowClear"
      :auto-clear-search-value="autoClearSearchValue"
      :auto-focus="autoFocus"
      :default-active-first-option="defaultActiveFirstOption"
      :default-value="currentDefalutValue"
      :disabled="disabled"
      :size="size"
      :mode="mode"
      :loading="loading"
      @search="handleSearch"
      @change="handleChange"
      @select="handleSelect"
    >
      <a-spin
        v-if="isFetching"
        slot="notFoundContent"
        size="small"
      />
      <a-select-option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </a-select-option>
    </a-select>
    <span v-if="mode === 'multiple' && currentDefalutValue && currentDefalutValue.length && count" class="count-list">
      {{ currentDefalutValue.length }} {{ count }}
    </span>

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
/* eslint-disable no-undefined */
import { Select, Spin } from 'ant-design-vue'

export default {
  name: 'SESelect',
  components: {
    'a-select': Select,
    'a-select-option': Select.Option,
    'a-spin': Spin
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
      default: undefined
    },
    value: {
      type: [String, Number, Array],
      default: undefined
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
    showSearch: {
      type: Boolean,
      default: false
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    labelInValue: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Number, Array],
      default: undefined
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
    },
    count: {
      type: String,
      default: null
    },
    filterOption: {
      type: Boolean,
      default: true
    },
    isFetching: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentValue: this.defaultValue || this.value,
      currentDefalutValue: this.defaultValue || this.value
    }
  },
  computed: {
    classes() {
      return {
        'se-select': true,
        [this.className]: this.className !== null,
        [`se-select__${this.size}`]: this.size !== null,
        'show-list': this.mode === 'multiple' && this.currentDefalutValue && this.currentDefalutValue.length && !this.count,
        'count-multiple': this.mode === 'multiple' && this.count,
        disabled: this.disabled,
        error: this.isError,
        success: this.isSuccess
      }
    },
    getMultipleDefaultValue() {
      return [...this.currentValue, ...this.currentDefalutValue]
    }
  },
  watch: {
    currentDefalutValue(newVal) {
      this.$emit('change', newVal)
    }
  },
  methods: {
    handleChange(value) {
      if (this.mode !== 'multiple') {
        this.currentDefalutValue = value
      } else {
        console.log('object', value)
        const newVal = []
        value.forEach(item => {
          if (item) {
            newVal.push(item)
          }
        })
        this.currentDefalutValue = newVal
      }
    },
    handleSearch(value) {
      this.$emit('search', value)
    },
    removeData(index) {
      this.currentDefalutValue.splice(index, 1)
    },
    getLabelCurrentValue(value) {
      console.log('option', this.option)
      const data = this.option || this.value || []
      const isString = typeof value === 'string'
      const label = []

      data.forEach(option => {
        if (option.value === value || option.key === value.key) {
          label.push(isString ? value : option.label)
        }
      })

      console.log({ value, data, label })
      return label.join()
    },
    handleSelect(value) {
      this.$emit('select', value)
    }
  }
}
</script>
