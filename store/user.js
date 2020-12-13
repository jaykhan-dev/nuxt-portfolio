export const state = () => ({
  components: [
    { name: 'Name', img: require('~/assets/images/generic/landing.png') },
    {
      name: 'Skills',
      bgColor: 'grey darken-4',
    },
    { name: 'Jobs', bgColor: 'grey darken-3' },
    {
      name: 'ContactForm',
    },
  ],
  socialMedia: [
    { name: 'twitter', link: 'https://www.google.com' },
    { name: 'linkedin', link: '#' },
    { name: 'github', link: '#' },
  ],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      text,
      done: false,
    })
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.done = !todo.done
  },
}
