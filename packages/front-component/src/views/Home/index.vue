<template>
  <div class="home-page">
    <SEChart type="bar" />
  </div>
</template>

<script>
import SEChart from '@/components/SEChart'

export default {
  name: 'Home',
  components: {
    SEChart
  }
}
</script>

<style lang="scss" scoped>
@import './styles.scss';
</style>
