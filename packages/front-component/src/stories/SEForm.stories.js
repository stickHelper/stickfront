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
    <SEForm
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <SEFormItem
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
      </SEFormItem>
      <SEFormItem
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
      </SEFormItem>
      <SEFormItem :wrapper-col="{ span: 12, offset: 5 }">
        <SEButton color="primary" html-type="submit">
          Submit
        </SEButton>
      </SEFormItem>
    </SEForm>
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
<SEForm :layout="formLayout">
  <SEFormItem
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
  </SEFormItem>
  <SEFormItem
    label="Field A"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <SETextfield placeholder="input placeholder" />
  </SEFormItem>
  <SEFormItem
    label="Field B"
    :label-col="formItemLayout.labelCol"
    :wrapper-col="formItemLayout.wrapperCol"
  >
    <SETextfield placeholder="input placeholder" />
  </SEFormItem>
  <SEFormItem :wrapper-col="buttonItemLayout.wrapperCol">
    <SEButton color="primary">
      Submit
    </SEButton>
  </SEFormItem>
</SEForm>
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
      <SEDatepicker style="width: 100%" />
    </SEFormItem>
    <SEFormItem
      label="Warning"
      validate-status="warning"
    >
      <SEDatepicker type="time" />
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
        <SEDatepicker style="width: 100%" />
      </SEFormItem>
      <span :style="{ display: 'inline-block', width: '24px', textAlign: 'center' }">
        -
      </span>
      <SEFormItem :style="{ display: 'inline-block', width: 'calc(50% - 12px)' }">
        <SEDatepicker style="width: 100%" />
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

// TimeRelated.parameters = {
//   docs: {
//     source: {
//       code: ``
//     }
//   }
// }

// export const CustomValidation = (args) => ({
//   components: { SECustomValidation },
//   template: '<SECustomValidation />'
// })

// CustomValidation.parameters = {
//   docs: {
//     source: {
//       code: ``
//     }
//   }
// }
