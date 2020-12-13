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
  async asyncData({ $content, params, redirect, store }) {
    const doc = await $content('blog', params.slug).fetch()

    const [prev, next] = await $content('blog')
      .only(['title', 'slug', 'published'])
      .where({ published: true })
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    if (!doc.published) {
      redirect('/blog')
    }

    store.commit('blog/SET_BLOG', doc)
    store.commit('blog/SET_NEXT', next)
    store.commit('blog/SET_PREV', prev)
    return { doc }
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
