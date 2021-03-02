<template>
  <div class="se-grid">
    <DesignConcept />
    <div class="markdown">
      <h2 id="Examples">
        Examples
      </h2>
    </div>
    <BasicGrid />
    <FlexAlign />
  </div>
</template>

<script>
import DesignConcept from './components/DesignConcept'
import BasicGrid from './components/BasicGrid'
import FlexAlign from './components/FlexAlign'

export default {
  name: 'SEGrid',
  components: {
    DesignConcept,
    BasicGrid,
    FlexAlign
  }
}
</script>

<style lang="scss">
@import "./styles.scss";
</style>
