<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5" lg="3">
        <TableOfContents :toc="doc.toc" />
      </v-col>
      <v-col cols="12" md="6" lg="9">
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
    const doc = await $content('services', params.slug).fetch()
    return { doc }
  },
}
</script>
