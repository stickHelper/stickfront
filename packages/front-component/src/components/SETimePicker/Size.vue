<template>
  <SESpace direction="vertical">
    <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" size="large" />
    <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" />
    <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" size="small" />
  </SESpace>
</template>

<script>
import { TimePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'
import moment from 'moment'

export default {
  components: {
    ATimePicker: TimePicker,
    SESpace
  },
  methods: {
    moment
  }
}
</script>
