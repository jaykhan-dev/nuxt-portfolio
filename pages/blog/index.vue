<template>
  <div>
    <h1 v-for="(blog, index) in blogs" :key="index">{{ blog.title }}</h1>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blogs = await $content('blog', params.slug).fetch()

    return { blogs }
  },
}
</script>

<style scoped></style>
