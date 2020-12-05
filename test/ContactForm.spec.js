import { mount } from '@vue/test-utils'
import ContactForm from '@/components/ContactForm'

describe("ContactForm", () => {
  it('should show a form', () => {
    const wrapper = mount(ContactForm)
    expect(wrapper.html()).toHave('input')
  })
})
