<template>
  <div>
    <v-container
      v-for="(component, index) in components"
      :id="component.name"
      :key="index"
      style="background-size: cover;"
      :style="{
        backgroundImage: `url(${component.img ? component.img : ''})`,
        background: component.gradient,
        height: component.height,
      }"
      :class="component.bgColor"
      fluid
    >
      <component :is="component.name"></component>
    </v-container>
  </div>
</template>

<script>
import About from '@/components/profile/About'
import Name from '@/components/profile/Name'
import History from '@/components/profile/History'
import Contact from '@/components/profile/Contact'
import { mapState } from 'vuex'

export default {
  layout: 'default',
  components: {
    About,
    Name,
    History,
    Contact,
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
