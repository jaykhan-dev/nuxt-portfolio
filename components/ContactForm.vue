<template>
  <div>
    <form action="/success" name="contact" method="POST" data-netlify="true">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              name="fullname"
              label="Full Name"
              class="pa-0 ma-0"
              type="text"
              required
              outlined
            ></v-text-field>
            <v-text-field
              name="email"
              label="E-mail"
              type="email"
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
