<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" md="8" offset-md="1" lg="5" offset-lg="2">
        <h1 class="display-4 white--text">Riza Khan</h1>
        <p class="subtitle-1 pl-2">Web Developer</p>
        <v-row class="pl-4">
          <nuxt-link outlined tile class="btn mt-4" to="/projects"
            >Past Projects</nuxt-link
          >
        </v-row>
        <v-row class="pl-4">
          <nuxt-link tile class="btn mt-4" to="/blog">Blog</nuxt-link>
        </v-row>
        <v-row class="pl-4">
          <nuxt-link tile class="btn mt-4" to="/contact">Contact</nuxt-link>
        </v-row>
      </v-col>
    </v-row>
    <Dot
      v-for="dot in dots"
      :key="dot"
      :x="randomNumber(0, windowHeight)"
      :y="randomNumber(0, windowWidth)"
      :r="randomNumber(0, 4)"
      :o="randomNumber(0, 1)"
    />
  </v-container>
</template>

<script>
import Dot from '@/components/Dot'
export default {
  layout: 'landing',
  components: {
    Dot,
  },
  data() {
    return {
      dots: 100,
      windowHeight: 0,
      windowWidth: 0,
    }
  },
  mounted() {
    this.windowHeight = window.innerHeight
    this.windowWidth = window.innerWidth
  },
  methods: {
    randomNumber(min, max) {
      return Math.random() * (max - min) + min
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  background: gray;
  transition: all 0.5s ease;
  color: white;

  &:hover {
    background: white;
  }
}
</style>
