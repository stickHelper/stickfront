<template>
  <SESelectMultiple
    position="left"
    name="company"
    label="Company"
    :options="data"
    label-in-value
    :value="value"
    :is-fetching="fetching"
    @change="handleChange"
    @select="handleSelect"
    @search="fetchUser"
  />
</template>
<script>
import debounce from 'lodash.debounce'
import SESelectMultiple from './index.vue'

export default {
  components: {
    SESelectMultiple
  },
  data() {
    this.lastFetchId = 0
    this.fetchUser = debounce(this.fetchUser, 800)
    return {
      data: [],
      value: [],
      fetching: false
    }
  },
  methods: {
    fetchUser(value) {
      this.lastFetchId += 1
      const fetchId = this.lastFetchId
      this.data = []
      this.fetching = true
      fetch(`https://randomuser.me/api/?results=10&name=${value}`)
        .then(response => response.json())
        .then(body => {
          if (fetchId !== this.lastFetchId) {
            // for fetch callback order
            return
          }
          const data = body.results.map((user) => ({
            uuid: user.login.uuid,
            name: `${user.name.first} ${user.name.last}`
          }))
          this.data = data
          console.log(this.data)
          this.fetching = false
        })
    },
    handleChange(value) {
      console.log('change', value)
      Object.assign(this, {
        value,
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
