<template>
  <div
    :id="id"
    :class="classes"
  >
    <label
      v-if="labelName && labelName !== ''"
      class="se-daterangepicker__label"
    >{{ labelName }}</label>
    <div class="se-daterangepicker__wrapper">
      <date-range-picker
       ref="picker"
       v-model="dateRange"
       :single-date-picker="typePicker"
       :auto-apply="isAutoApply"
       :append-to-body="isAppendToBody"
       :locale-data="{ firstDay: 1, format: formatDate, monthNames: calendarMonthsName, daysOfWeek: calendarDaysName }"
       :ranges="isShowRanges"
       :disabled="isDisabled"
       @update="dateUpdate"
      >
        <template #input="picker">
          <div class="se-daterangepicker__input">
            <span
              v-if="isDateRangeEmpty()"
              class="se-daterangepicker__placeholder"
            >Select the date</span>
            <span
              v-else
              class="se-daterangepicker__value"
            >{{ dateRange.startDate }} - {{ dateRange.endDate }}</span>
          </div>
          <i
            :class="[
              'se-daterangepicker__icon icon',
              isDateRangeEmpty() ? 'icon-calender' : 'icon-close'
            ]"
            @click="clearDateRange"
          />
        </template>
      </date-range-picker>
    </div>
    <div
      v-if="info && info !== ''"
      class="se-daterangepicker__info"
    >
      {{ info }}
    </div>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker'
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import dateUtil from './dateUtils'

export default {
  name: 'SEDateRangePicker',
  components: {
    DateRangePicker
  },
  props: {
    id: {
      type: String,
      default: null
    },
    labelName: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    info: {
      type: String,
      default: null
    },
    typePicker: {
      type: String,
      default: 'range'
    },
    formatDate: {
      type: String,
      default: 'dd-mm-yyyy'
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    calendarDaysName: {
      type: Array,
      default: function () {
        // if single key throw warning on vue
        return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    calendarMonthsName: {
      type: Array,
      default: function () {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    },
    isAutoApply: {
      type: Boolean,
      default: true
    },
    isAppendToBody: {
      type: Boolean,
      default: true
    },
    isShowRanges: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isInline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const startDate = this.startDate
    const endDate = this.endDate

    return {
      dateRange: { startDate, endDate }
    }
  },
  computed: {
    classes() {
      return {
        'se-daterangepicker':true,
        'se-daterangepicker--success': this.isSuccess,
        'se-daterangepicker--error': this.isError,
        'se-daterangepicker--disabled': this.isDisabled,
        'se-daterangepicker--inline': this.isInline,
        [`se-daterangepicker--${this.size}`]: this.size !== null,
        [this.className]: this.className !== null
      }
    }
  },
  methods: {
    dateUpdate(values) {
// must return year, month, day in correct order
      this.dateRange.startDate = dateUtil.format(values.startDate, 'yyyy-mm-dd')
      this.dateRange.endDate = dateUtil.format(values.endDate, 'yyyy-mm-dd')

      this.$emit('update', { ...values })
      console.log('event: update', { ...values })
    },
    isDateRangeEmpty() {
      if (this.dateRange.startDate === null && this.dateRange.endDate === null) return true

      return false
    },
    dateFormat(classes, date) {
      const yesterday = new Date()
      const d1 = dateUtil.format(date, this.formatDate)
      const d2 = dateUtil.format(yesterday.setDate(yesterday.getDate() - 1), this.formatDate)

      if (!classes.disabled) {
        classes.disabled = d1 === d2
      }

      return classes
    },
    clearDateRange() {
      this.dateRange.startDate = null
      this.dateRange.endDate = null
    }
  }
}
</script>
