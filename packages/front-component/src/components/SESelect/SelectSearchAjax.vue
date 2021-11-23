<template>
  <SESelect
    placeholder="Please select one"
    :options="data"
    :show-search="true"
    label-in-value
    :filter-option="false"
    :is-fetching="fetching"
    @change="handleChange"
    @select="handleSelect"
    @search="fetchUser"
  />
</template>
<script>
import debounce from 'lodash.debounce'
import SESelect from './index.vue'

export default {
  components: {
    SESelect
  },
  data() {
    this.lastFetchId = 0
    this.fetchUser = debounce(this.fetchUser, 800)
    return {
      data: [],
      value: '',
      fetching: false
    }
  },
  methods: {
    fetchUser(value) {
      console.log('fetching user', value)
      this.lastFetchId += 1
      const fetchId = this.lastFetchId
      this.data = []
      this.fetching = true
      fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(body => {
          if (fetchId !== this.lastFetchId) {
            // for fetch callback order
            return
          }
          const data = body.results.map(user => ({
            label: `${user.name.first} ${user.name.last}`,
            value: user.login.username
          }))
          this.data = data
          this.fetching = false
        })
    },
    handleChange(value) {
      console.log('change', value)
      Object.assign(this, {
        value: value.key,
        data: [],
        fetching: false
      })
    },
    handleSelect(value) {
      console.log('select', value)
    }
  }
}
</script>
