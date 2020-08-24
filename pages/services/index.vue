<template>
  <div>
    <h1 v-for="(service, index) in services" :key="index">
      {{ service.title }}
    </h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const services = await $content('services', params.slug).fetch()

    return { services }
  },
}
</script>

<style scoped></style>
