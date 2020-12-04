<template>
  <v-container>
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
  async asyncData({ $content, params }) {
    const doc = await $content('blog', params.slug).fetch()
    return { doc }
  },
}
</script>

<style lang="scss" scoped></style>
