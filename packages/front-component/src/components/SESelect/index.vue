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
      show-arrow
      :placeholder="placeholder"
      :allow-clear="allowClear"
      :auto-clear-search-value="autoClearSearchValue"
      :auto-focus="autoFocus"
      :default-active-first-option="defaultActiveFirstOption"
      :default-value="currentDefalutValue"
      :disabled="disabled"
      :size="size"
      :mode="mode"
      :default-open="defaultOpen"
      :open="open"
      :loading="loading"
      @search="handleSearch"
      @change="handleChange"
    >
      <a-select-option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </a-select-option>
    </a-select>
    <ul v-if="mode === 'multiple' && currentDefalutValue && currentDefalutValue.length && !count" class="multiple-list">
      <template
        v-for="(item, index) in currentDefalutValue"
      >
        <li
          v-if="item"
          :key="index"
          class="ant-select-selection__choice"
        >
          <div class="ant-select-selection__choice__content">
            {{ getLabelCurrentValue(item) }}
          </div>
          <span class="ant-select-selection__choice__remove" @click="removeData(index)">
            <SEIcon type="close" />
          </span>
        </li>
      </template>
    </ul>
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
import SEIcon from '@/components/SEIcon'
import { Select } from 'ant-design-vue'

export default {
  name: 'SESelect',
  components: {
    'a-select': Select,
    'a-select-option': Select.Option,
    SEIcon
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
    value: {
      type: [String, Number, Array],
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
    },
    count: {
      type: String,
      default: null
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
      const label = []
      this.options.forEach(option => {
        if (option.value === value) {
          label.push(option.label)
        }
      })
      return label.join()
    }
  }
}
</script>
