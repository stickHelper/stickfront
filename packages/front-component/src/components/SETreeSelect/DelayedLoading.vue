<template>
  <div>
    <SETreeSelect
      v-model="value"
      :multiple="true"
      :options="options"
      :load-options="loadOptions"
      placeholder="Try expanding any folder option..."
    />
    <br>
    <pre><code>{{ value }}</code></pre>
    <br>
  </div>
</template>

<script>
import SETreeSelect from './index.vue'
import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'

// We just use `setTimeout()` here to simulate an async operation
// instead of requesting a real API server for demo purpose.
const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000)
}

export default {
  components: {
    SETreeSelect
  },
  data() {
    return {
      value: null,
      options: [{
        id: 'success',
        label: 'With children',
        // Declare an unloaded branch node.
        children: null
      }, {
        id: 'no-children',
        label: 'With no children',
        children: null
      }, {
        id: 'failure',
        label: 'Demonstrates error handling',
        children: null
      }]
    }
  },
  methods: {
    loadOptions({ action, parentNode, callback }) {
      // Typically, do the AJAX stuff here.
      // Once the server has responded,
      // assign children options to the parent node & call the callback.

      if (action === LOAD_CHILDREN_OPTIONS) {
        switch (parentNode.id) {
          case 'success': {
            simulateAsyncOperation(() => {
              parentNode.children = [{
                id: 'child',
                label: 'Child option'
              }]
              callback()
            })
            break
          }
          case 'no-children': {
            simulateAsyncOperation(() => {
              parentNode.children = []
              callback()
            })
            break
          }
          case 'failure': {
            simulateAsyncOperation(() => {
              callback(new Error('Failed to load options: network error.'))
            })
            break
          }
          default: /* empty */
        }
      }
    }
  }
}
</script>
