import '@/styles/index.scss'
import SETreeSelect from '@/components/SETreeSelect/index.vue'
import BasicExample from '@/components/SETreeSelect/Basic.vue'
import MoreFeatureExample from '@/components/SETreeSelect/MoreFeature.vue'
import DelayedLoadingExample from '@/components/SETreeSelect/DelayedLoading.vue'
import AsyncSearchingExample from '@/components/SETreeSelect/AsyncSearching.vue'

export default {
  title: 'Data Entry/TreeSelect',
  component: SETreeSelect,
  argTypes: {
    // mode: { control: { type: 'select', options: ['multiple', 'tags', 'default'] } },
    size: { control: { type: 'select', options: ['large', 'small', 'default'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BasicExample },
  template: `<div>
    <BasicExample />
  </div>`
})

export const Default = Template.bind({})
Default.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <SETreeSelect
      :multiple="true"
      :options="options"
      :limit="3"
      :limit-text="(count) => '+'+count+'...'"
      placeholder="Select your favourite(s)..."
      @change="handleChange"
      @select="handleSelect"
    />
    <br>
    <SETreeSelect
      :multiple="true"
      :options="options"
      :limit="3"
      size="large"
      placeholder="Select your favourite(s)..."
      @change="handleChange"
      @select="handleSelect"
    />
  </div>
</template>

<script>
const options = [{
  id: 'fruits',
  label: 'Fruits',
  children: [{
    id: 'apple',
    label: 'Apple 🍎',
    isNew: true
  }, {
    id: 'grapes',
    label: 'Grapes 🍇'
  }, {
    id: 'pear',
    label: 'Pear 🍐'
  }, {
    id: 'strawberry',
    label: 'Strawberry 🍓'
  }, {
    id: 'watermelon',
    label: 'Watermelon 🍉'
  }]
}, {
  id: 'vegetables',
  label: 'Vegetables',
  children: [{
    id: 'corn',
    label: 'Corn 🌽'
  }, {
    id: 'carrot',
    label: 'Carrot 🥕'
  }, {
    id: 'eggplant',
    label: 'Eggplant 🍆'
  }, {
    id: 'tomato',
    label: 'Tomato 🍅'
  }]
}]

export default {
  data() {
    return {
      value: [],
      options
    }
  },
  methods: {
    handleChange(value) {
      console.log('change', { value })
    },
    handleSelect(value) {
      console.log('select', { value })
    }
  }
}
</script>    
`
    }
  }
}

export const MoreFeature = () => ({
  components: { MoreFeatureExample },
  template: `<div>
    <MoreFeatureExample />
  </div>`
})

MoreFeature.parameters = {
  docs: {
    source: {
      code: `<template>
  <div>
    <div :dir="rtl ? 'rtl' : 'ltr'">
      <SETreeSelect
        v-model="value"
        name="demo"
        :multiple="multiple"
        :clearable="clearable"
        :searchable="searchable"
        :disabled="disabled"
        :open-on-click="openOnClick"
        :open-on-focus="openOnFocus"
        :clear-on-select="clearOnSelect"
        :close-on-select="closeOnSelect"
        :always-open="alwaysOpen"
        :append-to-body="appendToBody"
        :options="options"
        :limit="3"
        :max-height="200"
      />
    </div>
    <br>
    <pre><code>{{ value }}</code></pre>
    <br>
    <p>
      <label><input v-model="multiple" type="checkbox" class="mr-xs-1">Multi-select</label>
      <label><input v-model="clearable" type="checkbox" class="mr-xs-1">Clearable</label>
      <label><input v-model="searchable" type="checkbox" class="mr-xs-1">Searchable</label>
      <label><input v-model="disabled" type="checkbox" class="mr-xs-1">Disabled</label>
    </p>
    <p>
      <label><input v-model="openOnClick" type="checkbox" class="mr-xs-1">Open on click</label>
      <label><input v-model="openOnFocus" type="checkbox" class="mr-xs-1">Open on focus</label>
    </p>
    <p>
      <label><input v-model="clearOnSelect" type="checkbox" class="mr-xs-1">Clear on select</label>
      <label><input v-model="closeOnSelect" type="checkbox" class="mr-xs-1">Close on select</label>
    </p>
    <p>
      <label><input v-model="alwaysOpen" type="checkbox" class="mr-xs-1">Always open</label>
      <label><input v-model="appendToBody" type="checkbox" class="mr-xs-1">Append to body</label>
      <label><input v-model="rtl" type="checkbox" class="mr-xs-1">RTL mode</label>
    </p>
  </div>
</template>

<script>
const options = [{
  id: 'fruits',
  label: 'Fruits',
  children: [{
    id: 'apple',
    label: 'Apple 🍎',
    isNew: true
  }, {
    id: 'grapes',
    label: 'Grapes 🍇'
  }, {
    id: 'pear',
    label: 'Pear 🍐'
  }, {
    id: 'strawberry',
    label: 'Strawberry 🍓'
  }, {
    id: 'watermelon',
    label: 'Watermelon 🍉'
  }]
}, {
  id: 'vegetables',
  label: 'Vegetables',
  children: [{
    id: 'corn',
    label: 'Corn 🌽'
  }, {
    id: 'carrot',
    label: 'Carrot 🥕'
  }, {
    id: 'eggplant',
    label: 'Eggplant 🍆'
  }, {
    id: 'tomato',
    label: 'Tomato 🍅'
  }]
}]

export default {
  data() {
    return {
      multiple: true,
      clearable: true,
      searchable: true,
      disabled: false,
      openOnClick: true,
      openOnFocus: false,
      clearOnSelect: true,
      closeOnSelect: false,
      alwaysOpen: false,
      appendToBody: false,
      rtl: false,
      value: ['a'],
      options
    }
  },
  watch: {
    multiple(newValue) {
      if (newValue) {
        this.value = this.value ? [this.value] : []
      } else {
        this.value = this.value[0]
      }
    }
  }
}
</script>

`
    }
  }
}

export const DelayedLoading = () => ({
  components: { DelayedLoadingExample },
  template: `<div>
    <DelayedLoadingExample />
  </div>`
})

DelayedLoading.parameters = {
  docs: {
    source: {
      code:`<template>
  <SETreeSelect
    v-model="value"
    :multiple="true"
    :options="options"
    :load-options="loadOptions"
    placeholder="Try expanding any folder option..."
  />
</template>

<script>
import { LOAD_CHILDREN_OPTIONS } from '@riophae/vue-treeselect'

// We just use 'setTimeout()' here to simulate an async operation
// instead of requesting a real API server for demo purpose.
const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000)
}

export default {
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
`
    }
  }
}

export const AsyncSearching = () => ({
  components: { AsyncSearchingExample },
  template: `<div>
    <AsyncSearchingExample />
  </div>`
})

AsyncSearching.parameters = {
  docs: {
    source: {
      code:`<template>
  <SETreeSelect
    :multiple="true"
    :async="true"
    :load-options="loadOptions"
  />
</template>

<script>
import { ASYNC_SEARCH } from '@riophae/vue-treeselect'

const simulateAsyncOperation = fn => {
  setTimeout(fn, 2000)
}

export default {
  methods: {
    loadOptions({ action, searchQuery, callback }) {
      if (action === ASYNC_SEARCH) {
        simulateAsyncOperation(() => {
          const options = [1, 2, 3, 4, 5].map(i => ({
            id: searchQuery+'-'+i,
            label: searchQuery+'-'+i
          }))
          callback(null, options)
        })
      }
    }
  }
}
</script>
`
    }
  }
}
