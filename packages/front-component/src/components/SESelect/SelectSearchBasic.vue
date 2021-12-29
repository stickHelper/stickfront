<template>
  <SESelect
    placeholder="Please select one"
    :options="[
      { label: 'Jack', value: 'jack', key: 'as123djh' },
      { label: 'Lucy', value: 'lucy', key: 'zv23sd' },
      { label: 'Yiminghe', value: 'yiminghe', key: 'asf1245' }
    ]"
    :show-search="true"
    label-in-value
    @change="handleChangeSelect"
    @search="handleSearch"
    @select="handleSelect"
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
    },
    handleSelect(value) {
      console.log('select', value)
    }
  }
}
</script>

<style>

</style>
