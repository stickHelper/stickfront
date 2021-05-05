<template>
  <ATable
    :row-selection="rowSelection"
    :columns="columns"
    :data-source="data"
  >
    <span slot="tags" slot-scope="tags">
      <SETag
        v-for="tag in tags"
        :key="tag"
        style="margin-bottom: 5px"
        :color="tag === 'loser' ? 'error' : tag.length > 5 ? 'light-blue' : 'blue'"
      >
        {{ tag.toUpperCase() }}
      </SETag>
    </span>
    <span slot="slot" slot-scope="slot">
      <SESelect
        :id="slot.key"
        mode="multiple"
        count="slot selected"
        :default-value="slot.slots"
        style="width: 240px"
        placeholder="Please select"
        :options="items"
      />
    </span>
    <span slot="action" slot-scope="action">
      <SEDropdown :id="action.key" position="right">
        <i class="icon icon-ellipsis-v" />
        <template v-slot:list>
          <li class="se-dropdown__item">
            Edit
          </li>
          <li class="se-dropdown__item">
            Delete
          </li>
        </template>
      </SEDropdown>
    </span>
  </ATable>
</template>

<script>
import { Table } from 'ant-design-vue'
import SETag from '@/components/SETag'
import SESelect from '@/components/SESelect'
import SEDropdown from '@/components/SEDropdown'

const columns = [
  {
    dataIndex: 'name',
    key: 'name'
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
    title: 'Slot',
    key: 'slot',
    scopedSlots: { customRender: 'slot' }
  },
  {
    title: 'Action',
    align: 'center',
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
    tags: ['nice', 'developer'],
    slots: ['a1', 'b1']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
    slots: ['c1', 'b1']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    slots: ['d1', 'b1']
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
    slots: ['b1', 'c1']
  }
]

export default {
  components: {
    ATable: Table,
    SETag,
    SESelect,
    SEDropdown
  },
  data() {
    return {
      data,
      columns,
      items:[
        { label: 'a1', value: 'a1' },
        { label: 'b1', value: 'b1' },
        { label: 'c1', value: 'c1' },
        { label: 'd1', value: 'd1' }
      ]
    }
  },
  computed: {
    rowSelection() {
      return {
        onChange: (selectedRowKeys, selectedRows) => {
          // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
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
