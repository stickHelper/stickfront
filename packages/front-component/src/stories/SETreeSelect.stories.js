import '@/styles/index.scss'
import SETreeSelect from '@/components/SETreeSelect/index.vue'
import BasicExample from '@/components/SETreeSelect/Basic.vue'

export default {
  title: 'Data Entry/TreeSelect',
  component: SETreeSelect,
  argTypes: {
    // mode: { control: { type: 'select', options: ['multiple', 'tags', 'default'] } },
    size: { control: { type: 'select', options: ['large', 'small', 'default'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasicExample },
  template: `<div>
    <BasicExample />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `
      <SETreeSelect />
`
    }
  }
}

// export const SelectAjax = () => ({
//   components: { SelectAjaxExample },
//   template: `<div>
//     <SelectAjaxExample />
//   </div>`
// })

// SelectAjax.parameters = {
//   docs: {
//     source: {
//       code: `<template>
//       <SETreeSelect
//         position="left"
//         name="company"
//         label="Company"
//         :options="data"
//         label-in-value
//         :value="value"
//         :is-fetching="fetching"
//         @change="handleChange"
//         @select="handleSelect"
//         @search="fetchUser"
//       />
//     </template>
//     <script>
//     import debounce from 'lodash.debounce'
//     import SETreeSelect from './index.vue'

//     export default {
//       components: {
//         SETreeSelect
//       },
//       data() {
//         this.lastFetchId = 0
//         this.fetchUser = debounce(this.fetchUser, 800)
//         return {
//           data: [],
//           value: [],
//           fetching: false
//         }
//       },
//       methods: {
//         fetchUser(value) {
//           this.lastFetchId += 1
//           const fetchId = this.lastFetchId
//           this.data = []
//           this.fetching = true
//           fetch('https://randomuser.me/api/?results=10&name=' + value)
//             .then(response => response.json())
//             .then(body => {
//               if (fetchId !== this.lastFetchId) {
//                 // for fetch callback order
//                 return
//               }
//               const data = body.results.map((user) => ({
//                 uuid: user.login.uuid,
//                 name: user.name.first + ' ' + user.name.last
//               }))
//               this.data = data
//               console.log(this.data)
//               this.fetching = false
//             })
//         },
//         handleChange(value) {
//           console.log('change', value)
//           Object.assign(this, {
//             value,
//             data: [],
//             fetching: false
//           })
//         },
//         handleSelect(value) {
//           console.log('select', value)
//         }
//       }
//     }
//     </script>

// `
//     }
//   }
// }
