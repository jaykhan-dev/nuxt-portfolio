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
        <NuxtLink :to="{ name: 'blog-slug', params: { slug: blog.slug } }">
          <v-card class="mx-auto" max-width="500" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  {{ formatDate(blog.createdAt) }}
                </div>
                <v-list-item-title class="headline mb-1">
                  {{ blog.title }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  blog.description
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar tile size="80">
                <v-img
                  contain
                  :src="require(`~/assets/images/${blog.previewImage}`)"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined text class="blue">
                Read More
              </v-btn>
            </v-card-actions>
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
