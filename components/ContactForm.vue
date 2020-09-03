<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" offset-lg="4">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            <v-text-field
              type="text"
              name="name"
              label="Full Name"
              oulined
            ></v-text-field>
            <v-text-field
              type="email"
              name="email"
              label="Email"
              oulined
            ></v-text-field>
            <v-textarea name="message" label="Message" outlined></v-textarea>
            <v-btn type="submit" class="primary">Send</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
