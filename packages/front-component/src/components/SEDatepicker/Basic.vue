<template>
  <SESpace direction="vertical">
    <ADatePicker @change="onChange" />

    <AMonthPicker placeholder="Select month" @change="onChange" />

    <ARangePicker @change="onChange" />

    <AWeekPicker placeholder="Select week" @change="onChange" />
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'

export default {
  name: 'BasicExample',
  components: {
    ADatePicker: DatePicker,
    AMonthPicker: DatePicker.MonthPicker,
    ARangePicker: DatePicker.RangePicker,
    AWeekPicker: DatePicker.WeekPicker,
    SESpace
  },
  methods: {
    onChange(date, dateString) {
      // console.log(date, dateString)
    }
  }
}
</script>
