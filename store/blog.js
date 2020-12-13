export const state = () => ({
  blog: {},
  next: {},
  prev: {},
})

export const mutations = {
  SET_BLOG(state, blog) {
    state.blog = blog
  },
  SET_NEXT(state, next) {
    state.next = next
  },
  SET_PREV(state, prev) {
    state.prev = prev
  },
}
