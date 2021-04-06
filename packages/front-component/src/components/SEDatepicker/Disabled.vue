<template>
  <SESpace direction="vertical">
    <ADatePicker :default-value="moment('2015-06-06', dateFormat)" disabled />

    <AMonthPicker :default-value="moment('2015-06', 'YYYY-MM')" disabled />

    <ARangePicker
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
    ADatePicker: DatePicker,
    ARangePicker: DatePicker.RangePicker,
    AMonthPicker: DatePicker.MonthPicker,
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
