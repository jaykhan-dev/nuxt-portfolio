<template>
  <div>
    <a
      v-for="(media, index) in socialMedia"
      :key="index"
      :href="media.link"
      target="_blank"
    >
      <v-icon color="white darken-2" class="mr-sm-3 mx-md-3">
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
