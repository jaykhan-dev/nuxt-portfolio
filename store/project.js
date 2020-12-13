export const state = () => ({
  project: {},
})

export const mutations = {
  SET_PROJECT(state, project) {
    state.project = project
  },
}
