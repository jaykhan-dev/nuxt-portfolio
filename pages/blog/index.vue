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
        ><NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
          <v-card :class="{ grow: hover }" class="mx-auto" max-width="600">
            <dynamic-image :filename="blog.previewImage"></dynamic-image>
            <v-card-title class="text-h5">{{ blog.title }}</v-card-title>
            <v-card-text class="text--primary">
              <p>{{ blog.description }}</p>
            </v-card-text>
          </v-card>
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
