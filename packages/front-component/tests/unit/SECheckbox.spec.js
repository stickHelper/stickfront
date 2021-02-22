import { shallowMount } from '@vue/test-utils'
import SECheckbox from '@/components/SECheckbox/index.vue'

describe('SECheckbox', () => {
  const factory = (propsData) => {
    return shallowMount(SECheckbox, {
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
    const seCheckbox = wrapper.findComponent(SECheckbox)
    expect(seCheckbox.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-checkbox', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-checkbox')).toBe(true)
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
