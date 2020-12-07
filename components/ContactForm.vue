<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12" lg="6">
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
            <v-btn type="submit" class="primary ml-auto mr-3" tile>Send</v-btn>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style scoped></style>
