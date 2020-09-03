<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" lg="6" offset-lg="2">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
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
            <v-row>
              <v-btn type="submit" class="primary ml-auto mr-3" tile
                >Send</v-btn
              >
            </v-row>
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
