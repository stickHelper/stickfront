<template>
  <AForm :label-col="labelCol" :wrapper-col="wrapperCol">
    <AFormItem
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <SETextfield id="error" placeholder="unavailable choice" />
    </AFormItem>
    <AFormItem label="Warning" validate-status="warning">
      <SETextfield id="warning" placeholder="Warning" />
    </AFormItem>
    <AFormItem
      label="Validating"
      validate-status="validating"
      help="The information is being validated..."
    >
      <SETextfield id="validating" placeholder="I'm the content is being validated" />
    </AFormItem>
    <AFormItem
      label="Success"
      validate-status="success"
    >
      <SETextfield id="success" placeholder="I'm the content" />
    </AFormItem>
    <AFormItem
      label="Warning"
      validate-status="warning"
    >
      <SETextfield id="warning2" placeholder="Warning" />
    </AFormItem>
    <AFormItem
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <SETextfield id="error2" placeholder="unavailable choice" />
    </AFormItem>
    <AFormItem
      label="Success"
      validate-status="success"
    >
      <ADatePicker style="width: 100%" />
    </AFormItem>
    <AFormItem
      label="Warning"
      validate-status="warning"
    >
      <ADatePicker type="time" />
    </AFormItem>
    <AFormItem
      label="Error"
      validate-status="error"
    >
      <SESelect
        default-value="1"
        :options="[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' }
        ]"
      />
    </AFormItem>
    <AFormItem label="inline" style="margin-bottom:0;">
      <AFormItem
        validate-status="error"
        help="Please select the correct date"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <ADatePicker style="width: 100%" />
      </AFormItem>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <AFormItem :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <ADatePicker style="width: 100%" />
      </AFormItem>
    </AFormItem>
    <AFormItem
      label="Success"
      validate-status="success"
    >
      <SETextfield style="width: 100%" />
    </AFormItem>
    <AFormItem
      label="Success"
      validate-status="success"
    >
      <SETextfield allow-clear placeholder="with allowClear" />
    </AFormItem>

    <AFormItem
      label="Warning"
      validate-status="warning"
    >
      <SETextfield type="password" placeholder="with input password" />
    </AFormItem>

    <AFormItem
      label="Error"
      validate-status="error"
    >
      <SETextfield
        type="password"
        allow-clear
        placeholder="with input password and allowClear"
      />
    </AFormItem>
  </AForm>
</template>

<script>
import { Form, DatePicker } from 'ant-design-vue'
import SETextfield from '@/components/SETextfield/index.vue'
import SESelect from '@/components/SESelect/index.vue'

export default {
  name: 'CustomValidation',
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    SETextfield,
    SESelect,
    ADatePicker: DatePicker
  },
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    }
  }
}
</script>
