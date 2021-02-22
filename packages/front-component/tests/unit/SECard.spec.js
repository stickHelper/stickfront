import { shallowMount } from '@vue/test-utils'
import SECard from '@/components/SECard/index.vue'

describe('SECard', () => {
  const factory = (propsData) => {
    return shallowMount(SECard, {
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
    const seCard = wrapper.findComponent(SECard)
    expect(seCard.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-card', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-card')).toBe(true)
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
