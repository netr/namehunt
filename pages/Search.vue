<template>
  <div>
    <v-card>
      <v-card-title class="pa-5 blue--text">
        GitHub Repository Name Search
      </v-card-title>
      <v-card-text>
        <search-box @search="search"></search-box>
        <search-results/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import SearchBox from '../components/Search/SearchBox'
  import {searchRepositories} from '../plugins/github-api';
  import SearchResults from "../components/Search/SearchResults";
  import { mapMutations } from 'vuex'

  export default {
      components: {
        SearchResults,
        SearchBox,
      },
      methods: {
        ...mapMutations({
          setDownloading: 'search/setDownloading',
          setResults: 'search/setResults',
          setSearchTerm: 'search/setSearchTerm',
        }),
        search: async function(term) {
          this.setDownloading(true);
          this.setResults([], 0);
          this.setSearchTerm(term);

          await searchRepositories(term, {})
            .then(resp => {
              this.setDownloading(false);
              this.setResults(resp.items, resp.total_count);
            })
            .catch(err => {
              this.setDownloading(false);
              console.log(err);
            })
        },
      },
    }
</script>
