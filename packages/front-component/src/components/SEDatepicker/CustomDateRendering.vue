<template>
  <SESpace direction="vertical">
    <SEDatepicker>
      <template slot="dateRender" slot-scope="current, today">
        <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
          {{ current.date() }}
        </div>
      </template>
    </SEDatepicker>

    <SERangePicker>
      <template slot="dateRender" slot-scope="current">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </SERangePicker>

    <SEWeekPicker>
      <template slot="dateRender" slot-scope="current">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </SEWeekPicker>
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'

export default {
  name: 'CustomDateRendering',
  components: {
    SEDatepicker: DatePicker,
    SERangePicker: DatePicker.RangePicker,
    SEWeekPicker: DatePicker.WeekPicker,
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
