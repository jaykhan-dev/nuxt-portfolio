<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="3">
        <TableOfContents :toc="doc.toc" sticky="true" />

        <h3>Related Articles:</h3>
        <NuxtLink
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          class="white-text"
        >
          <p class="white--text">
            {{ prev.title }}
          </p>
        </NuxtLink>
        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        >
          <p class="white--text">
            {{ next.title }}
          </p>
        </NuxtLink>
      </v-col>
      <v-col cols="12" lg="9">
        <v-row class="d-flex justify-space-between">
          <v-col> </v-col>

          <v-col class="text-right"> </v-col>
        </v-row>
        <nuxt-content :document="doc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TableOfContents from '@/components/TableOfContents'
export default {
  components: {
    TableOfContents,
  },
  async asyncData({ $content, params, redirect }) {
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
    return { doc, prev, next }
  },
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
</style>
