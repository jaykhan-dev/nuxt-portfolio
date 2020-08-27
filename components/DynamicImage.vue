<template>
  <div>
    <v-img :src="dynamicImage" class="mx-auto" />
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
      required: true,
    },
    caption: {
      type: String,
      required: false,
    },
  },
  computed: {
    dynamicImage() {
      return require(`~/assets/images/${this.filename}`)
    },
  },
}
</script>

<style scoped></style>
