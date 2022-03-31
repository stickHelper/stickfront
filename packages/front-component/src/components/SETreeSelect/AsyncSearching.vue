<template>
  <SETreeSelect
    :multiple="true"
    :async="true"
    :load-options="loadOptions"
    :options="options"
  />
</template>

<script>
import SETreeSelect from './index.vue'
import { ASYNC_SEARCH } from '@riophae/vue-treeselect'

const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000)
}

const options = []
for (let i = 0; i <= 500; i += 1) {
  options.push({
    id: `0-${i}`,
    label: `0-${i}`
  })
}

export default {
  components: {
    SETreeSelect
  },
  data() {
    return {
      options
    }
  },
  methods: {
    loadOptions({ action, searchQuery, callback }) {
      console.log({ action, searchQuery, callback })
      if (action === ASYNC_SEARCH) {
        simulateAsyncOperation(() => {
          const options1 = [1, 2, 3, 4, 5].map(i => ({
            id: `${searchQuery}-${i}`,
            label: `${searchQuery}-${i}`
          }))
          callback(null, options1)
        })
      }
    }
  }
}
</script>
