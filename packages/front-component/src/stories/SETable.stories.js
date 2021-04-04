import '@/styles/index.scss'
import { Table } from 'ant-design-vue'
import SETableBasic from '@/components/SETable/Basic.vue'
import SETableElipsisColumn from '@/components/SETable/ElipsisColumn.vue'
import SETableAjax from '@/components/SETable/Ajax.vue'
import SETableBorderTitleFooter from '@/components/SETable/BorderTitleFooter.vue'
import SETableColSpanRowSpan from '@/components/SETable/ColSpanRowSpan.vue'
import SETableFixedColumns from '@/components/SETable/FixedColumns.vue'
import SETableFixedHeader from '@/components/SETable/FixedHeader.vue'
import SETableFilterSorter from '@/components/SETable/FilterSorter.vue'
import SETableSelection from '@/components/SETable/Selection.vue'

export default {
  title: 'Components/Table',
  component: Table
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SETableBasic },
  template: '<SETableBasic />'
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle">Name</span>
    <span slot="tags" slot-scope="tags">
      <SETag
        v-for="tag in tags"
        :key="tag"
        :color="tag === 'loser' ? 'error' : tag.length > 5 ? 'light-blue' : 'green'"
      >
        {{ tag.toUpperCase() }}
      </SETag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <SEDivider type="vertical" />
      <a>Delete</a>
      <SEDivider type="vertical" />
      <a class="ant-dropdown-link"> More actions <span><i class="icon icon-angle-down" /></span> </a>
    </span>
  </SETable>
</template>

<script>
import { Table, Divider } from 'ant-design-vue'
import SETag from '@/components/SETag'

const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  components: {
    SETable: Table,
    SEDivider: Divider,
    SETag
  },
  data() {
    return {
      data,
      columns
    }
  }
}
</script>
`
    }
  }
}

export const ElipsisColumn = () => ({
  components: { SETableElipsisColumn },
  template: '<SETableElipsisColumn />'
})

ElipsisColumn.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
  </SETable>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 80
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address 1',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column Long Column',
    dataIndex: 'address',
    key: 'address 2',
    ellipsis: true
  },
  {
    title: 'Long Column Long Column',
    dataIndex: 'address',
    key: 'address 3',
    ellipsis: true
  },
  {
    title: 'Long Column',
    dataIndex: 'address',
    key: 'address 4',
    ellipsis: true
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 2 Lake Park, London No. 2 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  }
}
</script>
`
    }
  }
}

export const Ajax = () => ({
  components: { SETableAjax },
  template: '<SETableAjax />'
})

Ajax.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :columns="columns"
    :row-key="record => record.login.uuid"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <template slot="name" slot-scope="name">
      {{ name.first }} {{ name.last }}
    </template>
  </SETable>
</template>

<script>
import qs from 'qs'

const columns = [
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
]

async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
  return response // parses JSON response into native JavaScript objects
}

export default {
  data() {
    return {
      data: [],
      pagination: {},
      loading: false,
      columns
    }
  },
  mounted() {
    this.fetch()
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch(params = {}) {
      const newParams = {
        results: 10,
        ...params
      }
      const that = this

      console.log('page', this)
      this.loading = true
      const queryString = qs.stringify(newParams)

      getData('https://randomuser.me/api?' + queryString)
        .then((res) => res.json())
        .then(function (data) {
          const pagination = { ...that.pagination }
          pagination.total = 200
          that.loading = false
          that.data = data.results
          that.pagination = pagination
        })
    }
  }
}
</script>
`
    }
  }
}

export const BorderTitleFooter = () => ({
  components: { SETableBorderTitleFooter },
  template: '<SETableBorderTitleFooter />'
})

BorderTitleFooter.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :columns="columns"
    :data-source="data"
    bordered
  >
    <template slot="name" slot-scope="text">
      <a>{{ text }}</a>
    </template>
    <template slot="title" slot-scope="">
      Header
    </template>
    <template slot="footer" slot-scope="">
      Footer
    </template>
  </SETable>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sidney No. 1 Lake Park'
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  }
}
</script>
<style>
th.column-money,
td.column-money {
  text-align: right !important;
}
</style>
`
    }
  }
}

export const ColSpanRowSpan = () => ({
  components: { SETableColSpanRowSpan },
  template: '<SETableColSpanRowSpan />'
})

