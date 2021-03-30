<template>
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
import { Form } from 'ant-design-vue'
import SETextfield from '@/components/SETextfield/index.vue'
import SERadioGroup from '@/components/SERadio/SERadioGroup/index.vue'
import SERadioButton from '@/components/SERadio/SERadioButton/index.vue'
import SEButton from '@/components/SEButton/index.vue'

export default {
  name: 'FormLayout',
  components: {
    SEForm: Form,
    SEFormItem: Form.Item,
    SETextfield,
    SERadioButton,
    SERadioGroup,
    SEButton
  },
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
