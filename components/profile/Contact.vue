<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <p class="text-h6 orange--text">Send me a message:</p>
            <form name="contact" action="/" method="POST" data-netlify="true">
              <v-text-field type="text" name="name" label="Name"></v-text-field>
              <v-text-field
                type="email"
                name="email"
                label="Email"
                solid
              ></v-text-field>
              <v-textarea name="message" label="Message"></v-textarea>
              <v-row>
                <v-col>
                  <v-btn type="submit" class="orange ml-auto mr-3"
                    >Contact Me</v-btn
                  >
                </v-col>
              </v-row>
            </form>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <p class="orange--text text-h6">Contact Info</p>
            <div class="d-flex">
              <p class="orange--text text-body-2">Email</p>
              <p class="ml-2 white--text text-body-2">khanriza@gmail.com</p>
            </div>
            <div class="d-flex">
              <p class="orange--text text-body-2">Phone</p>
              <p class="ml-2 white--text text-body-2">613-296-2462</p>
            </div>
            <div class="d-flex">
              <p class="orange--text text-body-2">Location</p>
              <p class="ml-2 white--text text-body-2">Canada</p>
            </div>
          </v-col>
        </v-row>
        <v-row class="hidden-lg-and-up">
          <v-col>
            <p class="orange--text text-h6">Social Media</p>
            <SocialMedia />
          </v-col>
        </v-row>
        <v-row class="hidden-lg-and-up">
          <v-col>
            <NuxtLink to="/blog"><v-btn class="orange">Blog</v-btn></NuxtLink>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SocialMedia from '@/components/SocialMedia'

export default {
  components: {
    SocialMedia,
  },
}
</script>
