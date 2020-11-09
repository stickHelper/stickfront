<template>
  <div :class="classes">
    <select
      v-model="selectedValue"
      class="se-comboBox__select"
      style="display: none;"
    >
      <option value="">
        ---
      </option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
      >
        {{ option }}
      </option>
    </select>
    <div
      class="se-comboBox__header"
      :class="{ 'se-comboBox__header--active' : selectedValue }"
    >
      <span
        v-if="selectedValue"
        class="se-comboBox__header-text se-comboBox__header-text--active"
      >{{ getSelectedOption() }}</span>
      <span
        v-else
        class="se-comboBox__header-text"
      >{{ defaultText }}</span>
      <span class="se-comboBox__header-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        ><defs /><path
          fill="#B4BCD0"
          d="M9.2.6A.8.8 0 008 .6l-3 3-3-3A.8.8 0 101 1.8l3.5 3.6a.8.8 0 001.2 0l3.6-3.6a.8.8 0 000-1.2z"
        /></svg>
      </span>
    </div>
    <div class="se-comboBox__body">
      <div
        v-for="(option, index) in options"
        class="se-comboBox__item"
        @click="getOption(option)"
      >
        {{ option }}
      </div>
      <div
        v-if="getOptionsLength === 0"
        class="se-comboBox__item"
      >
        List not defined
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SEComboBox',
  props: {
    className: {
      type: String,
      default: null
    },
    defaultText: {
      type: String,
      default: 'All Status'
    },
    options: {
      type: Array,
      default() {
		          return []
		        }
    }
  },
  data() {
    return {
      selectedValue: ''
    }
  },
  computed: {
    classes() {
      return {
        'se-comboBox':true,
        [this.className]: this.className !== null
      }
    },
    getOptionsLength() {
      return this.options.length
    }
  },
  methods: {
    getOption(option) {
      return this.selectedValue = option
    },
    getSelectedOption() {
      return this.selectedValue
    }
  }
}
</script>
