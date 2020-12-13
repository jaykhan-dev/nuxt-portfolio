<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="py-1 grey darken-4">
      <TableOfContents :toc="doc.toc" :prev="prev" :next="next" sticky="true" />
    </v-navigation-drawer>
    <v-app-bar app class="hidden-lg-and-up">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import TableOfContents from '@/components/TableOfContents'
import { mapState } from 'vuex'
export default {
  components: {
    TableOfContents,
  },
  data: () => ({ drawer: null }),
  computed: {
    ...mapState({
      prev: (state) => state.blog.prev,
      next: (state) => state.blog.next,
    }),
    doc() {
      return this.$route.name === 'blog-slug'
        ? this.$store.state.blog.blog
        : this.$store.state.project.project
    },
  },
}
</script>

<style lang="scss"></style>
