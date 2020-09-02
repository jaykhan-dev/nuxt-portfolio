<template>
  <div>
    <form
      action="/"
      name="contact"
      method="post"
      netlify
      netlify-honeypot="bot-field"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              name="name"
              label="First Name"
              class="pa-0 ma-0"
              required
              outlined
            ></v-text-field>
            <v-text-field
              name="email"
              label="E-mail"
              required
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-textarea outlined name="message" label="Message"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-btn type="submit" class="ml-auto primary">Submit</v-btn>
        </v-row>
      </v-container>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
