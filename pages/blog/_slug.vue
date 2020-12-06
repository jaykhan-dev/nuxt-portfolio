<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="3">
        <TableOfContents :toc="doc.toc" sticky="true" />
      </v-col>
      <v-col cols="12" lg="9">
        <v-row class="d-flex justify-space-between">
          <v-col>
            <NuxtLink
              v-if="prev"
              :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
            >
              <v-btn>
                <v-icon size="30" v-text="'mdi-arrow-left-bold'"></v-icon>
                {{ prev.title }}
              </v-btn>
            </NuxtLink>
          </v-col>

          <v-col class="text-right">
            <NuxtLink
              v-if="next"
              :to="{ name: 'blog-slug', params: { slug: next.slug } }"
            >
              <v-btn>
                {{ next.title }}
                <v-icon size="30" v-text="'mdi-arrow-right-bold'"></v-icon>
              </v-btn>
            </NuxtLink>
          </v-col>
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
