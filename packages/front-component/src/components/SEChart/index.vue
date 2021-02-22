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
    <template v-else>
      <VueApexCharts
        width="100%"
        :height="height"
        :type="type"
        :options="options"
        :series="seriesData"
      />
      <div
        v-if="type === 'donut'"
        class="se-chart__label"
        :class="type"
      >
        <div class="label">
          {{ labelTotal }}
        </div>
        <div class="value">
          {{ totalDonut }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import MirrorChart from './MirrorChart'

export default {
  name: 'SEChart',
  components: {
    VueApexCharts,
    MirrorChart
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
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['bar', 'donut', 'pie', 'area', 'line', 'radialBar', 'mirror'].indexOf(value) !== -1
      }
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
    isTooltip: {
      type: Boolean,
      default: true
    },
    labelTotal: {
      type: String,
      default: 'Total'
    },
    labels: {
      type: Array,
      default: () => []
    },
    barWidth: {
      type: [String, Number],
      default: '30%'
    },
    isStacked: {
      type: Boolean,
      default: false
    },
    yAxisLabel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },

  computed: {
    classes() {
      return {
        'se-chart': true,
        [this.className]: this.className !== null
      }
    },
    options() {
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
          enabled: false
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
            }
          }
        },
        xaxis: {
          categories: this.categories,
          tooltip: {
            enabled: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: this.barWidth
          },
          pie: {
            donut: {
              size: '80%',
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
    }
  }
}
</script>