ColSpanRowSpan.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :columns="columns"
    :data-source="data"
    bordered
  >
    <template slot="name" slot-scope="text">
      <a>{{ text }}</a>
    </template>
  </SETable>
</template>

<script>
const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    attrs: {}
  }
  if (index === 4) {
    obj.attrs.colSpan = 0
  }
  return obj
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park'
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park'
  }
]

export default {
  data() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        customRender: (text, row, index) => {
          if (index < 4) {
            return <a href="#">{text}</a>
          }
          return {
            children: <a href="#">{text}</a>,
            attrs: {
              colSpan: 5
            }
          }
        }
      },
      {
        title: 'Age',
        dataIndex: 'age',
        customRender: renderContent
      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',
        customRender: (value, row, index) => {
          const obj = {
            children: value,
            attrs: {}
          }
          if (index === 2) {
            obj.attrs.rowSpan = 2
          }
          // These two are merged into above cell
          if (index === 3) {
            obj.attrs.rowSpan = 0
          }
          if (index === 4) {
            obj.attrs.colSpan = 0
          }
          return obj
        }
      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',
        customRender: renderContent
      },
      {
        title: 'Address',
        dataIndex: 'address',
        customRender: renderContent
      }
    ]
    return {
      data,
      columns
    }
  }
}
</script>
`
    }
  }
}

export const TableFixedColumns = () => ({
  components: { SETableFixedColumns },
  template: '<SETableFixedColumns />'
})

TableFixedColumns.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1300 }"
  >
    <a
      slot="action"
      slot-scope=""
      href="#"
    >action</a>
  </SETable>
</template>

<script>
const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' }
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park'
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  }
}
</script>
`
    }
  }
}

export const TableFixedHeader = () => ({
  components: { SETableFixedHeader },
  template: '<SETableFixedHeader />'
})

TableFixedHeader.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :columns="columns"
    :data-source="data"
    :pagination="{ pageSize: 50 }"
    :scroll="{ y: 240 }"
  />
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 150
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]

const data = []
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'Edward King ' + 1,
    age: 32,
    address: 'London, Park Lane no. ' + i
  })
}

export default {
  data() {
    return {
      data,
      columns
    }
  }
}
</script>
`
    }
  }
}

export const FilterSorter = () => ({
  components: { SETableFilterSorter },
  template: '<SETableFilterSorter />'
})

FilterSorter.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :columns="columns"
    :data-source="data"
    @change="onChange"
  />
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Jim',
        value: 'Jim'
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend']
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend']
  }
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
]

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter)
}

export default {
  data() {
    return {
      data,
      columns
    }
  },
  methods: {
    onChange
  }
}
</script>
`
    }
  }
}

export const Selection = () => ({
  components: { SETableSelection },
  template: '<SETableSelection />'
})

Selection.parameters = {
  docs: {
    source: {
      code: `<template>
  <SETable
    :row-selection="rowSelection"
    :columns="columns"
    :data-source="data"
  >
    <a slot="name" slot-scope="text">{{ text }}</a>
  </SETable>
</template>

<script>
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  }
]
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park'
  }
]

export default {
  data() {
    return {
      data,
      columns
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log({ selectedRowKeys, selectedRows })
        },
        getCheckboxProps: record => ({
          props: {
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name
          }
        })
      }
    }
  }
}
</script>
`
    }
  }
}

// export const ElipsisColumn = () => ({
//   components: { SETableElipsisColumn },
//   template: '<SETableElipsisColumn />'
// })

// ElipsisColumn.parameters = {
//   docs: {
//     source: {
//       code: `<SEModal :showModal="true" size="small" >
//   Content here ...
// </SEModal>
//       `
//     }
//   }
// }

// export const ElipsisColumn = () => ({
//   components: { SETableElipsisColumn },
//   template: '<SETableElipsisColumn />'
// })

// ElipsisColumn.parameters = {
//   docs: {
//     source: {
//       code: `<SEModal :showModal="true" size="small" >
//   Content here ...
// </SEModal>
//       `
//     }
//   }
// }

// export const ElipsisColumn = () => ({
//   components: { SETableElipsisColumn },
//   template: '<SETableElipsisColumn />'
// })

// ElipsisColumn.parameters = {
//   docs: {
//     source: {
//       code: `<SEModal :showModal="true" size="small" >
//   Content here ...
// </SEModal>
//       `
//     }
//   }
// }
