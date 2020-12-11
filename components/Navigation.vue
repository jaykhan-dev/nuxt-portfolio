<template>
  <div>
    <v-app-bar fixed width="100%">
      <v-toolbar-title>
        <v-row>
          <v-col>
            <nuxt-link to="/" class="white--text">Riza Khan</nuxt-link>
          </v-col>
          <v-col class="hidden-sm-and-down">
            <span>|</span>
          </v-col>
          <v-col class="hidden-sm-and-down">
            <span>Web Developer</span>
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
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark icon v-bind="attrs" class="hidden-md-and-up" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(location, index) in locations" :key="index">
            <v-list-item-title>
              <v-btn :to="location.link" class="mx-2 white black--text" tile>{{
                location.name
              }}</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
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
