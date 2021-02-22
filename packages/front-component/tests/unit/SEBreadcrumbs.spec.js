import { shallowMount } from '@vue/test-utils'
import SEBreadcrumbs from '@/components/SEBreadcrumbs/index.vue'

describe('SEBreadcrumbs', () => {
  const factory = (propsData) => {
    return shallowMount(SEBreadcrumbs, {
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
    const seBreadcrumbs = wrapper.findComponent(SEBreadcrumbs)
    expect(seBreadcrumbs.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-breadcrumbs', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-breadcrumbs')).toBe(true)
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
