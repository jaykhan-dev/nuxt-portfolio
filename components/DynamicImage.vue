<template>
  <div>
    <v-img
      :src="dynamicImage"
      class="mx-auto"
      max-height="400"
      loading="lazy"
      cover
    />
    <p class="my-4 text-center subtitle-1">
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

<style scoped></style>
