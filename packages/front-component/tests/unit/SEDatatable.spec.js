import { shallowMount } from '@vue/test-utils'
import SEDatatable from '@/components/SEDatatable/index.vue'

describe('SEDatatable', () => {
  const factory = (propsData) => {
    return shallowMount(SEDatatable, {
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
    const seDatatable = wrapper.findComponent(SEDatatable)
    expect(seDatatable.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-datatable', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-datatable')).toBe(true)
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
