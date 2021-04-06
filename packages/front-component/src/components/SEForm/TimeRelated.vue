<template>
  <AForm
    v-bind="formItemLayout"
    :form="form"
    @submit="handleSubmit"
  >
    <AFormItem label="DatePicker">
      <ADatePicker v-decorator="['date-picker', config]" />
    </AFormItem>
    <AFormItem label="DatePicker[showTime]">
      <ADatePicker
        v-decorator="['date-time-picker', config]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </AFormItem>
    <AFormItem label="MonthPicker">
      <AMonthPicker v-decorator="['month-picker', config]" />
    </AFormItem>
    <AFormItem label="RangePicker">
      <ARangePicker v-decorator="['range-picker', rangeConfig]" />
    </AFormItem>
    <AFormItem label="RangePicker[showTime]">
      <ARangePicker
        v-decorator="['range-time-picker', rangeConfig]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </AFormItem>
    <AFormItem label="TimePicker">
      <ATimePicker v-decorator="['time-picker', config]" />
    </AFormItem>
    <AFormItem
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }"
    >
      <SEButton color="primary" html-type="submit">
        Submit
      </SEButton>
    </AFormItem>
  </AForm>
</template>

<script>
import { Form, DatePicker, TimePicker } from 'ant-design-vue'
import SEButton from '@/components/SEButton'

export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    ADatePicker: DatePicker,
    AMonthPicker: DatePicker.MonthPicker,
    ARangePicker: DatePicker.RangePicker,
    ATimePicker: TimePicker,
    SEButton
  },
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      config: {
        rules: [{ type: 'object', required: true, message: 'Please select time!' }]
      },
      rangeConfig: {
        rules: [{ type: 'array', required: true, message: 'Please select time!' }]
      }
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'time_related_controls' })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return
        }

        // Should format date value before submit.
        // const rangeValue = fieldsValue['range-picker']
        // const rangeTimeValue = fieldsValue['range-time-picker']
        // const values = {
        //   ...fieldsValue,
        //   'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
        //   'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        //   'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
        //   'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
        //   'range-time-picker': [
        //     rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        //     rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')
        //   ],
        //   'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
        // }
        // console.log('Received values of form: ', values)
      })
    }
  }
}
</script>
