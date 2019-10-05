<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Welcome to NameHunt
        </v-card-title>
        <v-card-text>
          <p>If you're looking to start a new Open Source project, start with NameHunt.</p>
          <p>
            Simply type in project name ideas and see if there is already a well known project on github with that name.
          </p>
          <p>
            <hr class="my-3">
            Powered by <strong>Vue.js</strong>, <strong>Nuxt.js</strong>, <strong>Vuetify.js</strong>, <strong>GitHub API</strong>
          </p>
          <hr class="my-3">
          <a
            href="https://github.com/netr/namehunt"
            target="_blank"
          >
            NameHunt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/search"
          >
            Start Searching
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {}
</script>
