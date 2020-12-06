<template>
  <v-container>
    <v-row>
      <v-col>
        <NuxtLink
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        >
          {{ prev.title }}
        </NuxtLink>

        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        >
          {{ next.title }}
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="3">
        <TableOfContents :toc="doc.toc" sticky="true" />
      </v-col>
      <v-col cols="12" lg="9">
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
      .only(['title', 'slug'])
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

<style lang="scss" scoped></style>
