<template>
  <SEForm :label-col="labelCol" :wrapper-col="wrapperCol">
    <SEFormItem
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <SETextfield id="error" placeholder="unavailable choice" />
    </SEFormItem>
    <SEFormItem label="Warning" validate-status="warning">
      <SETextfield id="warning" placeholder="Warning" />
    </SEFormItem>
    <SEFormItem
      label="Validating"
      validate-status="validating"
      help="The information is being validated..."
    >
      <SETextfield id="validating" placeholder="I'm the content is being validated" />
    </SEFormItem>
    <SEFormItem
      label="Success"
      validate-status="success"
    >
      <SETextfield id="success" placeholder="I'm the content" />
    </SEFormItem>
    <SEFormItem
      label="Warning"
      validate-status="warning"
    >
      <SETextfield id="warning2" placeholder="Warning" />
    </SEFormItem>
    <SEFormItem
      label="Fail"
      validate-status="error"
      help="Should be combination of numbers & alphabets"
    >
      <SETextfield id="error2" placeholder="unavailable choice" />
    </SEFormItem>
    <SEFormItem
      label="Success"
      validate-status="success"
    >
      <SEDatePicker style="width: 100%" />
    </SEFormItem>
    <SEFormItem
      label="Warning"
      validate-status="warning"
    >
      <SEDatePicker type="time" />
    </SEFormItem>
    <SEFormItem
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
    </SEFormItem>
    <SEFormItem label="inline" style="margin-bottom:0;">
      <SEFormItem
        validate-status="error"
        help="Please select the correct date"
        :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }"
      >
        <SEDatePicker style="width: 100%" />
      </SEFormItem>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <SEFormItem :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <SEDatePicker style="width: 100%" />
      </SEFormItem>
    </SEFormItem>
    <SEFormItem
      label="Success"
      validate-status="success"
    >
      <SETextfield style="width: 100%" />
    </SEFormItem>
    <SEFormItem
      label="Success"
      validate-status="success"
    >
      <SETextfield allow-clear placeholder="with allowClear" />
    </SEFormItem>

    <SEFormItem
      label="Warning"
      validate-status="warning"
    >
      <SETextfield type="password" placeholder="with input password" />
    </SEFormItem>

    <SEFormItem
      label="Error"
      validate-status="error"
    >
      <SETextfield
        type="password"
        allow-clear
        placeholder="with input password and allowClear"
      />
    </SEFormItem>
  </SEForm>
</template>

<script>
import { Form, DatePicker } from 'ant-design-vue'
import SETextfield from '@/components/SETextfield/index.vue'
import SESelect from '@/components/SESelect/index.vue'

export default {
  name: 'CustomValidation',
  components: {
    SEForm: Form,
    SEFormItem: Form.Item,
    SETextfield,
    SESelect,
    SEDatePicker: DatePicker
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
