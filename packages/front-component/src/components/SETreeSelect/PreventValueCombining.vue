<template>
  <div>
    <SETreeSelect
      :multiple="true"
      :options="options"
      :values="value"
      :value-consists-of="valueConsistsOf"
      @change="hangdleChange"
    />
    <br>
    <pre><code>{{ value }}</code></pre>
    <br>
    <p><strong>Value consists of:</strong></p>
    <p class="options">
      <label><input
        v-model="valueConsistsOf"
        type="radio"
        value="ALL"
        class="mr-xs-1"
      >All</label><br>
      <label><input
        v-model="valueConsistsOf"
        type="radio"
        value="BRANCH_PRIORITY"
        class="mr-xs-1"
      >Branch priority</label><br>
      <label><input
        v-model="valueConsistsOf"
        type="radio"
        value="LEAF_PRIORITY"
        class="mr-xs-1"
      >Leaf priority</label><br>
      <label><input
        v-model="valueConsistsOf"
        type="radio"
        value="ALL_WITH_INDETERMINATE"
        class="mr-xs-1"
      >All with indeterminate</label>
    </p>
  </div>
</template>

<script>
import SETreeSelect from './index.vue'

export default {
  components: {
    SETreeSelect
  },
  data() {
    return {
      value: [],
      valueConsistsOf: 'BRANCH_PRIORITY',
      options: [{
        id: 'company',
        label: 'Company 🏢',
        children: [{
          id: 'team-i',
          label: 'Team I 👥',
          children: [{
            id: 'person-a',
            label: 'Person A 👱'
          }, {
            id: 'person-b',
            label: 'Person B 🧔'
          }]
        }, {
          id: 'team-ii',
          label: 'Team II 👥',
          children: [{
            id: 'person-c',
            label: 'Person C 👳'
          }, {
            id: 'person-d',
            label: 'Person D 👧'
          }]
        }, {
          id: 'person-e',
          label: 'Person E 👩'
        }]
      }]
    }
  },
  methods: {
    hangdleChange(payload) {
      this.value = payload
    }
  }
}
</script>
