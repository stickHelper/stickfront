<template>
  <SETimePicker :default-open-value="moment('00:00:00', 'HH:mm:ss')" @change="onChange" />
</template>

<script>
import { TimePicker } from 'ant-design-vue'
import moment from 'moment'
export default {
  components: {
    SETimePicker: TimePicker
  },
  methods: {
    moment,
    onChange(time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
