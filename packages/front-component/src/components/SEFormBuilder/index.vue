<template>
  <div class="se-formbuilder">
    <AForm
      :form="form"
      :layout="formLayout"
      @submit.prevent="submitForm"
    >
      <template
        v-for="(schema) in dataSchemas.schemas"
      >
        <!-- TITLE -->
        <AFormItem
          v-if="schema.componentName === 'FormTitle'"
          :key="schema.id"
        >
          <h3 class="form-title">
            {{ schema.labelName }}
          </h3>
        </AFormItem>

        <!-- TEXTFIELD -->
        <AFormItem
          v-else-if="schema.componentName === 'SETextfield'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <SETextfield
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :placeholder="schema.placeholder"
            :size="schema.size"
          />
          <div class="help-info">
            {{ schema.helpText }}
          </div>
        </AFormItem>

        <!-- TEXTAREA -->
        <AFormItem
          v-else-if="schema.componentName === 'SETextarea'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <SETextarea
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :placeholder="schema.placeholder"
            :auto-size="schema.size"
          />
          <div class="help-info">
            {{ schema.helpText }}
          </div>
        </AFormItem>

        <!-- SELECT -->
        <AFormItem
          v-else-if="schema.componentName === 'SESelect'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <SESelect
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :placeholder="schema.placeholder"
            :size="schema.size"
            :mode="schema.type"
            :options="schema.options"
          />
          <div class="help-info">
            {{ schema.helpText }}
          </div>
        </AFormItem>

        <!-- RADIO -->
        <AFormItem
          v-else-if="schema.componentName === 'SERadioGroup'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <SERadioGroup
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :name="schema.name"
            :size="schema.size"
          >
            <template
              v-for="option in schema.options"
            >
              <SERadioButton
                v-if="schema.type === 'button'"
                :key="option.value"
                :value="option.value"
                :style="schema.style"
              >
                {{ option.label }}
              </SERadioButton>
              <SERadio
                v-else
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SERadio>
            </template>
          </SERadioGroup>
          <div class="help-info">
            {{ schema.helpText }}
          </div>
        </AFormItem>

        <!-- CHECKBOX -->
        <AFormItem
          v-else-if="schema.componentName === 'SECheckboxGroup'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <SECheckboxGroup
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                valuePropName: 'defaultValue',
                initialValue: schema.defaultValue
              }
            ]"
            :name="schema.name"
            :size="schema.size"
          >
            <SESpace>
              <template
                v-for="option in schema.options"
              >
                <SECheckbox
                  :key="option.value"
                  :value="option.value"
                  :style="schema.style"
                  :color="schema.color"
                >
                  {{ option.label }}
                </SECheckbox>
              </template>
            </SESpace>
          </SECheckboxGroup>
          <div class="help-info">
            {{ schema.helpText }}
          </div>
        </AFormItem>

        <!-- TIME RELATED -->
        <AFormItem
          v-else-if="schema.componentName === 'SEDatePicker'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <ADatePicker
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :show-time="schema.showTime"
            :size="schema.size"
            format="YYYY-MM-DD HH:mm:ss"
          />
        </AFormItem>
        <AFormItem
          v-else-if="schema.componentName === 'SEMonthPicker'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <AMonthPicker
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :size="schema.size"
          />
        </AFormItem>
        <AFormItem
          v-else-if="schema.componentName === 'SERangePicker'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <ARangePicker
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :show-time="schema.showTime"
            :size="schema.size"
          />
        </AFormItem>
        <AFormItem
          v-else-if="schema.componentName === 'SETimePicker'"
          :key="schema.id"
          :label="schema.labelName"
          :label-col="formItemLayout.labelCol"
          :wrapper-col="formItemLayout.wrapperCol"
        >
          <ATimePicker
            v-decorator="[
              schema.name,
              {
                rules: schema.rules,
                initialValue: schema.defaultValue
              }
            ]"
            :size="schema.size"
          />
        </AFormItem>
        <template v-else>
          <slot />
        </template>
      </template>

      <!-- Action -->
      <AFormItem
        :wrapper-col="buttonItemLayout.wrapperCol"
      >
        <SESpace>
          <template v-for="(action, index) in dataSchemas.actions">
            <SEButton
              v-if="action.type === 'submit'"
              :key="index"
              :color="action.color"
              :size="action.size"
              :loading="isLoadingSubmit"
              html-type="submit"
            >
              {{ action.label }}
            </SEButton>
            <SEButton
              v-else-if="action.type === 'cancel'"
              :key="index"
              :color="action.color"
              :size="action.size"
              @click="handleCancel"
            >
              {{ action.label }}
            </SEButton>
          </template>
        </SESpace>
      </AFormItem>
    </AForm>
  </div>
</template>

<script>
import { Form, DatePicker, TimePicker } from 'ant-design-vue'
import SETextfield from '@/components/SETextfield'
import SETextarea from '@/components/SETextarea'
import SESelect from '@/components/SESelect'
import SERadio from '@/components/SERadio'
import SERadioGroup from '@/components/SERadio/SERadioGroup'
import SECheckbox from '@/components/SECheckbox'
import SECheckboxGroup from '@/components/SECheckbox/SECheckboxGroup'
import SERadioButton from '@/components/SERadio/SERadioButton'
import SEButton from '@/components/SEButton'
import SESpace from '@/components/SESpace'

export default {
  name: 'AFormBuilder',
  components: {
    SETextfield,
    SETextarea,
    SESelect,
    AForm: Form,
    AFormItem: Form.Item,
    SERadio,
    SERadioGroup,
    SERadioButton,
    SECheckbox,
    SECheckboxGroup,
    SEButton,
    SESpace,
    ADatePicker: DatePicker,
    AMonthPicker: DatePicker.MonthPicker,
    ARangePicker: DatePicker.RangePicker,
    ATimePicker: TimePicker
  },
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    dataSchemas: {
      type: Object,
      default: () => null
    },
    formLayout: {
      type: String,
      default: 'vertical',
      validator: function (value) {
        return ['horizontal', 'vertical', 'inline'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: this.nameForm }),
      // formData: {},
      isLoadingSubmit: false
    }
  },
  computed: {
    classes() {
      return {
        'se-formbuilder': true,
        [this.className]: this.className !== null
      }
    },
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
    // onChange(value, name) {
    //   this.formData[name] = value
    // },
    submitForm(e) {
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('submit', values)
          if (['post', 'patch'].includes(this.dataSchemas.submitMethod)) {
            this.isLoadingSubmit = true
            this.postData(this.dataSchemas.submitUrl, values)
              .then(res => {
                this.isLoadingSubmit = false
                this.$emit('success', res)
              })
              .catch(err => {
                this.isLoadingSubmit = false
                this.$emit('error', err)
              })
          }
        }
      })
    },
    async postData(url = '', data = {}) {
    // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
      return response.json() // parses JSON response into native JavaScript objects
    },
    handleCancel() {
      this.form.resetFields()
      this.$emit('cancel')
    }
  }
}
</script>
