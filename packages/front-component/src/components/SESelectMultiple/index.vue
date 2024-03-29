<template>
  <div
    :class="classes"
  >
    <a-select
      v-model="value"
      mode="multiple"
      style="width: 100%"
      :placeholder="showDropdown ? 'Search' : labelFormat"
      :dropdown-style="dropdownStyle"
      :dropdown-match-select-width="false"
      :default-value="selectedValues"
      :size="size"
      dropdown-class-name="se-select-multiple__list"
      show-arrow
      :allow-clear="allowClear"
      @change="handleChange"
      @search="search = $event"
      @dropdownVisibleChange="handleOpen"
    >
      <a-select-option
        v-for="(option) in options"
        :key="option.uuid"
        :value="option.name"
        class="se-select-multiple__item"
        @click="handleSelect(option)"
      >
        <SESpace align="center">
          <div class="box" />

          {{ option.name }}
        </SESpace>
      </a-select-option>
      <!-- Option for infinite scroll -->
      <a-select-option
        v-for="(infinite) in infiniteDatas"
        :key="infinite.uuid"
        :value="infinite.name"
        :default-value="selectedValues"
        class="se-select-multiple__item"
        @click="handleSelect(infinite)"
      >
        <SESpace align="center">
          <div class="box" />

          {{ infinite.name }}
        </SESpace>
      </a-select-option>
    </a-select>
  </div>
</template>

<script>
import { Select } from 'ant-design-vue'
import SESpace from '../SESpace'

export default {
  name: 'SESelectMultiple',
  components: {
    SESpace,
    'a-select': Select,
    'a-select-option': Select.Option
  },
  props: {
    className: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Label'
    },
    size: {
      type: String,
      default: 'default'
    },
    options: {
      type: Array,
      default: () => []
    },
    values: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: 'default'
    },
    allowClear: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value: this.getValues(),
      defaultValue: this.getValues(),
      showDropdown: false,
      search: '',
      selectedValues: this.getValues(),
      currentSelect: [],
      dropdownStyle: {
        width: 'auto'
      },
      infiniteDatas: [],
      currentBatch: 100
    }
  },
  computed: {
    classes() {
      return {
        'se-select-multiple': true,
        'se-select': true,
        'on-search': this.search !== '',
        [this.className]: this.className !== null
      }
    },
    labelFormat() {
      return `${this.label} ${this.selectedValues.length ? `(${this.selectedValues.length})` : ''}`
    }
  },
  watch: {
    values: {
      deep: true,
      handler(newVal) {
        if (newVal.length) {
          let currentSelect = []
          const filterListName = newVal.map(item => {
            let name = ''
            this.options.forEach(val => {
              if (val.uuid === item.uuid || val.uuid === item) {
                name = val.name
                currentSelect = [...currentSelect, val]
              }
            })
            return name
          })
          this.selectedValues = filterListName
          this.value = filterListName
        } else {
          this.selectedValues = newVal
          this.value = newVal
        }
      }
    },
    currentSelect: {
      deep: true,
      handler(newVal) {
        let latestSelect = []
        let filterListId = this.selectedValues.map(item => {
          let id = ''
          newVal.forEach(val => {
            if (val.name === item) {
              id = val.uuid
            }
          })
          this.options.forEach(val => {
            if (val.name === item && val.uuid !== id) {
              latestSelect = [...latestSelect, val.uuid]
            }
          })
          return id
        }).filter(item => item !== '')

        filterListId = [...filterListId, ...latestSelect]

        if (!filterListId.length && this.selectedValues.length) {
          filterListId = this.selectedValues.map(item => {
            let id = ''
            this.options.forEach(option => {
              if (option.name === item) {
                id = option.uuid
              }
            })
            return id
          }).filter(item => item !== '')
        }

        this.$emit('change', filterListId || [])
      }
    }
  },
  methods: {
    getValues() {
      if (!this.values.length) {
        return this.values || []
      }
      const filterListName = this.values.map(item => {
        let name = ''
        this.options.forEach(val => {
          if (val.uuid === item.uuid || val.uuid === item) {
            name = val.name
          }
        })
        return name
      })

      return filterListName || []
    },
    handleChange(value) {
      if (value.length > 0 && !value.includes('')) {
        this.selectedValues = value
      } else {
        this.clearList()
      }
    },
    hide() {
      this.showDropdown = false
    },
    clearList() {
      this.selectedValues = []
      this.value = []
      this.$emit('change', [])
    },
    handleOpen(open) {
      this.showDropdown = open
    },
    handleSelect(value) {
      if (value) {
        this.currentSelect = [...this.currentSelect, value]
        // this.selectedValues = value
      }
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
