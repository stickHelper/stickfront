<template>
  <SESpace direction="vertical">
    <SERadioGroup default-value="default" @change="handleSize">
      <SERadioButton value="large">
        Large
      </SERadioButton>
      <SERadioButton value="default">
        Default
      </SERadioButton>
      <SERadioButton value="small">
        Small
      </SERadioButton>
    </SERadioGroup>
    <br>
    <SEDatePicker :size="size" />

    <SEMonthPicker :size="size" placeholder="Select Month" />

    <SERangePicker :size="size" />

    <SEWeekPicker :size="size" placeholder="Select Week" />
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'
import SERadioButton from '@/components/SERadio/SERadioButton'
import SERadioGroup from '@/components/SERadio/SERadioGroup'

export default {
  name: 'BasicExample',
  components: {
    SEDatePicker: DatePicker,
    SEMonthPicker: DatePicker.MonthPicker,
    SERangePicker: DatePicker.RangePicker,
    SEWeekPicker: DatePicker.WeekPicker,
    SESpace,
    SERadioButton,
    SERadioGroup
  },
  data() {
    return {
      size: 'default'
    }
  },
  methods: {
    handleSize(value) {
      this.size = value
    }
  }
}
</script>
