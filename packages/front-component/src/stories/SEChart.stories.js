import '@/styles/index.scss'
import SEChart from '@/components/SEChart/index.vue'

export default {
  title: 'Components/Chart',
  component: SEChart,
  argTypes: {
    type: { control: { type: 'select', options: ['bar', 'radialBar', 'pie', 'donut', 'area'] } }
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SEChart },
  template: `<div>
    <SEChart
      type="bar"
      :colors="['#FFB800']"
      :categories="['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']"
      :series-data="[{
        data: [100,400,600,500,1000,600,300,400,200,500,450,600]
      }]"
      barWidth="80%"
      :labelLength="7"
      :xAxisLabelRotation="-45"
    />
  </div>`
})

export const Default = Template.bind({})

Default.parameters = {
  docs: {
    source: {
      code: `<SEChart
  type="bar"
  :colors="['#FFB800']"
  :categories="['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']"
  :series-data="[{
    data: [300,400,1000,500,45,600,300,400,200,500,450,600]
  }]"
  barWidth="80%"
  :labelLength="7"
  :xAxisLabelRotation="-45"
/>`
    }
  }
}

export const BarMultiple = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="bar"
    :colors="['#4E277A', '#F7A300']"
    :categories="['10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '> 60']"
    :series-data="[
      {
        name: 'Male',
        data: [10, 30, 30, 50, 55, 80]
      },
      {
        name: 'Female',
        data: [15, 25, 40, 45, 68, 70]
      }
    ]"
    :xAxisLabelRotation="-45"
    xAxisLabelSize="10px"
    yAxisLabelSize="10px"
  />
  </div>
  `
})

BarMultiple.parameters = {
  docs: {
    source: {
      code: `<div>
  <SEChart
    type="bar"
    :colors="['#4E277A', '#F7A300']"
    :categories="['10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '> 60']"
    :series-data="[
      {
        name: 'Male',
        data: [10, 30, 30, 50, 55, 80]
      },
      {
        name: 'Female',
        data: [15, 25, 40, 45, 68, 70]
      }
    ]"
    :xAxisLabelRotation="-45"
    xAxisLabelSize="10px"
    yAxisLabelSize="10px"
  />
  </div>
  `
    }
  }
}

export const BarStacked = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="bar"
    :colors="['#682DAA', '#B488E5', '#E8DFF2']"
    :categories="['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']"
    :isStacked="true"
    :series-data="[
      {
        name: 'Brand 1',
        data: [10, 30, 30, 50, 55, 80, 20, 90, 45, 10, 23, 50]
      },
      {
        name: 'Brand 2',
        data: [15, 25, 40, 45, 68, 70, 30, 40, 50, 12, 20, 50]
      },
      {
        name: 'Brand 3',
        data: [40, 50, 25, 30, 50, 40, 38, 41, 55, 60, 40, 55]
      }
    ]"
  />
  </div>
  `
})

BarStacked.parameters = {
  docs: {
    source: {
      code: `<SEChart
  type="bar"
  :colors="['#682DAA', '#B488E5', '#E8DFF2']"
  :categories="['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']"
  :isStacked="true"
  :series-data="[
    {
      name: 'Brand 1',
      data: [10, 30, 30, 50, 55, 80, 20, 90, 45, 10, 23, 50]
    },
    {
      name: 'Brand 2',
      data: [15, 25, 40, 45, 68, 70, 30, 40, 50, 12, 20, 50]
    },
    {
      name: 'Brand 3',
      data: [40, 50, 25, 30, 50, 40, 38, 41, 55, 60, 40, 55]
    }
  ]"
/>`
    }
  }
}

export const LineChart = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="line"
    :colors="['#682DAA', '#B488E5', '#E8DFF2']"
    :categories="['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']"
    :series-data="[
      {
        name: 'Brand 1',
        data: [10, 30, 30, 50, 55, 80, 20, 90, 45, 10, 23, 50]
      },
      {
        name: 'Brand 2',
        data: [15, 25, 40, 45, 68, 70, 30, 40, 50, 12, 20, 50]
      },
      {
        name: 'Brand 3',
        data: [40, 50, 25, 30, 50, 40, 38, 41, 55, 60, 40, 55]
      }
    ]"
  />
  </div>
  `
})

LineChart.parameters = {
  docs: {
    source: {
      code: `<SEChart
  type="bar"
  :colors="['#682DAA', '#B488E5', '#E8DFF2']"
  :categories="['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']"
  :isStacked="true"
  :series-data="[
    {
      name: 'Brand 1',
      data: [10, 30, 30, 50, 55, 80, 20, 90, 45, 10, 23, 50]
    },
    {
      name: 'Brand 2',
      data: [15, 25, 40, 45, 68, 70, 30, 40, 50, 12, 20, 50]
    },
    {
      name: 'Brand 3',
      data: [40, 50, 25, 30, 50, 40, 38, 41, 55, 60, 40, 55]
    }
  ]"
