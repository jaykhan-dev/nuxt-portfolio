<template>
  <v-container class="fill-height my-5 py-5">
    <v-row class="fill-height d-flex align-end">
      <v-col>
        <v-row>
          <v-col>
            <p class="text-h3 orange--text">Who I am</p>
            <p class="text-body-2 white--text">
              Based in Canada, I am originally from Kashmir. I am currently
              learning French.
            </p>
            <p class="text-body-2 white--text">
              I started as a graphic designer but eventually moved onto UI/UX
              because it seemed like the next logical step. I enjoy creating
              interactive experiences and learning new tools and technologies.
            </p>
            <p class="text-body-2 white--text">
              My goal is to eventually create a mixed-media publishing company
              and expand my design skills to create stellar applications and
              websites.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <p class="orange--text text-h3">What I can do:</p>
          <v-expansion-panels accordion>
            <v-expansion-panel v-for="(skill, i) in skills" :key="i">
              <v-expansion-panel-header class="text-h6 font-weight-thin">{{
                skill.title
              }}</v-expansion-panel-header>
              <v-expansion-panel-content class="text-body-2">
                {{ skill.description }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      skills: (state) => state.user.skills,
    }),
  },
}
</script>

<style lang="scss" scoped>
p {
  position: relative;
  z-index: 100;
}
</style>
