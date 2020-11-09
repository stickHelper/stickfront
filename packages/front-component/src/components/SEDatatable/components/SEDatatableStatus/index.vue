<template>
  <div class="se-datatable--status flex-center">
    <span v-if="type === 'info'">{{ statusData.label }}</span>
    <SESwitch
      v-else
      :id="`status-table-${index}`"
      :name="`status-table-${index}`"
      :checked="statusData.checked"
      size="small"
      @change="triggerStatus($event)"
    />
  </div>
</template>

<script>
import SESwitch from '../../../SESwitch'

export default {
  name: 'SEDatatableStatus',
  components: {
    SESwitch
  },
  props: {
    index: {
      type: [Number, String],
      default: null
    },
    statusData: {
      type: Object,
      default: () => null
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['info', 'swicth'].indexOf(value) !== -1
      }
    }
  },
  methods: {
    triggerStatus(value) {
      this.$emit('triggerStatus', value)
    }
  }
}
</script>
