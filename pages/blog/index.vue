<template>
  <v-container>
    <v-row>
      <v-col>
        Search Bar Goes Here
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(blog, index) in blogs"
        :key="index"
        cols="12"
        md="4"
        lg="3"
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
            <v-btn color="primary" :to="blog.path">
              Read More
            </v-btn>
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
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped></style>
