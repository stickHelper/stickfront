import '@/styles/index.scss'
import SEForm from '@/components/SEForm/index.vue'
import SEFormLayout from '@/components/SEForm/FormLayout.vue'
import SECustomValidation from '@/components/SEForm/CustomValidation.vue'
import SETimeRelated from '@/components/SEForm/TimeRelated.vue'
import { Form } from 'ant-design-vue'

export default {
  title: 'Data Entry/Form',
  component: Form
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEForm },
  template: `<div>
  <SEForm />  
</div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <AForm
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <AFormItem
        label="Note"
      >
        <SETextfield
          v-decorator="[
            'note',
            {
              rules: [{ required: true, message: 'Please input your note!' }],
              initialValue: ''
            }
          ]"
          placeholder="Input notes!"
        />
      </AFormItem>
      <AFormItem
        label="Gender"
      >
        <SESelect
          v-decorator="[
            'gender',
            {
              rules: [{ required: true, message: 'Please select your gender!' }],
              initialValue: ''
            }
          ]"
          placeholder="Select a option and change input text above"
          :options="[
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' }
          ]"
        />
      </AFormItem>
      <AFormItem :wrapper-col="{ span: 12, offset: 5 }">
        <SEButton color="primary" html-type="submit">
          Submit
        </SEButton>
      </AFormItem>
    </AForm>
  </div>
</template>

<script>

export default {
  name: 'SEFormExample',
  data() {
    return {
      errors: {},
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleError(error) {
      this.errors = error || {}
      console.log('ini', error)
    },
    handleOk(e) {
      console.log('handleOk', e)
    },
    getErrorMessage(name) {
      console.log('this.errors', this.errors)
      return this.errors[name] ? this.errors[name].errors[0].message : ''
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
    `
    }
  }
}

export const FormLayout = (args) => ({
  components: { SEFormLayout },
  template: '<SEFormLayout />'
})

FormLayout.parameters = {
  docs: {
    source: {
      code: `<template>
<AForm :layout="formLayout">
  <AFormItem
    label="Form Layout"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <SERadioGroup default-value="horizontal" @change="handleFormLayoutChange">
      <SERadioButton value="horizontal">
        Horizontal
      </SERadioButton>
      <SERadioButton value="vertical">
        Vertical
      </SERadioButton>
      <SERadioButton value="inline">
        Inline
      </SERadioButton>
    </SERadioGroup>
  </AFormItem>
  <AFormItem
    label="Field A"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <SETextfield placeholder="input placeholder" />
  </AFormItem>
  <AFormItem
    label="Field B"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <SETextfield placeholder="input placeholder" />
  </AFormItem>
  <AFormItem :wrapper-col="buttonItemLayout.wrapperCol">
    <SEButton color="primary">
      Submit
    </SEButton>
  </AFormItem>
</AForm>
</template>

<script>
export default {
name: 'FormLayout',
data() {
  return {
    formLayout: 'horizontal'
  }
},
computed: {
  formItemLayout() {
    const { formLayout } = this
    return formLayout === 'horizontal'
      ? {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
      : {}
  },
  buttonItemLayout() {
    const { formLayout } = this
    return formLayout === 'horizontal'
      ? {
        wrapperCol: { span: 14, offset: 4 }
      }
      : {}
  }
},
methods: {
  handleFormLayoutChange(value) {
    this.formLayout = value
  }
}
}
</script>
`
    }
  }
}

export const CustomValidation = (args) => ({
  components: { SECustomValidation },
  template: '<SECustomValidation />'
})

CustomValidation.parameters = {
  docs: {
    source: {
      code: `<template>
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

export default {
  name: 'CustomValidation',
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
`
    }
  }
}

export const TimeRelated = (args) => ({
  components: { SETimeRelated },
  template: '<SETimeRelated />'
})
