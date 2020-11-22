<template>
  <div>
    <v-app>
      <nuxt />
      <span class="pa-2 mt-auto ml-auto text--disabled font-weight-thin"
        >Built with <span class="green--text font-weight-bold">Nuxt</span></span
      >
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bus: true,
      random: [],
      other: 'Penis',
    }
  },
}
</script>

<style lang="scss">
body {
  overflow: hidden;
}
</style>
