export default {
  data: [
    {
      uuid: 'c5ef7319-9f8f-4e74-8856-8834c66e611d',
      name: 'Brand Name',
      description: 'Brand Description',
      industry_name: 'Industry 2',
      __actions: [
        {
          icon: null,
          label: 'Edit',
          options: {
            type: 'formBuilder',
            componentName: 'ModalFormBuilder',
            formBuilder: {
              submitMethod: 'patch',
              submitUrl: 'http://asset-inventory.test/api/brand/c5ef7319-9f8f-4e74-8856-8834c66e611d',
              schemas: [
                {
                  valueInput: 'Brand Name',
                  labelName: 'Brand Name',
                  inputName: 'name',
                  type: 'text',
                  id: 'kHR7R6W5KYBC4mFi',
                  componentName: 'SETextfield'
                },
                {
                  valueInput: '987e1ef3-5bd9-4f99-bb4d-498a1bcfe896',
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
                  id: 'zHFMiBcafs2hUlQ3',
                  componentName: 'InputSelect'
                },
                {
                  valueInput: 'Brand Description',
                  labelName: 'Description',
                  inputName: 'description',
                  id: 'dy8TuBDSyXnDBcAY',
                  componentName: 'SETextarea'
                }
              ],
              actions: [
                {
                  label: 'Save Changes'
                }
              ]
            },
            modalOptions: {
              label: null,
              title: null
            }
          }
        },
        {
          icon: null,
          label: 'Delete',
          options: {
            type: 'confirmationDialog',
            buttonLabel: 'Delete',
            submitUrl: 'http://asset-inventory.test/api/brand/c5ef7319-9f8f-4e74-8856-8834c66e611d',
            submitMethod: 'delete',
            title: 'Delete Brand Name',
            text: 'Are you sure you want to delete this?',
            buttonColor: 'red'
          }
        }
      ]
    }
  ],
  links: {
    first: 'http://asset-inventory.test/api/brand?page=1',
    last: 'http://asset-inventory.test/api/brand?page=1',
    prev: null,
    next: null
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links: [
      {
        url: null,
        label: '&laquo; Previous',
        active: false
      },
      {
        url: 'http://asset-inventory.test/api/brand?page=1',
        label: '1',
        active: true
      },
      {
        url: null,
        label: 'Next &raquo;',
        active: false
      }
    ],
    path: 'http://asset-inventory.test/api/brand',
    per_page: 15,
    to: 1,
    total: 1
  }
}
