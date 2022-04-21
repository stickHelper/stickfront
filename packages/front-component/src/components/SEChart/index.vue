<template>
  <div
    :id="id"
    :class="classes"
  >
    <MirrorChart
      v-if="type === 'mirror'"
      :height="height"
      :colors="colors"
      :series-data="seriesData"
      :bar-width="barWidth"
      :categories="categories"
    />
    <SunburstChart
      v-else-if="type === 'sunburst'"
      :sunburst-data="sunburstData"
      :color-list="colors"
    />
    <template v-else>
      <VueApexCharts
        width="100%"
        :height="height"
        :type="type"
        :options="options"
        :series="seriesData"
      />
      <div
        v-if="type === 'donut' && showLabel === true"
        class="se-chart__label"
        :class="type"
        :style="{left: chartLabelLeftPos}"
      >
        <div class="label" :style="{fontSize: labelFontSize}">
          {{ labelTotal }}
        </div>
        <div class="value" :style="{fontSize: valueFontSize}">
          {{ totalDonut }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import MirrorChart from './MirrorChart'
import SunburstChart from './SunburstChart'

export default {
  name: 'SEChart',
  components: {
    VueApexCharts,
    MirrorChart,
    SunburstChart
  },
  props: {
    id: {
      type: String,
      default: null
    },
    className: {
      type: String,
      default: null
    },
    dataLabel: {
      type: Boolean,
      default: false
    },
    dataLabelSize: {
      type: String,
      default: '12px'
    },
    dataLabelColor: {
      type: Array,
      default: () => ['#000']
    },
    dataLabelPosition: {
      type: String,
      default: 'top',
      validator: function (value) {
        return ['top', 'bottom', 'center'].indexOf(value) !== -1
      }
    },
    labelLength: {
      type: Number,
      default: null
    },
    labelOffsetY: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['bar', 'donut', 'pie', 'area', 'line', 'radialBar', 'mirror', 'sunburst'].indexOf(value) !== -1
      }
    },
    sunburstData: {
      type: Object,
      default: () => null
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
    width: {
      type: String,
      default: '100%'
    },
    isTooltip: {
      type: Boolean,
      default: true
    },
    labelTotal: {
      type: String,
      default: 'Total'
    },
    chartLabelLeftPos: {
      type: String,
      default: '50%'
    },
    labelFontSize: {
      type: String,
      default: '1.2rem'
    },
    valueFontSize: {
      type: String,
      default: '1.8rem'
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    labels: {
      type: Array,
      default: () => []
    },
    barWidth: {
      type: [String, Number],
      default: '30%'
    },
    donutWidth: {
      type: [Number],
      default: 55
    },
    isStacked: {
      type: Boolean,
      default: false
    },
    yAxisLabelRotation: {
      type: Number,
      default: 0
    },
    yAxisLabelSize: {
      type: String,
      default: '12px'
    },
    yAxisLabelColor: {
      type: String,
      default: '#000'
    },
    yAxisMinHeight: {
      type: Number,
      default: 50
    },
    yAxisMaxHeight: {
      type: Number,
      default: null
    },
    yAxisLabel: {
      type: Boolean,
      default: true
    },
    xAxisLabelRotation: {
      type: Number,
      default: 0
    },
    xAxisLabelSize: {
      type: String,
      default: '12px'
    },
    xAxisLabelColor: {
      type: String,
      default: '#000'
    },
    xAxisMinHeight: {
      type: Number,
      default: 50
    },
    xAxisMaxHeight: {
      type: Number,
      default: null
    },
    xAxisLabel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      options: this.optionsDetail()
    }
  },

  computed: {
    classes() {
      return {
        'se-chart': true,
        [this.className]: this.className !== null
      }
    },
    totalDonut() {
      return this.seriesData.reduce((a, b) => a + b, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  watch: {
    categories: function (newVal) {
      this.options = {
        ...this.options,
        xaxis: {
          ...this.options.xaxis,
          categories: newVal
        }
      }
    }
  },
  methods: {
    YFormatter() {
      return this.seriesData.map(() => {
        return {
          formatter: function (y) {
            if (typeof y !== 'undefined') {
              return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            return y
          },
          title: {
            formatter: () => ''
          }
        }
      })
    },
    optionsDetail() {
      let truncatedLabelValues
      if (this.labelLength) {
        truncatedLabelValues = this.categories.map((val) => {
          return val.length > this.labelLength ? val.slice(0, this.labelLength) + '..' : val
        })
      }
      return {
        chart: {
          type: this.type,
          stacked: this.isStacked,
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        legend: {
          show: false
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        dataLabels: {
          enabled: this.dataLabel,
          style: {
            colors: this.dataLabelColor,
            fontSize: this.dataLabelSize
          },
          offsetY: this.labelOffsetY
        },
        colors: this.colors,
        grid: {
          show: true,
          borderColor: '#ECECF4',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          show: this.yAxisLabel,
          labels: {
            formatter: function (value) {
              if (value >= 1000) {
                return Math.sign(value) * ((Math.abs(value) / 1000).toFixed(1)) + 'k'
              }
              return value
            },
            rotate: this.yAxisLabelRotation,
            rotateAlways: !(this.yAxisLabelRotation === '0' || this.xAxisLabelRotation === 0),
            minHeight: this.yAxisMinHeight,
            maxHeight: this.yAxisMaxHeight,
            style: {
              colors: this.yAxisLabelColor,
              fontSize: this.yAxisLabelSize
            }
          }
        },
        xaxis: {
          categories: truncatedLabelValues || this.categories,
          tooltip: {
            enabled: false
          },
          labels: {
            show: this.xAxisLabel,
            rotate: this.xAxisLabelRotation,
            rotateAlways: !(this.xAxisLabelRotation === '0' || this.xAxisLabelRotation === 0),
            minHeight: this.xAxisMinHeight,
            maxHeight: this.xAxisMaxHeight,
            style: {
              colors: this.xAxisLabelColor,
              fontSize: this.xAxisLabelSize
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: this.barWidth,
            horizontal: false,
            dataLabels: {
              position: this.dataLabelPosition
            }
          },
          pie: {
            donut: {
              size: this.donutWidth,
              labels: {
                show: false,
                name: {
                  show: false
                },
                value: {
                  show: true,
                  formatter: function (val) {
                    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                },
                total: {
                  show: true,
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                  }
                }
              }
            }
          },
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              margin: 0,
              size: '70%'
            },
            track: {
              background: '#E3F0F2',
              startAngle: -90,
              endAngle: 90
            },
            dataLabels: {
              name: {
                show: true,
                fontSize: '20px',
                fontWeight: 700
              },
              value: {
                show: false
              }
            }
          }
        },
        tooltip: {
          enabled: this.isTooltip,
          x: {
            show: true
          },
          y: this.YFormatter()
        },
        stroke: {
          lineCap: 'round'
        },
        labels: this.labels,
        noData: {
          text: 'Data is not available',
          align: 'center',
          verticalAlign: 'middle',
          offsetX: 0,
          offsetY: 0,
          style: {
            color: '#8b8da3',
            fontSize: '16px'
          }
        }
      }
    }
  }
}
</script>
