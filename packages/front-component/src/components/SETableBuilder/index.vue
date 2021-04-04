<template>
  <div
    :id="id"
    :class="classes"
  >
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
  </div>
</template>

<script>
import { Table } from 'ant-design-vue'
import qs from 'qs'

async function fetchingAPI(url = '', method, data = {}) {
    // Default options are marked with *
  const response = await fetch(url, {
    method: method, // *GET, POST, PUT, DELETE, etc.
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
}

export default {
  name: 'SETableBuilder',
  components: {
    SETable: Table
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
      data: [],
      pagination: {},
      loading: false,
      columns: this.dataSchemas.column
    }
  },
  computed: {
    classes() {
      return {
        'se-table__builder': true,
        [this.className]: this.className !== null
      }
    }
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

      fetchingAPI(`${this.apiUrl}?${queryString}`, 'GET')
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
