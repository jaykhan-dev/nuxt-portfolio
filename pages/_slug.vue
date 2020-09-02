<template>
  <div>
    <nuxt-content :document="doc" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const doc = await $content(params.slug || 'index').fetch()
    return { doc, params }
  },
}
</script>

<style scoped></style>
