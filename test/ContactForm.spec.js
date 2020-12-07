import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm'

describe('ContactForm.vue', () => {
  it('should contain a send button', () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.html()).toContain('Send')
  })

  it('should contain a form', () => {
    const wrapper = mount(ContactForm)
    const form = wrapper.find('form')
    expect(form.exists()).toBe(true)
  })
})
