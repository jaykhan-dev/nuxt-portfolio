<template>
  <div>
    <v-img
      :src="dynamicImage"
      class="mx-auto"
      :max-height="imageHeight"
      loading="lazy"
      contain
    />
    <p v-if="caption" class="my-4 text-center subtitle-1">
      {{ caption }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'DynamicImage',
  props: {
    filename: {
      type: String,
      default: null,
      required: false,
    },
    caption: {
      type: String,
      default: null,
      required: false,
    },
    imageHeight: {
      type: Number,
      default: 400,
      required: false,
    },
  },
  computed: {
    dynamicImage() {
      return this.filename
        ? require(`~/assets/images/${this.filename}`)
        : '/vuetify-logo.svg'
    },
  },
}
</script>

<style scoped>
.v-image {
  margin-bottom: 1rem;
}
</style>
