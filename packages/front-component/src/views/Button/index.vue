<template>
  <div class="padd-m">
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Button</h2>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <ButtonSize />
        <!-- <ButtonColor />
        <ButtonLoading /> -->
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6" />
    </div>
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Button Attribute</h2>
      </div>
    </div>
  </div>
</template>

<script>
// import ButtonColor from './components/Color'
import ButtonSize from './components/Size'
// import UHTable from '@/components/CustomTable'

export default {
  name: 'Button',
  components: {
    ButtonSize
  },
  data: function () {
    return {
      columns: ['Attribute', 'Description', 'Type', 'Default'],
      rows: [
        {
          attr: 'id',
          desc: '',
          type: 'String',
          default: ''
        },
        {
          attr: 'href',
          desc: 'for type link button',
          type: 'String',
          default: ''
        },
        {
          attr: 'className',
          desc: 'You can add custom class',
          type: 'String',
          default: ''
        },
        {
          attr: 'isDisabled',
          desc: 'for disabled button',
          type: 'Boolean',
          default: 'false'
        },
        {
          attr: 'isWaiting',
          desc: 'for loading button',
          type: 'Boolean',
          default: 'false'
        },
        {
          attr: 'size',
          desc: '<span>Sizes: <code>small</code> <code>medium</code> <code>large</code></span>',
          type: 'String',
          default: 'normal'
        },
        {
          attr: 'color',
          desc: '<span>Colors: <code>blue</code> <code>skyblue</code> <code>success</code> <code>danger</code> <code>danger</code> <code>dark-base</code> <code>flat</code> <code>flat-navy</code> <code>flat-blue</code> <code>flat-skyblue</code> <code>flat-success</code> <code>flat-grey</code> <code>flat-danger</code> <code>flat-dark-base</code></span>',
          type: 'String',
          default: 'default'
        },
        {
          attr: 'fullWidth',
          desc: 'for set button width',
          type: 'Boolean',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
