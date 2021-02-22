import { shallowMount } from '@vue/test-utils'
import SEBadge from '@/components/SEBadge/index.vue'

describe('SEBadge', () => {
  const factory = (propsData) => {
    return shallowMount(SEBadge, {
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
    const seBadge = wrapper.findComponent(SEBadge)
    expect(seBadge.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-badge', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-badge')).toBe(true)
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
