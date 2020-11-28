<template>
  <v-container>
    <v-row>
      <v-col class="ml-auto" cols="12" sm="6" md="6" lg="3">
        <v-text-field v-model="searchQuery" label="Search"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(blog, index) in filteredBlogs" :key="index" cols="12">
        <v-hover v-slot:default="{ hover }">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
            <v-card :class="{ grow: hover }" class="mx-auto">
              <v-row>
                <v-col cols="12" md="2" class="image-container">
                  <dynamic-image :filename="blog.previewImage"></dynamic-image>
                </v-col>
                <v-col>
                  <v-card-title class="text-h5">{{ blog.title }}</v-card-title>
                  <v-card-subtitle class="pb-0 mb-4 overline">{{
                    formatDate(blog.updatedAt)
                  }}</v-card-subtitle>
                  <v-card-text class="text--primary">
                    <p>{{ blog.description }}</p>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </NuxtLink>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blog', params.slug)
      .only([
        'title',
        'updatedAt',
        'slug',
        'previewImage',
        'categories',
        'description',
      ])
      .sortBy('updatedAt', 'desc')
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

.v-card__title {
  word-break: break-word;
}

.v-card {
  transition: all 0.5s ease;
}

.image-container {
  margin: auto;
}
</style>
