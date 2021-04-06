<template>
  <SESpace direction="vertical">
    <ATimePicker use12-hours @change="onChange" />

    <ATimePicker
      use12-hours
      format="h:mm:ss A"
      @change="onChange"
    />

    <ATimePicker
      use12-hours
      format="h:mm a"
      @change="onChange"
    />
  </SESpace>
</template>

<script>
import { TimePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'

export default {
  components: {
    ATimePicker: TimePicker,
    SESpace
  },
  methods: {
    onChange(time, timeString) {
      // console.log(time, timeString)
    }
  }
}
</script>
