<template>
  <SESelect
    placeholder="Please select one"
    :options="[
      { label: 'jack', value: 'jack' },
      { label: 'lucy', value: 'lucy' },
      { label: 'Yiminghe', value: 'yiminghe' }
    ]"
    :show-search="true"
    @change="handleChangeSelect"
    @search="handleSearch"
  />
</template>

<script>
import SESelect from './index.vue'
export default {
  name: 'SelectSearchBasic',
  components: {
    SESelect
  },
  methods: {
    handleChangeSelect(value) {
      console.log(value)
    },
    handleSearch(value) {
      console.log(value)
    }
  }
}
</script>

<style>

</style>
