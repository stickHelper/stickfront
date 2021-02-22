<template>
  <div
    :id="id"
    v-click-outside="hide"
    :class="classes"
  >
    <label
      v-if="labelName && labelName !== ''"
      :for="inputName"
    >
      {{ labelName }}
    </label>

    <div
      :id="inputName"
      :class="isDisabled ? 'disabled' : null"
      class="se-combobox--field"
      @click="triggerDropdown()"
    >
      <div
        v-if="value && value !== ''"
        class="field-value"
      >
        {{ value }}
      </div>
      <div
        v-else-if="changeValue && changeValue !== ''"
        class="field-value"
      >
        {{ changeValue }}
      </div>
      <div
        v-else
        class="field-placeholder"
      >
        {{ placeholder }}
      </div>
      <i
        v-if="icon && icon !== ''"
        :class="['icon', icon]"
      />
    </div>
    <ul
      v-if="isDropdown && !isDisabled"
      class="se-combobox--list"
      :style="labelName && labelName !== '' ? 'top: 85px' : null"
    >
      <li
        v-if="isSearch"
        class="se-combobox--item search"
      >
        <div>
          <span><i class="icon icon-search" /></span>
          <input
            type="text"
            name="search-combobox"
            placeholder="Search here..."
            @input="$emit('input-search', $event.target.value)"
          >
        </div>
      </li>
      <li
        v-if="options.length === 0"
        class="se-combobox--item no-data"
        @click="hide"
      >
        <div>No data to choose</div>
      </li>
      <li
        v-for="(option, index) in options"
        v-else
        :key="index"
        class="se-combobox--item"
        @click="selectItem(option)"
      >
        <div>
          {{ option.name }}
        </div>
      </li>
    </ul>
    <div class="se-combobox--info">
      {{ info }}
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'SECombobox',
  directives: {
    ClickOutside
  },
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
    labelName: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: 'Choose option...'
    },
    isDisabled: {
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
    isSearch: {
      type: Boolean,
      default: false
    },
    value: {
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
    info: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isDropdown: false,
      changeValue: '',
      icon: 'icon-chevron-down'
    }
  },
  computed: {
    classes() {
      return {
        'se-combobox': true,
        [`se-combobox--${this.size}`]: this.size !== null,
        [this.className]: this.className !== null,
        disabled: this.isDisabled,
        error: this.isError,
        success: this.isSuccess
      }
    }
  },
  methods: {
    triggerDropdown() {
      this.isDropdown = !this.isDropdown

      if (this.isDropdown && !this.isDisabled) {
        this.icon = 'icon-chevron-up'
      } else {
        this.icon = 'icon-chevron-down'
      }
    },
    selectItem(value) {
      this.changeValue = value.name
      this.$emit('change', value)
      this.hide()
    },
    hide() {
      this.isDropdown = false
      this.icon = 'icon-chevron-down'
    }
  }
}
</script>
