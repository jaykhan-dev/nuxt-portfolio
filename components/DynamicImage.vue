<template>
  <div>
    <v-img
      :src="dynamicImage"
      class="mx-auto"
      :max-height="imageHeight"
      loading="lazy"
      contain
      @click="showOverlay = !showOverlay"
    ></v-img>
    <p v-if="caption" class="my-4 text-center subtitle-1">
      {{ caption }}
    </p>
    <v-overlay
      v-if="showOverlay"
      class="d-flex"
      @click.native="showOverlay = false"
      ><v-img class="ma-auto" :src="dynamicImage" max-width="70%"></v-img
    ></v-overlay>
  </div>
</template>

<script>
export default {
  name: 'DynamicImage',
  props: {
    filename: {
      type: String,
      default: null,
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
  data() {
    return {
      showOverlay: false,
    }
  },
  computed: {
    dynamicImage() {
      return require(`~/assets/images/${this.filename}`)
    },
  },
}
</script>

<style scoped>
.v-image {
  margin-bottom: 1rem;
}
</style>
