<template>
  <SETimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" disabled />
</template>

<script>
import { TimePicker } from 'ant-design-vue'
import moment from 'moment'
export default {
  components: {
    SETimePicker: TimePicker
  },
  methods: {
    moment
  }
}
</script>
