<template>
  <div
    id="sunburst"
    :style="styles"
  >
    <sunburst
      :data="data"
      :color-scale="colorScale"
      @mouseOverNode="hoverEvent($event)"
    >
      <!-- Add behaviors -->
      <template slot-scope="{ on, actions }">
        <highlightOnHover v-bind="{ on, actions }" />
      </template>
    </sunburst>

    <div class="chart-info">
      <div class="chart-info__value">
        {{ info.value }}
      </div>
      <div class="chart-info__title">
        {{ info.name }}
      </div>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3'
// import { scaleOrdinal } from 'd3-scale'
import {
  // breadcrumbTrail,
  highlightOnHover,
  // nodeInfoDisplayer,
  sunburst
  // zoomOnClick
} from 'vue-d3-sunburst'
import 'vue-d3-sunburst/dist/vue-d3-sunburst.css'

export default {
  name: 'SunburstChart',
  components: {
    // breadcrumbTrail,
    highlightOnHover,
    // nodeInfoDisplayer,
    sunburst
    // zoomOnClick
  },
  props: {
    height: {
      type: String,
      default: '350px'
    },
    sunburstData: {
      type: Object,
      default: () => null
    },
    colorList: {
      type: Array,
      default: () => ['#31ea74', '#3c7227']
    }
  },
  data() {
    return {
      data:  {
        name: 'flare',
        children: [
          {
            name: 'analytics',
            children: [
              {
                name: 'cluster',
                children: [
                  { name: 'AgglomerativeCluster', size: 3938 }
                ]
              },
              {
                name: 'graph',
                children: [
                  { name: 'BetweennessCentrality', size: 3534 }
                ]
              },
              {
                name: 'optimization',
                children: [
                  { name: 'AspectRatioBanker', size: 7074 }
                ]
              }
            ]
          }
        ]
      },
      info: {
        name: null,
        value: null
      }
    }
  },
  computed: {
    styles() {
      return {
        height: this.height
      }
    },
    colorScale() {
      return d3.scaleOrdinal(this.colorList)
    }
  },
  methods: {
    hoverEvent(value) {
      const info = {
        name: value.node.data.name,
        value: value.node.value
      }
      this.info = info
    }
  }
}

</script>
