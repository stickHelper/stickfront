<template>
  <SESpace direction="vertical">
    <SEDatepicker :default-value="moment('2015-06-06', dateFormat)" disabled />

    <SEMonthPicker :default-value="moment('2015-06', 'YYYY-MM')" disabled />

    <SERangePicker
      :default-value="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]"
      disabled
    />
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'
import moment from 'moment'

export default {
  name: 'Disabled',
  components: {
    SEDatepicker: DatePicker,
    SERangePicker: DatePicker.RangePicker,
    SEMonthPicker: DatePicker.MonthPicker,
    SESpace
  },
  data() {
    this.dateFormat = 'YYYY-MM-DD'
    return {}
  },
  methods: {
    moment
  }
}
</script>
