<template>
  <div class="d-flex flex-column align-center">

    <div class="d-flex align-center col-12 col-md-6">
      <v-text-field
        label="Search github"
        append-icon="search"
        class="pa-5"
        v-model="searchterm"
        name="search_box"
        @keydown.enter="submitSearchTerm"
      ></v-text-field>
      <v-btn color="success" name="search_button" class="mb-4" @click="submitSearchTerm">Search</v-btn>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'search-box',
    methods: {
      submitSearchTerm: function() {
        this.$emit('search', this.searchterm);
      }
    },
    data() {
      return {
        searchterm: '',
        sortBy: "stars",
        sortByItems: ["stars", "forks", "help-wanted-issues", "updated"],
      }
    },
  }
</script>

<style scoped>

</style>
