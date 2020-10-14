<template>
  <div class="button-page padd-m">
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Button</h2>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <ButtonSize />
        <!-- <ButtonLoading /> -->
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <ButtonColor />
      </div>
    </div>
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Button Attribute</h2>
        <CustomTable
          :columns="columns"
          :rows="rows"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonColor from './components/Color'
import ButtonSize from './components/Size'
import CustomTable from '@/components/CustomTable'

export default {
  name: 'Button',
  components: {
    CustomTable,
    ButtonSize,
    ButtonColor
  },
  data: function () {
    return {
      columns: ['Attribute', 'Description', 'Type', 'Default'],
      rows: [
        {
          attr: 'className',
          desc: 'You can add custom class',
          type: 'String',
          default: ''
        },
        // {
        //   attr: 'isDisabled',
        //   desc: 'for disabled button',
        //   type: 'Boolean',
        //   default: 'false'
        // },
        // {
        //   attr: 'isWaiting',
        //   desc: 'for loading button',
        //   type: 'Boolean',
        //   default: 'false'
        // },
        {
          attr: 'size',
          desc: '<span>Sizes: <code>small</code> <code>medium</code> <code>large</code></span>',
          type: 'String',
          default: 'medium'
        },
        {
          attr: 'color',
          desc: '<span>Colors: <code>primary</code> <code>secondary</code> <code>normal</code> <code>dark</code></span>',
          type: 'String',
          default: 'accent'
        }
        // {
        //   attr: 'fullWidth',
        //   desc: 'for set button width',
        //   type: 'Boolean',
        //   default: 'false'
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
