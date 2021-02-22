import { shallowMount } from '@vue/test-utils'
import SECombobox from '@/components/SECombobox/index.vue'

describe('SECombobox', () => {
  const factory = (propsData) => {
    return shallowMount(SECombobox, {
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
    const seCombobox = wrapper.findComponent(SECombobox)
    expect(seCombobox.exists()).toBe(true)
  })

  it('component already exists', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.exists()).toBe(true)
  })

  it('has class name se-combobox', () => {
    // arrange
    const wrapper = factory()
    expect(wrapper.classes('se-combobox')).toBe(true)
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
