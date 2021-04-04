<template>
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
import { Form } from 'ant-design-vue'
import SETextfield from '@/components/SETextfield/index.vue'
import SESelect from '@/components/SESelect/index.vue'
import SEButton from '@/components/SEButton/index.vue'

export default {
  name: 'SEFormExample',
  components: {
    SEForm: Form,
    SEFormItem: Form.Item,
    SETextfield,
    SESelect,
    SEButton
  },
  data() {
    return {
      errors: {},
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleError(error) {
      this.errors = error || {}
      // console.log('ini', error)
    },
    handleOk(e) {
      // console.log('handleOk', e)
    },
    getErrorMessage(name) {
      // console.log('this.errors', this.errors)
      return this.errors[name] ? this.errors[name].errors[0].message : ''
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          // console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>
