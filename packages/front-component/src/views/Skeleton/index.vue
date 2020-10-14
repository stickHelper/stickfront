<template>
  <div class="button-page padd-m">
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Skeleton</h2>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <SkeletonDefault />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <SkeletonCustom />
      </div>
    </div>
    <div class="row p-xs-5">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <h2>Skeleton Attribute</h2>
        <CustomTable
          :columns="columns"
          :rows="rows"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonDefault from './components/Default'
import SkeletonCustom from './components/Custom'
import CustomTable from '@/components/CustomTable'

export default {
  name: 'Skeleton',
  components: {
    SkeletonDefault,
    SkeletonCustom,
    CustomTable
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
        {
          attr: 'width',
          desc: '<span>include string likes: <code>80%</code> <code>50px</code> <code>50em</code> etc',
          type: 'String',
          default: '100%'
        },
        {
          attr: 'height',
          desc: '<span>include string likes: <code>80%</code> <code>50px</code> <code>50em</code> etc',
          type: 'String',
          default: '100px'
        }
      ]
    }
  }
}
</script>

<style>

</style>
