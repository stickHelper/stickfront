import { shallowMount } from '@vue/test-utils'
import SEButton from '@/components/SEButton/index.vue'

describe('SEButton', () => {
  const factory = (propsData) => {
    return shallowMount(SEButton, {
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
    const seButton = wrapper.findComponent(SEButton)
    expect(seButton.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-btn', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-btn')).toBe(true)
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
