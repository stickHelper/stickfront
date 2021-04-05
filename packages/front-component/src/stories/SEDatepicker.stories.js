import BasicExample from '@/components/SEDatePicker/Basic.vue'
import SECustomDateRendering from '@/components/SEDatePicker/CustomDateRendering.vue'
import SEDisableDateTime from '@/components/SEDatePicker/DisableDateTime.vue'
import SEDisabled from '@/components/SEDatePicker/Disabled.vue'
import SEDateFormat from '@/components/SEDatePicker/DateFormat.vue'
import SESize from '@/components/SEDatePicker/Size.vue'
import { DatePicker } from 'ant-design-vue'

import '@/styles/index.scss'
import '@/styles/icon/se-font.min.scss'

export default {
  title: 'Data Entry/Datepicker',
  component: DatePicker
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasicExample },
  template: `<div>
  <BasicExample />
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <SESpace direction="vertical">
    <ADatePicker @change="onChange" />

    <AMonthPicker placeholder="Select month" @change="onChange" />

    <ARangePicker @change="onChange" />

    <AWeekPicker placeholder="Select week" @change="onChange" />
  </SESpace>
</template>

<script>

export default {
  name: 'BasicExample',
  methods: {
    onChange(date, dateString) {
      console.log(date, dateString)
    }
  }
}
</script>
`
    }
  }
}

export const CustomDateRendering = () => ({
  components: { SECustomDateRendering },
  template: `<div>
  <SECustomDateRendering />
</div>`
})

CustomDateRendering.parameters = {
  docs: {
    source: {
      code: `<template>
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

export default {
  name: 'CustomDateRendering',
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
`
    }
  }
}

export const DisableDateTime = (args) => ({
  components: { SEDisableDateTime },
  template: `<div>
  <SEDisableDateTime />
</div>`
})

DisableDateTime.parameters = {
  docs: {
    source: {
      code: `<template>
  <SESpace direction="vertical">
    <ADatePicker
      format="YYYY-MM-DD HH:mm:ss"
      :disabled-date="disabledDate"
      :disabled-time="disabledDateTime"
      :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
    />

    <AMonthPicker :disabled-date="disabledDate" placeholder="Select month" />

    <ARangePicker
      :disabled-date="disabledDate"
      :disabled-time="disabledRangeTime"
      :show-time="{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }"
      format="YYYY-MM-DD HH:mm:ss"
    />
  </SESpace>
</template>

<script>
import moment from 'moment'

export default {
  name: 'DisableDateTime',
  methods: {
    moment,
    range(start, end) {
      const result = []
      for (let i = start; i < end; i++) {
        result.push(i)
      }
      return result
    },

    disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf('day')
    },

    disabledDateTime() {
      return {
        disabledHours: () => this.range(0, 24).splice(4, 20),
        disabledMinutes: () => this.range(30, 60),
        disabledSeconds: () => [55, 56]
      }
    },

    disabledRangeTime(_, type) {
      if (type === 'start') {
        return {
          disabledHours: () => this.range(0, 60).splice(4, 20),
          disabledMinutes: () => this.range(30, 60),
          disabledSeconds: () => [55, 56]
        }
      }
      return {
        disabledHours: () => this.range(0, 60).splice(20, 4),
        disabledMinutes: () => this.range(0, 31),
        disabledSeconds: () => [55, 56]
      }
    }
  }
}
</script>
        
`
    }
  }
}

export const DateFormat = (args) => ({
  components: { SEDateFormat },
  template: '<SEDateFormat />'
})

DateFormat.parameters = {
  docs: {
    source: {
      code: `<template>
  <SESpace direction="vertical">
    <ADatePicker :default-value="moment('2015/01/01', dateFormat)" :format="dateFormat" />

    <ADatePicker
      :default-value="moment('01/01/2015', dateFormatList[0])"
      :format="dateFormatList"
    />

    <AMonthPicker :default-value="moment('2015/01', monthFormat)" :format="monthFormat" />

    <ARangePicker
      :default-value="[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]"
      :format="dateFormat"
    />
  </SESpace>
</template>

<script>
import { DatePicker } from 'ant-design-vue'
import SESpace from '@/components/SESpace'
import moment from 'moment'

export default {
  name: 'DateFormat',
  components: {
    ADatePicker: DatePicker,
    ARangePicker: DatePicker.RangePicker,
    AMonthPicker: DatePicker.MonthPicker,
    SESpace
  },
  data() {
    return {
      dateFormat: 'YYYY/MM/DD',
      monthFormat: 'YYYY/MM',
      dateFormatList: ['DD/MM/YYYY', 'DD/MM/YY']
    }
  },
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
  <SESpace direction="vertical">
    <ADatePicker :default-value="moment('2015-06-06', dateFormat)" disabled />

    <AMonthPicker :default-value="moment('2015-06', 'YYYY-MM')" disabled />

    <ARangePicker
      :default-value="[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]"
      disabled
    />
  </SESpace>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Disabled',
  data() {
    this.dateFormat = 'YYYY-MM-DD'
    return {}
  },
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
export default {
  name: 'BasicExample',
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
`
    }
  }
}
