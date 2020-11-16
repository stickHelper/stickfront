<template>
  <div class="se-datatable--edit">
    <SETextfield
      v-if="dataCell.type === 'textfield'"
      :name="dataCell.name"
      :placeholder="dataCell.placeholder"
      :size="dataCell.size"
      :value-input="dataCell.value"
      @input="changeValue($event)"
    />
    <SETextarea
      v-else-if="dataCell.type === 'textarea'"
      :name="dataCell.name"
      :placeholder="dataCell.placeholder"
      :size="dataCell.size"
      :value-input="dataCell.value"
      @input="changeValue($event)"
    />
    <div v-else-if="dataCell.type === 'info'">
      {{ dataCell.value }}
    </div>
  </div>
</template>

<script>
import SETextfield from '../../../SETextfield'
import SETextarea from '../../../SETextarea'

export default {
  name: 'SEDatatableEdit',
  components: {
    SETextfield,
    SETextarea
  },
  props: {
    dataCell: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    changeValue(value) {
      this.$emit('changeValue', value)
    }
  }
}
</script>
