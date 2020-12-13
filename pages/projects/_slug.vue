<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <nuxt-content :document="doc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'article',
  async asyncData({ $content, params, store }) {
    const doc = await $content('projects', params.slug).fetch()
    store.commit('project/SET_PROJECT', doc)
    return { doc }
  },
}
</script>
