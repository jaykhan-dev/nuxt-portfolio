<template>
  <div>
    <h1 v-for="(project, index) in projects" :key="index">
      {{ project.title }}
    </h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug).fetch()

    return { projects }
  },
}
</script>

<style scoped></style>
