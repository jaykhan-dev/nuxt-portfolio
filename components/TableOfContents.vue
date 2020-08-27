<template>
  <v-card class="mx-0" max-width="800" tile>
    <v-list nav dense>
      <v-subheader>Table Of Contents</v-subheader>
      <v-list-item-group v-model="item" color="primary">
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
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    toc: {
      type: Object,
      required: true,
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
