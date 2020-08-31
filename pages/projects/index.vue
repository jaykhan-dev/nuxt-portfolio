<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-hover v-slot:default="{ hover }">
          <NuxtLink
            :to="{ name: 'projects-slug', params: { slug: project.slug } }"
          >
            <v-card :class="{ grow: hover }" class="mx-auto" max-width="600">
              <dynamic-image :filename="project.previewImage"></dynamic-image>
              <v-card-title class="text-h5">{{ project.title }}</v-card-title>
              <v-card-text class="text--primary">
                <p>{{ project.description }}</p>
              </v-card-text>
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
    const projects = await $content('projects', params.slug)
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

    return { projects }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}

.v-card {
  transition: all 0.5s ease;
}
</style>
