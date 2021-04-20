<template>
  <SEFormBuilder
    form-layout="vertical"
    :data-schemas="dataSchema"
    @cancel="handleCancel"
    @success="handleSuccess"
    @error="handleError"
    @submit="handleSubmit"
  />
</template>

<script>
import SEFormBuilder from '@/components/SEFormBuilder'

const dataSchema = {
  formLayout: 'veritcal',
  schemas: [
    {
      labelName: 'General Information',
      id: 'n6HeXAQuKtFmtsyo',
      componentName: 'FormTitle'
    },
    {
      name: 'custom',
      id: 'LudEgwhzxUZpx712GZsTasd'
    },
    {
      defaultValue: null,
      name: 'name',
      labelName: 'Restriction Name',
      id: 'LudEgwhUZpx7GZsT',
      componentName: 'SETextfield',
      size: 'large',
      helpText: 'ex: john doe',
      placeholder: 'Input name',
      rules: [
        { required: true, message: 'Please input your note!!' }
      ]
    },
    {
      defaultValue: null,
      name: 'email',
      labelName: 'Email',
      id: 'LudEgwhzxUZpx7GZsT',
      componentName: 'SETextfield',
      size: 'large',
      helpText: 'ex: johndoe@mail.com',
      placeholder: 'Input email',
      rules: [
        { type: 'email', message: 'Please input correct email!' },
        { required: true, message: 'Please input email!' }
      ]
    },
    {
      defaultValue: null,
      name: 'description',
      labelName: 'Description',
      id: 'LudEgwhzxUZpx712GZsT',
      componentName: 'SETextarea',
      size: { minRows: 2, maxRows: 6 },
      placeholder: 'Input description',
      rules: [
        { required: true, message: 'Please input decsription!' }
      ]
    },
    {
      defaultValue: null,
      name: 'note',
      labelName: 'Note',
      id: 'LudEgwhzxUZpx712GZsTasd',
      componentName: 'SETextarea',
      size: { minRows: 2, maxRows: 6 },
      placeholder: 'Input note'
    },
    {
      defaultValue: null,
      name: 'industry',
      labelName: 'Select Industry you want to exclude',
      id: 'jhEbpgY1hnWcqSfA',
      componentName: 'SESelect',
      size: 'large',
      placeholder: 'Please Select',
      rules: [
        { required: true, message: 'Please select industry!!' }
      ],
      options: [
        {
          label: 'Test',
          value: '420b7fe0-b7c2-4848-9f57-a870195ac604'
        },
        {
          label: 'Industry 2',
          value: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896'
        }
      ]
    },
    {
      defaultValue: [],
      name: 'category',
      labelName: 'Select Multiple Category',
      id: 'jhEbpgY1hnWcq12SfA',
      componentName: 'SESelect',
      size: 'large',
      type: 'multiple',
      placeholder: 'Please Select',
      rules: [
        { required: true, message: 'Please select category!!' }
      ],
      options: [
        {
          label: 'Test',
          value: '420b7fe0-b7c2-4848-9f57-a870195ac604'
        },
        {
          label: 'Industry 2',
          value: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896'
        }
      ]
    },
    {
      defaultValue: null,
      name: 'gender',
      labelName: 'Gender',
      id: 'jhEbpgY1234WcqSfA',
      componentName: 'SERadioGroup',
      options: [
        {
          label: 'Male',
          value: '420b7fe0-b7c2-4848-9f57-a870195ac604'
        },
        {
          label: 'Female',
          value: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896'
        }
      ]
    },
    {
      defaultValue: null,
      name: 'orientation',
      labelName: 'Orientation',
      id: 'jhEbpgY123412aWcqSfA',
      componentName: 'SERadioGroup',
      type: 'button',
      size: 'large',
      style: {
        width: '49%',
        marginRight: '0.5%'
      },
      rules: [
        { required: true, message: 'Please input orientation!!' }
      ],
      options: [
        {
          label: 'Landscape',
          value: '420b7fe0-b7c2-4848-9f57-a870195ac604'
        },
        {
          label: 'Potrait',
          value: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896'
        }
      ]
    },
    {
      defaultValue: null,
      name: 'favorite',
      labelName: 'Favorite',
      id: 'jhEbpg12Y1234WcqSfA',
      componentName: 'SECheckboxGroup',
      color: 'yellow',
      rules: [
        { required: true, message: 'Please input favorite!!' }
      ],
      options: [
        {
          label: 'Blue',
          value: '420b7fe0-b7c2-4848-9f57-a870195ac604'
        },
        {
          label: 'Red',
          value: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896'
        }
      ]
    },
    {
      defaultValue: null,
      name: 'datepicker',
      labelName: 'Datepicker',
      id: 'LudEgwhUZpzvbx7GZsT',
      componentName: 'SEDatePicker',
      size: 'large',
      helpText: 'ex: YYYY-MM-DD',
      placeholder: 'Input date picker',
      showTime: false,
      rules: [
        { type: 'object', required: true, message: 'Please input datepicker!!' }
      ]
    },
    {
      defaultValue: null,
      name: 'monthpicker',
      labelName: 'Monthpicker',
      id: 'LudE1234UZpzvbx7GZsT',
      componentName: 'SEMonthPicker',
      size: 'large',
      helpText: 'ex: YYYY-MM',
      placeholder: 'Input month',
      showTime: false,
      rules: [
        { type: 'object', required: true, message: 'Please input month!!' }
      ]
    },
    {
      defaultValue: null,
      name: 'rangepicker',
      labelName: 'RangePicker',
      id: 'Lua31dE1234UZpzvbx7GZsT',
      componentName: 'SERangePicker',
      size: 'large',
      helpText: 'ex: YYYY-MM-DD - YYYY-MM-DD',
      placeholder: 'Input range date',
      showTime: false,
      rules: [
        { type: 'array', required: true, message: 'Please input range date!!' }
      ]
    },
    {
      defaultValue: null,
      name: 'time-picker',
      labelName: 'TimePicker',
      id: 'LudE1235xcv4UZpzvbx7GZsT',
      componentName: 'SETimePicker',
      size: 'large',
      helpText: 'ex: YYYY-MM-DD - YYYY-MM-DD',
      placeholder: 'Input time',
      showTime: false,
      rules: [
        { type: 'object', required: true, message: 'Please input time!!' }
      ]
    },
    {
      defaultValue: null,
      name: 'switch',
      labelName: 'Please Select',
      labelField: 'Label Field',
      subLabelField: 'Label Field',
      id: 'jhEbpg12Yas156s234WcqSfA',
      componentName: 'SESwitch',
      color: 'yellow',
      rules: [
        { required: true, message: 'Please Select!!' }
      ]
    },
    {
      defaultValue: null,
      name: 'agree',
      labelName: 'Select Agree',
      labelField: 'Label Field',
      id: 'jhEbpg12Y56s234WcqSfA',
      componentName: 'SECheckbox',
      color: 'yellow',
      rules: [
        { required: true, message: 'Please Select!!' }
      ]
    }
  ],
  actions: [
    {
      label: 'Create New',
      color: 'primary',
      size: 'large',
      type: 'submit'
    },
    {
      label: 'Cancel',
      color: 'error',
      size: 'large',
      type: 'cancel'
    }
  ]
}
export default {
  components: {
    SEFormBuilder
  },
  data() {
    return {
      dataSchema
    }
  },
  methods: {
    handleCancel() {
      // console.log('cancel')
    },
    handleSuccess(e) {
      // console.log('success', e)
    },
    handleError(e) {
      // console.log('error', e)
    },
    handleSubmit(e) {
      console.log('submit', e)
    }
  }
}
</script>
