<template>
  <SESpace direction="vertical">
    <SEDatePicker @change="onChange" />

    <SEMonthPicker placeholder="Select month" @change="onChange" />

    <SERangePicker @change="onChange" />

    <SEWeekPicker placeholder="Select week" @change="onChange" />
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'

export default {
  name: 'BasicExample',
  components: {
    SEDatePicker: DatePicker,
    SEMonthPicker: DatePicker.MonthPicker,
    SERangePicker: DatePicker.RangePicker,
    SEWeekPicker: DatePicker.WeekPicker,
    SESpace
  },
  methods: {
    onChange(date, dateString) {
      // console.log(date, dateString)
    }
  }
}
</script>
