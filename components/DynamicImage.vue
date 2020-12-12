<template>
  <div>
    <v-img
      :src="dynamicImage"
      class="mx-auto"
      :max-height="imgHeight"
      loading="lazy"
      contain
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
    imgHeight: {
      type: Number,
      required: false,
      default: 200,
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
