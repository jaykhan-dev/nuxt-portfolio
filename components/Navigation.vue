<template>
  <div>
    <v-toolbar fixed>
      <v-toolbar-title>
        <nuxt-link to="/" class="white--text font-weight-thin"
          >Riza Khan</nuxt-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(location, index) in locations"
        :key="index"
        :to="location.link"
        class="mx-2 hidden-sm-and-down font-weight-thin"
        outlined
        tile
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
        { name: 'Services', link: '/services' },
        { name: 'Past Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
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
