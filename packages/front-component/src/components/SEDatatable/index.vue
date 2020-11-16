<template>
  <div
    :id="id"
    :class="classes"
  >
    <div class="row">
      <div class="col-md-12 se-datatable--content">
        <div class="divTable">
          <div class="divTableHeading">
            <div class="divTableRow">
              <div
                v-for="(head, index) in tHead"
                :key="`head-${index}`"
                class="divTableHead"
                @click="handleSort(head)"
              >
                <div v-if="checkable && head.key === 'checkbox'">
                  <SECheckbox
                    :id="`checked-all-table-${index}`"
                    name="check-all"
                    :value="head.key"
                    size="small"
                    @change="checkAllTable($event)"
                  />
                </div>
                <div
                  v-else
                  :class="head.key === 'action' || head.key === 'status' ? 'flex-center' : null"
                >
                  {{ head.label }}
                  <span
                    v-if="head.sortable"
                    class="se-datatable--sort"
                  >
                    <i :class="`icon icon-arrow-up ${sortBy === head.key && sortDesc ? 'active' : null}`" />
                    <i :class="`icon icon-arrow-down ${sortBy === head.key && sortDesc ? null : 'active'}`" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="dataBody.length > 0"
            class="divTableBody"
          >
            <div
              v-for="(body, index) in dataBody"
              :key="`tr-${index}`"
              class="divTableRow"
            >
              <div
                v-for="(head, idx) in tHead"
                :key="`td-${idx}`"
                class="divTableCell"
                :class="statusType === 'info' && head.key === 'status' ? `status-bg-${body[head.key].color}` : null"
              >
                <SEDatatableActions
                  v-if="head.key === 'action'"
                  :index="index"
                  :actions="actions"
                  :type="actionType"
                  @triggerAction="triggerAction($event)"
                />
                <SEDatatableStatus
                  v-else-if="head.key === 'status'"
                  :index="index"
                  :type="statusType"
                  :status-data="body[head.key]"
                  @triggerStatus="triggerStatus($event, body, index)"
                />
                <SEDatatableEdit
                  v-else-if="editTable"
                  :data-cell="body[head.key]"
                  @changeValue="changeValue($event, body, head.key, index)"
                />
                <SECheckbox
                  v-else-if="checkable && head.key === 'checkbox'"
                  :id="`checked-cell-${index}`"
                  name="check-cell"
                  value="cell"
                  size="small"
                  :checked="body[head.key]"
                  @change="checkTableCell($event, body, index)"
                />
                <div v-else>
                  {{ body[head.key] }}
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            class="divTableBody"
          >
            <div class="divTableRow">
              Not Data Found
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="isPagination"
        class="col-md-12 se-datatable--footer"
      >
        <div>
          <select
            class="footer-row"
          >
            <option
              v-for="(row, index) in rowsList"
              :key="`footer-row-${index}`"
              :value="row"
              :selected="row == totalRows"
            >
              {{ row }}
            </option>
          </select>

          <span class="footer-info">
            Show 1 - 10 of 3600
          </span>
        </div>
        <div>
          <SEPagination @change="changePage($event)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SEDatatableActions from './components/SEDatatableActions'
import SEDatatableStatus from './components/SEDatatableStatus'
import SEDatatableEdit from './components/SEDatatableEdit'
import SEPagination from '../SEPagination'
import SECheckbox from '../SECheckbox'

export default {
  name: 'SEDatatable',
  components: {
    SEPagination,
    SECheckbox,
    SEDatatableActions,
    SEDatatableStatus,
    SEDatatableEdit
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
    totalRows: {
      type: [Number, String],
      default: 10
    },
    bulkAction: {
      type: Boolean,
      default: false
    },
    tHead: {
      type: Array,
      default: () => []
    },
    tBody: {
      type: Array,
      default: () => []
    },
    tableLayoutFixed: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => []
    },
    checkable: {
      type: Boolean,
      default: false
    },
    editTable: {
      type: Boolean,
      default: false
    },
    isPagination: {
      type: Boolean,
      default: true
    },
    actionType: {
      type: String,
      default: 'list',
      validator: function (value) {
        return ['list', 'icon'].indexOf(value) !== -1
      }
    },
    statusType: {
      type: String,
      default: 'info',
      validator: function (value) {
        return ['info', 'switch'].indexOf(value) !== -1
      }
    },
    headPosition: {
      type: String,
      default: null,
      validator: function (value) {
        return ['center', 'left', 'right'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      sortBy: null,
      sortDesc: false,
      rowsList: [10, 25, 50, 100],
      dataBody: this.tBody
    }
  },
  computed: {
    classes() {
      return {
        'se-datatable': true,
        [this.className]: this.className !== null
      }
    },
    layoutFixed() {
      return {
        'se-datatable--layout-fixed': this.tableLayoutFixed
      }
    }
  },
  watch: {
    sortBy(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    },
    sortDesc(val) {
      this.$emit('sort', {
        sortBy: this.sortBy,
        sortDesc: this.sortDesc
      })
    }
  },
  methods: {
    loadPerPage(val) {
      this.$emit('per_page', this.meta.per_page)
    },
    changePage(val) {
      this.$emit('pagination', val)
    },
    handleSort(head) {
      if (head.sortable) {
        this.sortBy = head.key
        this.sortDesc = !this.sortDesc
      }
    },
    triggerAction(event) {
      this.$emit('triggerAction', event)
    },
    triggerStatus(event, body, index) {
      this.$emit('triggerStatus', { event, body, index })
    },
    checkAllTable(event) {
      this.$emit('checkAllTable', event)
    },
    checkTableCell(event, body, index) {
      this.$emit('checkTableCell', { event, body, index })
    },
    changeValue(event, body, key, index) {
      this.$emit('changeValue', { event, body, key, index })
    }
  }
}
</script>
