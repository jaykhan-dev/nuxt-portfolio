<template>
  <v-app dark>
    <Navigation />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <span class="mx-auto"
        >Riza Khan &copy; {{ new Date().getFullYear() }}</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    Navigation,
  },
}
</script>
