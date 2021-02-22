import { shallowMount } from '@vue/test-utils'
import SEAvatar from '@/components/SEAvatar/index.vue'

describe('SEAvatar', () => {
  const factory = (propsData) => {
    return shallowMount(SEAvatar, {
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
    const seAvatar = wrapper.findComponent(SEAvatar)
    expect(seAvatar.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-avatar', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-avatar')).toBe(true)
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
