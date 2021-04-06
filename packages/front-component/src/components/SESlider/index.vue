<template>
  <div
    :id="id"
    :class="classes"
  >
    <vue-slider
      v-if="type === 'range'"
      v-model="rangeValue"
      :min="min"
      :max="max"
      :enable-cross="false"
      @change="changeSlide"
    />
    <vue-slider
      v-else
      v-model="singleValue"
      :min="min"
      :max="max"
      @change="changeSlide"
    />
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default {
  name: 'SESlider',
  components: {
    VueSlider
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
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['range'].indexOf(value) !== -1
      }
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    value: {
      type: [Number, Array],
      default: null
    }
  },
  data() {
    return {
      singleValue: this.value,
      rangeValue: [this.min, this.max]
    }
  },
  computed: {
    classes() {
      return {
        'se-slider': true,
        [this.className]: this.className !== null,
        [`se-slider--${this.type}`]: this.type !== null
      }
    }
  },
  methods: {
    changeSlide(value) {
      this.$emit('changeSlide', value)
    }
  }
}
</script>
