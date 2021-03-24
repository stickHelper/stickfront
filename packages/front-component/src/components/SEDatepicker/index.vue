<template>
  <div
    :id="id"
    :class="classes"
  >
    <label
      v-if="labelName && labelName !== ''"
      :for="inputName"
    >
      {{ labelName }}
    </label>
    <date-picker
      v-model="date"
      :value="valueInput"
      value-type="format"
      :type="type"
      :placeholder="placeholder"
      @change="dateChange"
    />
    <div class="se-datepicker__helper">
      {{ helper }}
    </div>
    <div class="se-datepicker__info">
      {{ info }}
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'SEDatepicker',
  components: {
    DatePicker
  },
  props: {
    id: {
      type: String,
      default: null
    },
    inputName: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'date',
      validator: function (value) {
        return ['date', 'month', 'year', 'datetime', 'time', 'week'].indexOf(value) !== -1
      }
    },
    labelName: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: ''
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    valueInput: {
      type: String,
      default: null
    },
    isError: {
      type: Boolean,
      default: false
    },
    isSuccess: {
      type: Boolean,
      default: false
    },
    info: {
      type: String,
      default: null
    },
    helper: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
      validator: function (value) {
        return ['small'].indexOf(value) !== -1
      }
    }
  },
  data() {
    return {
      date: ''
    }
  },
  computed: {
    classes() {
      return {
        'se-datepicker': true,
        [`se-datepicker__${this.size}`]: this.size !== null,
        [this.className]: this.className !== null,
        disabled: this.isDisabled,
        error: this.isError,
        success: this.isSuccess
      }
    },
    name() {
      return this.inputName !== null ? this.inputName : null
    }
  },
  methods: {
    dateChange(value) {
      console.log('value', value)
      this.$emit('change', value)
    }
  }
}
</script>
