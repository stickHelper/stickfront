<template>
  <ATimePicker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />
</template>

<script>
import { TimePicker } from 'ant-design-vue'
import moment from 'moment'

export default {
  components: {
    ATimePicker: TimePicker
  },
  methods: {
    moment
  }
}
</script>
