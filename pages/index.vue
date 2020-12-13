<template>
  <div>
    <v-container
      v-for="(component, index) in components"
      :id="component.name"
      :key="index"
      style="height: 100vh; background-size: cover;"
      :style="{
        backgroundImage: `url(${component.img ? component.img : ''})`,
      }"
      :class="component.bgColor"
      fluid
    >
      <component :is="component.name"></component>
    </v-container>
  </div>
</template>

<script>
import Jobs from '@/components/profile/Jobs'
import Name from '@/components/profile/Name'
import Skills from '@/components/profile/Skills'
import ContactForm from '@/components/profile/ContactForm'
import { mapState } from 'vuex'

export default {
  layout: 'default',
  components: {
    Jobs,
    Name,
    Skills,
    ContactForm,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      components: (state) => state.user.components,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
