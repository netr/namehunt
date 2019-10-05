<template>
  <v-data-table
    :headers="headers"
    :items="results"
    :loading="isDownloading"
    item-key="id"
    loading-text="Retrieving Repositories from GitHub"
    class="elevation-1"
  >
    <template v-slot:item.stargazers_count="{ item }">
      <v-chip :color="getColor(item.stargazers_count)" dark>{{
        item.stargazers_count
      }}</v-chip>
    </template>

    <template v-slot:item.name="{ item }">
      <div v-html="highlight(item.name)"></div>
    </template>

    <template v-slot:item.html_url="{ item }">
      <a :href="item.html_url" target="_blank">{{
        cleanGitHubURL(item.html_url)
      }}</a>
    </template>
  </v-data-table>
</template>
<script>
export default {
  name: "search-results",
  computed: {
    results() {
      return this.$store.state.search.results;
    },
    isDownloading() {
      return this.$store.state.search.downloadingResults;
    },
    totalCount() {
      return this.$store.state.search.totalCount;
    },
    searchTerm() {
      return this.$store.state.search.term;
    }
  },
  methods: {
    cleanGitHubURL(url) {
      return url.replace("https://github.com", "");
    },
    getColor(stars) {
      if (stars > 5000) return "green";
      else if (stars > 1000) return "blue";
      else if (stars > 300) return "orange";
      else return "grey";
    },
    highlight(name) {
      return name.replace(new RegExp(this.searchTerm, "gi"), match => {
        return '<span class="highlightText">' + match + "</span>";
      });
    }
  },
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Owner", value: "owner.login" },
        { text: "Language", value: "language" },
        { text: "Stars", value: "stargazers_count" },
        { text: "Forks", value: "forks" },
        { text: "Last Updated At", value: "updated_at" },
        { text: "Github URL", value: "html_url" }
      ]
    };
  }
};
</script>

<style>
.highlightText {
  background: yellow;
}
</style>
