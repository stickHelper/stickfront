<template>
  <SEForm
    v-bind="formItemLayout"
    :form="form"
    @submit="handleSubmit"
  >
    <SEFormItem label="DatePicker">
      <SEDatePicker v-decorator="['date-picker', config]" />
    </SEFormItem>
    <SEFormItem label="DatePicker[showTime]">
      <SEDatePicker
        v-decorator="['date-time-picker', config]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </SEFormItem>
    <SEFormItem label="MonthPicker">
      <SEMonthPicker v-decorator="['month-picker', config]" />
    </SEFormItem>
    <SEFormItem label="RangePicker">
      <SERangePicker v-decorator="['range-picker', rangeConfig]" />
    </SEFormItem>
    <SEFormItem label="RangePicker[showTime]">
      <SERangePicker
        v-decorator="['range-time-picker', rangeConfig]"
        show-time
        format="YYYY-MM-DD HH:mm:ss"
      />
    </SEFormItem>
    <SEFormItem label="TimePicker">
      <SETimePicker v-decorator="['time-picker', config]" />
    </SEFormItem>
    <SEFormItem
      :wrapper-col="{
        xs: { span: 24, offset: 0 },
        sm: { span: 16, offset: 8 },
      }"
    >
      <SEButton color="primary" html-type="submit">
        Submit
      </SEButton>
    </SEFormItem>
  </SEForm>
</template>

<script>
import { Form, DatePicker, TimePicker } from 'ant-design-vue'
import SEButton from '@/components/SEButton'

export default {
  components: {
    SEForm: Form,
    SEFormItem: Form.Item,
    SEDatePicker: DatePicker,
    SEMonthPicker: DatePicker.MonthPicker,
    SERangePicker: DatePicker.RangePicker,
    SETimePicker: TimePicker,
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
