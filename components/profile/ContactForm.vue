<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col>
            <p class="text-h3 orange--text">Contact</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="text-headline white--text">
              If you have a project in mind please don't hesitate to reach out!
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <form name="contact" method="POST" data-netlify="true">
              <v-text-field
                type="text"
                name="name"
                label="Name"
                outlined
              ></v-text-field>
              <v-text-field
                type="email"
                name="email"
                label="Email"
                outlined
              ></v-text-field>
              <v-textarea name="message" label="Message" outlined></v-textarea>
              <v-row>
                <v-btn type="submit" class="orange ml-auto mr-3">Send</v-btn>
              </v-row>
            </form>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <p class="orange--text text-h4">Contact Info</p>
            <div class="d-flex">
              <p class="orange--text">Email</p>
              <p class="ml-2 white--text font-weight-bold">
                khanriza@gmail.com
              </p>
            </div>
            <div class="d-flex">
              <p class="orange--text">Phone</p>
              <p class="ml-2 white--text font-weight-bold">613-296-2462</p>
            </div>
            <div class="d-flex">
              <p class="orange--text">Location</p>
              <p class="ml-2 white--text font-weight-bold">Canada</p>
            </div>
          </v-col>
        </v-row>
        <v-row class="hidden-md-and-up">
          <v-col>
            <p class="orange--text text-h4">Social Media</p>
            <SocialMedia />
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

<style scoped></style>
