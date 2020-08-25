<template>
  <v-container>
    <v-row>
      <v-col cols="2" class="hidden-sm-and-below">
        <v-card class="mx-auto" max-width="400" tile>
          <v-list nav dense>
            <v-subheader>Table Of Contents</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in doc.toc"
                :key="i"
                :inactive="inactive"
              >
                <v-list-item-content>
                  <v-list-item-title :class="item.depth === 3 ? 'ml-3' : ''">
                    <a :href="'#' + item.id">{{ item.text }}</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col>
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
