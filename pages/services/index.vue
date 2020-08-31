<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        md="6"
        lg="4"
      >
        <v-hover v-slot:default="{ hover }">
          <NuxtLink
            :to="{ name: 'services-slug', params: { slug: service.slug } }"
          >
            <v-card :class="{ grow: hover }" class="mx-auto" max-width="600">
              <v-card-title class="text-h5">{{ service.title }}</v-card-title>
              <v-card-text class="text--primary">
                <p>{{ service.description }}</p>
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
    const services = await $content('services', params.slug)
      .only(['title', 'slug', 'description'])
      .fetch()

    return { services }
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
