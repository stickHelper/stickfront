<template>
  <div
    class="se-chart__mirror"
    :style="`height: ${height}`"
  >
    <div
      v-for="(category, index) in categories"
      :key="index"
      class="mirror-item text-center"
    >
      <div class="mirror-left">
        <div
          class="bar-line__left h-100"
          :style="`--width-left: ${seriesData[0].data[index]}%; --colors-1: ${colors[0]}`"
        >
          <div class="line" />
          <div class="tooltip-chart">
            <div class="tooltip-pointer">
              <div class="h-100 w-100" />
            </div>
            <div class="tooltip-content">
              <div class="tooltip-label">
                {{ seriesData[0].name }}
              </div>
              <div class="tooltip-value">
                {{ seriesData[0].data[index] }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <span class="mirror-category">{{ category }}</span>
      <div class="mirror-right">
        <div
          class="bar-line__right h-100"
          :style="`--width-right: ${seriesData[1].data[index]}%; --colors-2: ${colors[1]}`"
        >
          <div class="line" />
          <div class="tooltip-chart">
            <div class="tooltip-content">
              <div class="tooltip-label">
                {{ seriesData[1].name }}
              </div>
              <div class="tooltip-value">
                {{ seriesData[1].data[index] }}
              </div>
            </div>
            <div class="tooltip-pointer">
              <div class="h-100 w-100" />
            </div>\
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MirrorChart',
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    colors: {
      type: Array,
      default: () => ['#48A4B6']
    },
    categories: {
      type: Array,
      default: () => []
    },
    seriesData: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: '350px'
    },
    barWidth: {
      type: [String, Number],
      default: '30%'
    }
  }
}
</script>