/>`
    }
  }
}

export const MirrorChart = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="mirror"
    :colors="['#FFB800', '#682DAA']"
    :categories="['> 60', '50 - 60', '40 - 50', '30 - 40', '20 - 30', '10 - 20']"
    :series-data="[
      {
        name: 'Male',
        data: [1000, 1500, 1300, 900, 50, 0]
      },
      {
        name: 'Female',
        data: [15, 1000, 1500, 1300, 900, 100]
      }
    ]"
    height="auto"
  />
</div>`
})

MirrorChart.parameters = {
  docs: {
    source: {
      code: `<SEChart
  type="mirror"
  :colors="['#FFB800', '#682DAA']"
  :categories="['> 60', '50 - 60', '40 - 50', '30 - 40', '20 - 30', '10 - 20']"
  :series-data="[
    {
      name: 'Male',
      data: [1000, 1500, 1300, 900, 50, 70]
    },
    {
      name: 'Female',
      data: [15, 1000, 1500, 1300, 900, 100]
    }
  ]"
  height="auto"
/>`
    }
  }
}

export const Donut = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="donut"
    :colors="['#4E277A', '#F7A300', '#FF5757', '#00B4AE']"
    :categories="['SD', 'SMP', 'SMA', 'S1']"
    :series-data="[1000, 1500, 1300, 900]"
    :donut-width="55"
    labelFontSize="1rem"
    valueFontSize="1.5rem"
  />
  </div>
  `
})

Donut.parameters = {
  docs: {
    source: {
      code: ` <SEChart
  type="donut"
  :colors="['#4E277A', '#F7A300', '#FF5757', '#00B4AE']"
  :categories="['SD', 'SMP', 'SMA', 'S1']"
  :series-data="[1000, 1500, 1300, 900]"
  :donut-width="55"
  labelFontSize="1rem"
  valueFontSize="1.5rem"
/>`
    }
  }
}

export const Pie = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="pie"
    :colors="['#4E277A', '#F7A300', '#FF5757', '#00B4AE']"
    :categories="['10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '> 60']"
    :series-data="[44, 55, 13, 33]"
  />
  </div>
  `
})

Pie.parameters = {
  docs: {
    source: {
      code: ` <SEChart
  type="pie"
  :colors="['#4E277A', '#F7A300', '#FF5757', '#00B4AE']"
  :categories="['Data 1', 'Data 2', 'Data 3', 'Data 4']"
  :series-data="[44, 55, 13, 33]"
/>`
    }
  }
}

export const Area = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="area"
    :colors="['#FFB800']"
    :categories="['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']"
    :series-data="[{
      data: [30,40,20,50,45,60,30,40,20,50,45,60]
    }]"
  />
  </div>
  `
})

Area.parameters = {
  docs: {
    source: {
      code: `<SEChart
      type="area"
      :colors="['#FFB800']"
      :categories="['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12']"
      :series-data="[{
        data: [30,40,20,50,45,60,30,40,20,50,45,60]
      }]"
    />`
    }
  }
}

export const Sunburst = () => ({
  components: { SEChart },
  template: `<div>
  <SEChart
    type="sunburst"
    :sunburstData="{
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
    }"
    :colors="['#31ea74', '#3c7227']"
  />
  </div>
  `
})

Sunburst.parameters = {
  docs: {
    source: {
      code: ` <SEChart
  type="sunburst"
  :sunburstData="{
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
  }"
  :colors="['#31ea74', '#3c7227']"
/>`
    }
  }
}

export const Radial = () => ({
  components: { SEChart },
  template: `<div>
    <SEChart
      type="radialBar"
      :series-data="[55]"
    />
  </div>
  `
})

Radial.parameters = {
  docs: {
    source: {
      code: ` <SEChart
  type="radialBar"
  :series-data="[55]"
/>`
    }
  }
}
