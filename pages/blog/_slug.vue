<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="5" lg="3">
        <v-card class="mx-0" max-width="800" tile>
          <v-list nav dense>
            <v-subheader>Table Of Contents</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <NuxtLink
                v-for="(item, i) in doc.toc"
                :key="i"
                :to="`#${item.id}`"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title :class="item.depth === 3 ? 'ml-3' : ''">
                      {{ item.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </NuxtLink>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" lg="9">
        <nuxt-content :document="doc" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content('blog', params.slug).fetch()
    return { doc }
  },
}
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: white;
}
</style>
