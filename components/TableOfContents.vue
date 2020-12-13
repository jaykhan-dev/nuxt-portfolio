<template>
  <div>
    <template>
      <v-list-item two-line>
        <v-list-item-content class="pb-5 text-center">
          <v-list-item-title class="orange--text display-2"
            >Riza Khan</v-list-item-title
          >
          <v-list-item-subtitle class="text-h6 font-weight-light white--text"
            >Front-End Developer</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content class="pb-5 text-center">
          <v-btn class="orange" @click="goBack">Back</v-btn>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-list nav dense>
      <v-subheader v-if="toc">Table Of Contents</v-subheader>
      <v-list-item-group v-if="toc" color="primary">
        <NuxtLink v-for="(item, i) in toc" :key="i" :to="`#${item.id}`">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title :class="item.depth === 3 ? 'ml-3' : ''">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-list-item-group>
      <v-subheader
        v-if="
          !Object.keys(prev).length === 0 || !Object.keys(next).length === 0
        "
        >Related Articles</v-subheader
      >
      <v-list-item-group
        v-if="
          !Object.keys(prev).length === 0 || !Object.keys(next).length === 0
        "
        color="primary"
      >
        <NuxtLink
          v-if="prev"
          :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
          class="white-text"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ prev.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
        <NuxtLink
          v-if="next"
          :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                {{ next.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true,
    },
    prev: {
      type: Object,
      required: false,
      default: null,
    },
    next: {
      type: Object,
      required: false,
      default: null,
    },
  },
  methods: {
    goBack() {
      this.$router.back()
    },
  },
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: white;
}
</style>
