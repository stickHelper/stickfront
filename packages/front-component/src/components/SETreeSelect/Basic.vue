<template>
  <div>
    <SETreeSelect
      :multiple="true"
      :options="options"
      :limit="3"
      :limit-text="(count) => '+'+count+'...'"
      placeholder="Select your favourite(s)..."
    />
    <br>
    <SETreeSelect
      :multiple="true"
      :options="options"
      :limit="3"
      size="large"
      placeholder="Select your favourite(s)..."
    />
    <br>
    <SETreeSelect
      :multiple="true"
      :options="options"
      :text-counter="(count) => 'Fruits ' + (count > 0 ? '('+count+')' : '')"
      show-count
      value-consists-of="LEAF_PRIORITY"
      type="count"
      placeholder="Select your favourite(s)..."
    />
  </div>
</template>

<script>
/* eslint-disable no-undefined */
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
      value1: [],
      options
    }
  }
}
</script>

<style>

</style>
