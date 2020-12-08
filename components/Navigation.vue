<template>
  <div>
    <v-toolbar fixed>
      <v-toolbar-title>
        <v-row>
          <v-col>
            <nuxt-link to="/" class="white--text">Jawad Khan</nuxt-link>
          </v-col>
          <v-col class="hidden-sm-and-down">
            <span>|</span>
          </v-col>
          <v-col class="hidden-sm-and-down">
            <span>UI/UX Designer</span>
          </v-col>
        </v-row>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="(location, index) in locations"
        :key="index"
        :to="location.link"
        class="mx-2 white black--text hidden-sm-and-down"
        tile
        >{{ location.name }}</v-btn
      >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-col>
          <v-list-item-content
            ><p class="text-center">Jawad Khan</p></v-list-item-content
          >
          <v-list-item-content class="ma-0"
            ><p class="text-center ma-0">
              UI/UX Designer
            </p></v-list-item-content
          >
        </v-col>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item
        v-for="(location, index) in locations"
        :key="index"
        link
        :to="location.link"
        >{{ location.name }}</v-list-item
      >
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      locations: [
        { name: 'Past Projects', link: '/projects' },
        { name: 'Contact', link: '/contact' },
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
