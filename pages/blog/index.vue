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
        <v-flex xs12>
          <v-card color="grey darken-2" class="white--text">
            <v-card-title primary-title>
              <div>
                <div class="headline">{{ blog.title }}</div>
                <span>
                  <v-card-subtitle class="pb-0 mb-4 pl-0 overline">{{
                    formatDate(blog.createdAt)
                  }}</v-card-subtitle>
                  {{ blog.description }}</span
                >
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn dark :to="blog.path">Read More</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
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
