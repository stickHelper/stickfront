import { shallowMount } from '@vue/test-utils'
import SEChart from '@/components/SEChart/index.vue'

describe('SEChart', () => {
  const factory = (propsData) => {
    return shallowMount(SEChart, {
      propsData: {
        id: 'any-unique-id',
        className: 'any-class-name',
        ...propsData
      }
    })
  }

  it('is a Vue instance', () => {
    // arrange
    const wrapper = factory()
    // assert
    const seChart = wrapper.findComponent(SEChart)
    expect(seChart.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-chart', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-chart')).toBe(true)
  })

  it('has props id', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.props('id')).toBeTruthy()
  })

  it('has props className', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.props('className')).toBeTruthy()
  })
})
