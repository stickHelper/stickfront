<template>
  <div class="se-formbuilder">
    <AForm
      :form="form"
      :layout="formLayout"
      @submit.prevent="submitForm"
    >
      <template
        v-for="(schema, index) in dataSchemas.schemas"
      >
        <div :key="index" :class="schema.className || ''">
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
              :show-search="schema.showSearch"
              :options="schema.options"
              :label-in-value="schema.labelInValue"
              :filter-option="schema.filterOption"
              :is-fetching="schema.isFetching"
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

          <!-- CHECKBOX GROUP -->
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

          <!-- CHECKBOX -->
          <AFormItem
            v-else-if="schema.componentName === 'SECheckbox'"
            :key="schema.id"
            :label="schema.labelName"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <SECheckbox
              v-decorator="[
                schema.name,
                {
                  rules: schema.rules,
                  valuePropName: 'defaultChecked',
                  initialValue: schema.defaultValue || false
                }
              ]"
              :style="schema.style"
              :color="schema.color"
            >
              {{ schema.labelField }}
            </SECheckbox>
            <div class="help-info">
              {{ schema.helpText }}
            </div>
          </AFormItem>

          <!-- Switch -->
          <AFormItem
            v-else-if="schema.componentName === 'SESwitch'"
            :key="schema.id"
            :label="schema.labelName"
            :label-col="formItemLayout.labelCol"
            :wrapper-col="formItemLayout.wrapperCol"
          >
            <SESpace align="center" size="middle">
              <SESwitch
                v-decorator="[
                  schema.name,
                  {
                    rules: schema.rules,
                    valuePropName: 'defaultChecked',
                    initialValue: schema.defaultValue
                  }
                ]"
                :size="schema.size"
                :style="schema.style"
                :color="schema.color"
              />

              <div class="switch-label">
                <div>
                  <strong>{{ schema.labelField }}</strong>
                </div>
                <div>
                  {{ schema.subLabelField }}
                </div>
              </div>
            </SESpace>
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
              :format="schema.format || 'YYYY-MM-DD HH:mm:ss'"
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
              :format="schema.format || 'YYYY-MM'"
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
              :format="schema.format || 'HH:mm:ss'"
            />
          </AFormItem>
          <SEFormBuilderItem
            v-else-if="schema.componentName === 'custom'"
            :id="schema.id"
            :ref="schema.name"
            :custom-component-name="schema.customComponentName"
            :custom-component-parameters="schema.customComponentParameters"
            :default-value="schema.defaultValue"
            :name="schema.name"
            :class-name="schema.className"
          />
          <template v-else>
            <slot :schema="schema" />
          </template>
        </div>
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
            <SEButton
              v-else
              :key="index"
              :color="action.color"
              :size="action.size"
              @click="handleCustom(action.type)"
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

import SESelect from '../SESelect'
import SETextfield from '../SETextfield'
import SEButton from '../SEButton'
import SETextarea from '../SETextarea'
import SERadio from '../SERadio'
import SERadioGroup from '../SERadio/SERadioGroup'
import SERadioButton from '../SERadio/SERadioButton'
import SECheckbox from '../SECheckbox'
import SECheckboxGroup from '../SECheckbox/SECheckboxGroup'
import SESpace from '../SESpace'
import SESwitch from '../SESwitch'

export default {
  name: 'SEFormBuilder',
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    ADatePicker: DatePicker,
    AMonthPicker: DatePicker.MonthPicker,
    ARangePicker: DatePicker.RangePicker,
    ATimePicker: TimePicker,
    SESelect,
    SETextfield,
    SEButton,
    SETextarea,
    SERadio,
    SERadioGroup,
    SERadioButton,
    SECheckbox,
    SECheckboxGroup,
    SESpace,
    SESwitch
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
      if (this.validateCustomFormValues()) {
        const customFormValues = this.getCustomFormValues()
        this.form.validateFields((err, values) => {
          if (!err) {
            this.$emit('submit', { ...values, ...customFormValues })
          }
        })
      }
    },
    getCustomFormValues() {
      const customKeyValues = {}
      this.dataSchemas.schemas
                .filter((schema) => schema.componentName === 'custom')
                .forEach((schema) => {
                  customKeyValues[schema.name] = this.$refs[schema.name][0].getValue()
                })
      return customKeyValues
    },
    validateCustomFormValues() {
      // const customKeyValues = {}
      return this.dataSchemas.schemas
                .filter((schema) => schema.componentName === 'custom')
                .map((schema) => this.$refs[schema.name][0].validate())
                .reduce((carry, item) => carry && item, true)
    },
    handleCancel() {
      this.dataSchemas.schemas
                .filter((schema) => schema.componentName === 'custom')
                .forEach((schema) => {
                  this.$refs[schema.name][0].reset()
                })
      this.form.resetFields()
      this.$emit('cancel')
    },
    handleCustom(action, actions) {
      var values = this.form.getFieldsValue()
      var customFormValues = this.getCustomFormValues()
      this.$emit('custom', action, { ...values, ...customFormValues }, actions)
    }
  }
}
</script>
