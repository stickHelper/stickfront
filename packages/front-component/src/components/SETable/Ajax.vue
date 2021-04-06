<template>
  <ATable
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
  </ATable>
</template>

<script>
import { Table } from 'ant-design-vue'
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
  components: {
    ATable: Table
  },
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

      this.loading = true
      const queryString = qs.stringify(newParams)

      getData(`https://randomuser.me/api?${queryString}`)
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
