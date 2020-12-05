<template>
  <v-container>
    <v-row>
      <v-col class="ml-auto" cols="12" sm="6" md="6" lg="3">
        <v-text-field v-model="searchQuery" label="Search"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(blog, index) in filteredBlogs"
        :key="index"
        cols="12"
        md="6"
        >
        <pre>
          {{ blog }}
        </pre>
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
          <v-row class="pa-5 ma-5 bordered">
            <v-col cols="12" md="6" lg="4" class="d-flex justify-center">
              <dynamic-image :filename="blog.previewImage"></dynamic-image>
            </v-col>
            <v-col class="ml-5">
              <h1>{{ blog.title }}</h1>
              <p>{{ formatDate(blog.createdAt) }}</p>
              <p>{{ blog.description }}</p>
            </v-col>
          </v-row>
        </NuxtLink>
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
        'createdAt',
        'slug',
        'previewImage',
        'categories',
        'description',
        'published',
      ])
      .sortBy('updatedAt', 'desc')
      .fetch()

    return { blogs: blogs.filter((blog) => blog.published) }
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
