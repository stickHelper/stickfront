<template>
  <SESpace direction="vertical">
    <SETimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" size="large" />
    <SETimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" />
    <SETimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" size="small" />
  </SESpace>
</template>

<script>
import { TimePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'
import moment from 'moment'

export default {
  components: {
    SETimePicker: TimePicker,
    SESpace
  },
  methods: {
    moment
  }
}
</script>
