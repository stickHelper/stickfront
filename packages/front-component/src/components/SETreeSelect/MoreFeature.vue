<template>
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
      <label><input
        v-model="multiple"
        type="checkbox"
        class="mr-xs-1"
      >Multi-select</label>
      <label><input
        v-model="clearable"
        type="checkbox"
        class="mr-xs-1"
      >Clearable</label>
      <label><input
        v-model="searchable"
        type="checkbox"
        class="mr-xs-1"
      >Searchable</label>
      <label><input
        v-model="disabled"
        type="checkbox"
        class="mr-xs-1"
      >Disabled</label>
    </p>
    <p>
      <label><input
        v-model="openOnClick"
        type="checkbox"
        class="mr-xs-1"
      >Open on click</label>
      <label><input
        v-model="openOnFocus"
        type="checkbox"
        class="mr-xs-1"
      >Open on focus</label>
    </p>
    <p>
      <label><input
        v-model="clearOnSelect"
        type="checkbox"
        class="mr-xs-1"
      >Clear on select</label>
      <label><input
        v-model="closeOnSelect"
        type="checkbox"
        class="mr-xs-1"
      >Close on select</label>
    </p>
    <p>
      <label><input
        v-model="alwaysOpen"
        type="checkbox"
        class="mr-xs-1"
      >Always open</label>
      <label><input
        v-model="appendToBody"
        type="checkbox"
        class="mr-xs-1"
      >Append to body</label>
      <label><input
        v-model="rtl"
        type="checkbox"
        class="mr-xs-1"
      >RTL mode</label>
    </p>
  </div>
</template>

<script>
import SETreeSelect from './index.vue'
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
  components: {
    SETreeSelect
  },
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

<style>

</style>
