<template>
  <SESpace direction="vertical">
    <ADatePicker :default-value="moment('2015/01/01', dateFormat)" :format="dateFormat" />

    <ADatePicker
      :default-value="moment('01/01/2015', dateFormatList[0])"
      :format="dateFormatList"
    />

    <AMonthPicker :default-value="moment('2015/01', monthFormat)" :format="monthFormat" />

    <ARangePicker
      :default-value="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
      :format="dateFormat"
    />
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'
import moment from 'moment'

export default {
  name: 'DateFormat',
  components: {
    ADatePicker: DatePicker,
    ARangePicker: DatePicker.RangePicker,
    AMonthPicker: DatePicker.MonthPicker,
    SESpace
  },
  data() {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY']
    }
  },
  methods: {
    moment
  }
}
</script>
