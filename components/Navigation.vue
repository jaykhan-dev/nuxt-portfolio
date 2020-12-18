<template>
  <v-navigation-drawer app class="py-1 grey darken-4">
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-content class="pb-5 text-center">
          <v-list-item-title class="orange--text display-2"
            >J. Khan</v-list-item-title
          >
          <v-list-item-subtitle class="text-h6 font-weight-light white--text"
            >Portfolio</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-list dense>
      <NuxtLink
        v-for="(component, index) in components.filter(
          (component) => component.name != 'Name'
        )"
        :key="index"
        :to="path === '/' ? `#${component.name}` : '/'"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><v-btn
                block
                depressed
                class="text-capitalize font-weight-light grey darken-4"
                >{{ component.name }}</v-btn
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </NuxtLink>
      <NuxtLink to="/blog">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              ><v-btn
                block
                depressed
                class="text-capitalize font-weight-light grey darken-4"
                >Blog</v-btn
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </NuxtLink>
    </v-list>

    <v-row>
      <v-col class="d-flex justify-space-around align-end mb-2">
        <SocialMedia />
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'

import { mapState } from 'vuex'
export default {
  components: {
    SocialMedia,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      components: (state) => state.user.components,
    }),
    path() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss">
.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

a {
  text-decoration: none;
}
</style>
