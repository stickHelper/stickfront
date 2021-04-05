import SEBasic from '@/components/SETimePicker/Basic.vue'
import SEDisabled from '@/components/SETimePicker/Disabled.vue'
import SETwelveHour from '@/components/SETimePicker/12Hour.vue'
import SEHourTime from '@/components/SETimePicker/HourTime.vue'
import SESize from '@/components/SETimePicker/Size.vue'
import { TimePicker } from 'ant-design-vue'

import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/Time Picker',
  component: TimePicker
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEBasic },
  template: `<div>
  <SEBasic />
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <ATimePicker :default-open-value="moment('00:00:00', 'HH:mm:ss')" @change="onChange" />
</template>

<script>
import moment from 'moment'
export default {
  methods: {
    moment,
    onChange(time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
`
    }
  }
}
export const TwelveHour = (args) => ({
  components: { SETwelveHour },
  template: `<div>
    <SETwelveHour />
  </div>`
})

TwelveHour.parameters = {
  docs: {
    source: {
      code: `<template>
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

export default {
  methods: {
    onChange(time, timeString) {
      console.log(time, timeString)
    }
  }
}
</script>
`
    }
  }
}

export const HourTime = () => ({
  components: { SEHourTime },
  template: `<div>
  <SEHourTime />
</div>`
})

HourTime.parameters = {
  docs: {
    source: {
      code: `<template>
  <ATimePicker :default-value="moment('12:08', 'HH:mm')" format="HH:mm" />
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    moment
  }
}
</script>    
`
    }
  }
}

export const Disabled = (args) => ({
  components: { SEDisabled },
  template: '<SEDisabled />'
})

Disabled.parameters = {
  docs: {
    source: {
      code: `<template>
  <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" disabled />
</template>

<script>
import moment from 'moment'
export default {
  methods: {
    moment
  }
}
</script> 
`
    }
  }
}

export const Size = (args) => ({
  components: { SESize },
  template: `<div>
    <SESize />
  </div>`
})

Size.parameters = {
  docs: {
    source: {
      code: `<template>
  <SESpace direction="vertical">
    <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" size="large" />
    <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" />
    <ATimePicker :default-value="moment('12:08:23', 'HH:mm:ss')" size="small" />
  </SESpace>
</template>

<script>
import moment from 'moment'

export default {
  methods: {
    moment
  }
}
</script>
    
`
    }
  }
}
