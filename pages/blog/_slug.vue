<template>
  <v-container>
    <v-row>
      <v-col>
        <v-carousel
          v-if="doc.images.length > 1"
          cycle
          interval="5000"
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(image, index) in doc.images"
            :key="index"
            :src="image"
          >
          </v-carousel-item>
        </v-carousel>
        <v-img v-else :src="doc.images[0]"></v-img>
      </v-col>
      <v-col>
        <nuxt-content :document="doc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content('blog', params.slug).fetch()
    return { doc }
  },
}
</script>

<style scoped></style>
