<template>
  <SETableBuilder />
</template>

<script>
import SETableBuilder from './index'

const dataSchema = {
  headerActions: [
    {
      componentName: 'ModalFormBuilder',
      formBuilder: {
        submitMethod: 'post',
        submitUrl: 'http://asset-inventory.test/api/brand',
        schemas: [
          {
            valueInput: null,
            labelName: 'Brand Name',
            inputName: 'name',
            type: 'text',
            id: 'ZOg8NkiO5skg8vwy',
            componentName: 'SETextfield'
          },
          {
            valueInput: null,
            inputName: 'industry_uuid',
            labelName: 'Industry',
            options: [
              {
                value: '420b7fe0-b7c2-4848-9f57-a870195ac604',
                name: 'Test'
              },
              {
                value: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896',
                name: 'Industry 2'
              }
            ],
            id: 'XiE5AOkBsVph0czt',
            componentName: 'InputSelect'
          },
          {
            valueInput: null,
            labelName: 'Description',
            inputName: 'description',
            id: 'zEDQpQ25oYPZTc3d',
            componentName: 'SETextarea'
          }
        ],
        actions: [
          {
            label: 'Create New'
          }
        ]
      },
      modalOptions: {
        label: 'Create New',
        title: 'Create New Brand',
        type: 'Link'
      }
    }
  ],
  column: [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      width: '20%',
      scopedSlots: { customRender: 'name' }
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' }
      ],
      width: '20%'
    },
    {
      title: 'Email',
      dataIndex: 'email'
    }
  ],
  apiUrl: 'https://randomuser.me/api'
}

export default {
  components: {
    SETableBuilder
  },
  data() {
    return {
      dataSchema
    }
  }
}
</script>
