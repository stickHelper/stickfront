<template>
  <div :class="classes">
    <div class="se-radio__item">
      <input
        :id="id"
        type="radio"
        :name="name"
        :value="value"
        :checked="checked"
        @change="$emit('change', $event.target.value)"
      >
      <label :for="id">{{ label }}</label>
    </div>

    <div v-if="type = 'solid'" class="se-radio__solid">
      <div class="se-radio__solid-item">
        Indoor
      </div>
      <div class="se-radio__solid-item">
        Outdoor
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SERadio',
  props: {
    id: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: 'Some label'
    },
    className: {
      type: String,
      default: null
    },
    checked: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['solid'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    classes() {
      return {
        'se-radio': true,
        [this.className]: this.className !== null
      }
    }
  }
}
</script>
