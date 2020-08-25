<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>
        <nuxt-link to="/" class="display-2 white--text">khanr</nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(location, index) in locations"
        :key="index"
        :to="location.link"
        class="mx-2 red hidden-sm-and-down"
        >{{ location.name }}</v-btn
      >
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        { name: 'Service', link: '/service' },
        { name: 'Past Projects', link: '/projects' },
        { name: 'Blog', link: '/blog' },
      ],
    }
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
