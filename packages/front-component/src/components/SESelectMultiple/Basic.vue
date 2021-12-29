<template>
  <div>
    <SESelectMultiple
      position="left"
      name="company"
      label="Company"
      :options="options"
      @change="handleChange"
    />
  </div>
</template>

<script>
import SESelectMultiple from './index.vue'

export default {
  components: {
    SESelectMultiple
  },
  data() {
    return {
      options: [
        { uuid: 1, name: 'data satu' },
        { uuid: 2, name: 'data dua' }
      ]
    }
  },
  methods: {
    handleChange(value) {
      console.log('object', value)
    }
  }
}
</script>
