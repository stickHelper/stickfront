<template>
  <ATable
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
  </ATable>
</template>

<script>
import { Table } from 'ant-design-vue'

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
  components: {
    ATable: Table
  },
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
