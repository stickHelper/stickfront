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
        data: [300,400,1000,500,45,600,300,400,200,500,450,600]
      }]"
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
  />
  </div>
  `
})

BarMultiple.parameters = {
  docs: {
    source: {
      code: ` <SEChart
  type="bar"
  :colors="['#4E277A', '#F7A300']"
  :categories="['10 - 20', '20 - 30', '30 - 40', '40 - 50', '50 - 60', '> 60']"
  :series-data="[
    {
      data: [10, 30, 30, 50, 55, 80]
    },
    {
      data: [15, 25, 40, 45, 68, 70]
    }
  ]"
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
