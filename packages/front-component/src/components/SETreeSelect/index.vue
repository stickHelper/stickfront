<template>
  <div :id="id" :class="classes">
    <div v-if="type === 'count' && multiple && !isOpen" class="counter">
      {{ getTextCunter }}
    </div>
    <treeselect
      :id="id"
      v-model="value"
      :name="name"
      :multiple="multiple"
      :options="options"
      :placeholder="type === 'count' && !isOpen ? '' : placeholder"
      :clearable="clearable"
      :searchable="searchable"
      :disabled="disabled"
      :open-on-click="openOnClick"
      :open-on-focus="openOnFocus"
      :clear-on-select="clearOnSelect"
      :close-on-select="closeOnSelect"
      :always-open="alwaysOpen"
      :append-to-body="appendToBody"
      :limit="limit"
      :limit-text="limitText"
      :loading-text="loadingText"
      :max-height="maxHeight"
      :load-options="loadOptions"
      :async="async"
      :search-prompt-text="searchPromptText"
      :show-count="showCount"
      :show-count-of="showCountOf"
      :value-consists-of="valueConsistsOf"
      :search-neste="searchNested"
      @open="handleOpen"
      @close="handleClose"
      @input="handleInput"
      @select="handleSelect"
      @deselect="handleDeselect"
      @search-change="handleSearchChange"
    />
  </div>
</template>

<script>
/* eslint-disable no-undefined */
import Treeselect from '@riophae/vue-treeselect'
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  name: 'SETreeSelect',
  components: {
    treeselect: Treeselect
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
    name: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['count'].indexOf(value) !== -1
      }
    },
    size: {
      type: String,
      default: 'default',
      validator: function (value) {
        return ['large', 'small', 'default'].indexOf(value) !== -1
      }
    },
    options: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: undefined
    },
    values: {
      type: [String, Number, Array],
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    searchable: {
      type: Boolean,
      default: true
    },
    openOnClick: {
      type: Boolean,
      default: true
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    clearOnSelect: {
      type: Boolean,
      default: false
    },
    closeOnSelect: {
      type: Boolean,
      default: true
    },
    alwaysOpen: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    limit: {
      type: Number,
      default: Infinity
    },
    maxHeight: {
      type: Number,
      default: 300
    },
    loadingText: {
      type: String,
      default: 'Loading...'
    },
    limitText: {
      type: Function,
      default: (count) => `and ${count} more`
    },
    loadOptions: {
      type: Function,
      default: undefined
    },
    async: {
      type: Boolean,
      default: false
    },
    searchPromptText: {
      type: String,
      default: 'Type to search...'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    searchNested: {
      type: Boolean,
      default: false
    },
    showCountOf: {
      type: String,
      default: 'ALL_CHILDREN',
      validator: function (value) {
        return ['ALL_CHILDREN', 'ALL_DESCENDANTS', 'LEAF_CHILDREN', 'LEAF_DESCENDANTS'].indexOf(value) !== -1
      }
    },
    sortValueBy: {
      type: String,
      default: 'ORDER_SELECTED',
      validator: function (value) {
        return ['ORDER_SELECTED', 'LEVEL', 'INDEX'].indexOf(value) !== -1
      }
    },
    valueConsistsOf: {
      type: String,
      default: 'BRANCH_PRIORITY',
      validator: function (value) {
        return ['ALL', 'BRANCH_PRIORITY', 'LEAF_PRIORITY', 'ALL_WITH_INDETERMINATE'].indexOf(value) !== -1
      }
    },
    zIndex: {
      type: [Number, String],
      default: 999
    },
    textCounter: {
      type: Function,
      default: (count) => `${count} count selected`
    }
  },
  data() {
    return {
      value: this.values || [],
      isOpen: false
    }
  },
  computed: {
    classes() {
      return {
        'se-tree-select': true,
        [this.className]: this.className !== null,
        [`se-tree-select__${this.size}`]: this.size !== null,
        [`se-tree-select__${this.type}`]: this.type !== null
      }
    },
    getTextCunter() {
      return this.textCounter(this.value && this.value.length ? this.value.length : 0)
    }
  },
  watch: {
    value: {
      deep: true,
      handler(newVal) {
        this.$emit('change', newVal)
      }
    },
    values: {
      immediate: true,
      deep: true,
      handler(newVal) {
        this.value = newVal
      }
    }
  },
  methods: {
    handleOpen(instanceId) {
      this.isOpen = true
      this.$emit('open', instanceId)
    },
    handleClose(value, instanceId) {
      this.isOpen = false
      this.$emit('close', { value, instanceId })
    },
    handleInput(value, instanceId) {
      this.$emit('input', { value, instanceId })
    },
    handleSelect(node, instanceId) {
      this.$emit('select', { node, instanceId })
    },
    handleDeselect(node, instanceId) {
      this.$emit('deselect', { node, instanceId })
    },
    handleSearchChange(searchQuery, instanceId) {
      this.$emit('search-change', { searchQuery, instanceId })
    }
  }
}
</script>

<style lang="scss">
@import './styles.scss';
</style>
