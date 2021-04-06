<template>
  <SESpace direction="vertical">
    <ADatePicker>
      <template slot="dateRender" slot-scope="current, today">
        <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
          {{ current.date() }}
        </div>
      </template>
    </ADatePicker>

    <ARangePicker>
      <template slot="dateRender" slot-scope="current">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </ARangePicker>

    <AWeekPicker>
      <template slot="dateRender" slot-scope="current">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </AWeekPicker>
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'

export default {
  name: 'CustomDateRendering',
  components: {
    ADatePicker: DatePicker,
    ARangePicker: DatePicker.RangePicker,
    AWeekPicker: DatePicker.WeekPicker,
    SESpace
  },
  methods: {
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    }
  }
}
</script>
