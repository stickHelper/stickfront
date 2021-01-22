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
