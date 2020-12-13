<template>
  <div>
    <a
      v-for="(media, index) in socialMedia"
      :key="index"
      :href="media.link"
      target="_blank"
    >
      <v-icon color="orange darken-2" class="mx-3">
        mdi-{{ media.name }}
      </v-icon>
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      socialMedia: (state) => state.user.socialMedia,
    }),
  },
}
</script>
