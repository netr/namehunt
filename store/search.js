export const state = () => ({
  downloadingResults: false,
  results: [],
  totalCount: 0,
  term: '',
});

export const mutations = {
  setDownloading (state, val) {
    state.downloadingResults = val;
  },
  setSearchTerm(state, term) {
    state.term = term;
  },

  setResults(state, results, count) {
    state.results = results;
    state.totalCount = count;
  },
};
