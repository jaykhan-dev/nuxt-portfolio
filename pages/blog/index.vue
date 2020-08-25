<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(blog, index) in blogs"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="300px"
            :src="blog.previewImage"
          >
            <v-card-title class="display-1">{{ blog.title }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">{{ blog.updatedAt }}</v-card-subtitle>
          <v-card-text class="text--primary">
            <p>{{ blog.description }}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange" outlined :to="blog.path">
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
    const blogs = await $content('blog', params.slug).fetch()

    return { blogs }
  },
}
</script>

<style scoped></style>
