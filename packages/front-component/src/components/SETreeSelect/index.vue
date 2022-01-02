<template>
  <treeselect
    :id="id"
    v-model="value"
    :class="classes"
    :name="name"
    :multiple="multiple"
    :options="options"
    :placeholder="placeholder"
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
    @open="handleOpen"
    @close="handleClose"
    @input="handleInput"
    @select="handleSelect"
    @deselect="handleDeselect"
    @search-change="handleSearchChange"
  />
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
    }
  },
  data() {
    return {
      value: null
    }
  },
  computed: {
    classes() {
      return {
        'se-tree-select': true,
        [this.className]: this.className !== null,
        [`se-tree-select__${this.size}`]: this.size !== null
      }
    }
  },
  watch: {
    value: {
      deep: true,
      handler(newVal) {
        this.$emit('change', newVal)
      }
    }
  },
  methods: {
    handleOpen(instanceId) {
      this.$emit('open', { instanceId })
    },
    handleClose(value, instanceId) {
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
      this.$emit('deselect', { searchQuery, instanceId })
    }
  }
}
</script>

<style>

</style>
