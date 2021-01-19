<template>
  <div :class="classes">
    <VueApexCharts
      width="100%"
      :height="height"
      :type="type"
      :options="options"
      :series="seriesData"
    />
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'SEChart',
  components: {
    VueApexCharts
  },
  props: {
    type: {
      type: String,
      default: null,
      validator: function (value) {
        return ['bar', 'donut', 'pie', 'area', 'radialBar'].indexOf(value) !== -1
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
    labels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      options: {
        chart: {
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
        dataLabels: {
          enabled: false
        },
        colors: this.colors,
        grid: {
          show: true,
          borderColor: '#ECECF4',
          strokeDashArray: 7,
          position: 'back',
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        yaxis: {
          show: false
        },
        xaxis: {
          categories: this.categories,
          tooltip: {
            enabled: false
          }
        },
        plotOptions: {
          bar: {
            endingShape: 'rounded',
            columnWidth: '30%'
          },
          pie: {
            donut: {
              size: '80%',
              labels: {
                show: true,
                name: {
                  show: false
                },
                total: {
                  show: true,
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
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
            show: false
          },
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            let label = w.globals.labels[dataPointIndex]
            let value = series[seriesIndex][dataPointIndex]
            if (!dataPointIndex || dataPointIndex === null) {
              label = w.globals.labels[seriesIndex]
              value = series[seriesIndex]
            }
            return (`<div class="se-chart__tooltip">
              <span class="p-xs-2">
                <span class="se-chart__tooltip-color"
                  style="
                    height: 4px;
                    width: 4px;
                    border-radius: 50px;
                    background-color: ${w.globals.colors[seriesIndex]}
                  "
                >
                </span>
                ${label}: ${value}
              </span>
            </div>`)
          }
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
  },

  computed: {
    classes() {
      return {
        'se-chart': true
      }
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
  }
}
</script>
