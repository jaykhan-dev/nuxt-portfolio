<template>
  <v-container>
    <v-row>
      <v-col class="ml-auto" cols="6" md="6" lg="3">
        <v-text-field label="Search" v-model="searchQuery"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(blog, index) in filteredBlogs"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-card class="mx-auto" max-width="400">
          <dynamic-image :filename="blog.previewImage"></dynamic-image>
          <v-card-title class="display-1">{{ blog.title }}</v-card-title>
          <v-card-subtitle class="pb-0 mb-4">{{
            formatDate(blog.updatedAt)
          }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>{{ blog.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <NuxtLink :to="blog.path">
              <v-btn color="primary">
                Read More
              </v-btn>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blog', params.slug)
      .only(['title', 'updatedAt', 'previewImage', 'categories', 'description'])
      .sortBy('updatedAt', 'asc')
      .fetch()
    return { blogs }
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  computed: {
    filteredBlogs() {
      return this.blogs.filter((blog) =>
        blog.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
