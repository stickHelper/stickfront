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
    <ADatePicker :size="size" />

    <AMonthPicker :size="size" placeholder="Select Month" />

    <ARangePicker :size="size" />

    <AWeekPicker :size="size" placeholder="Select Week" />
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
    ADatePicker: DatePicker,
    AMonthPicker: DatePicker.MonthPicker,
    ARangePicker: DatePicker.RangePicker,
    AWeekPicker: DatePicker.WeekPicker,
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
