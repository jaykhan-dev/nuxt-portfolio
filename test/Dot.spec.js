import { mount } from '@vue/test-utils'
import Dot from '@/components/Dot'

describe('Dot.vue', () => {
  it('should contain an svg', () => {
    const wrapper = mount(Dot, {
      propsData: {
        x: 10,
        y: 10,
        r: 5,
        o: 0.5,
      },
    })

    const svg = wrapper.find('svg')
    const circle = wrapper.find('circle')
    expect(svg.exists()).toBe(true)
    expect(circle.exists()).toBe(true)
  })

  it('should receive position and styling props', () => {
    const wrapper = mount(Dot, {
      propsData: {
        x: 10,
        y: 10,
        r: 5,
        o: 0.5,
      },
    })

    const svg = wrapper.find('svg')
    const circle = wrapper.find('circle')
    expect(svg.attributes('height')).toBe('30')
    expect(svg.attributes('width')).toBe('30')
    expect(svg.attributes('style')).toBe('opacity: 0.5;')
    expect(circle.attributes('r')).toBe('5')
    expect(circle.attributes('stroke-width')).toBe('4')
  })
})
