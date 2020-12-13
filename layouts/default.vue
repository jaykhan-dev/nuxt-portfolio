<template>
  <v-app>
    <Navigation />
    <v-main>
      <v-container class="pa-0" fluid>
        <nuxt />
      </v-container>
    </v-main>
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
<style lang="scss"></style>
