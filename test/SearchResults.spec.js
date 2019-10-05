import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import SearchResults from "@/components/Search/SearchResults.vue";
import vuetify from "vuetify";
import Vuex from 'vuex';
import Vue from "vue";

describe("SearchResults", () => {
  let wrapper;
  beforeAll(() => {
    Vue.use(vuetify);
    Vue.use(Vuex);
    const store = new Vuex.Store({
      state: {
        search: {
          downloadingResults: false,
          results: [],
          totalCount: 0,
          term: 'netr',
        },
      },
    });

    wrapper = shallowMount(SearchResults, { Vue, store });
  });

  test("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("should clean github url properly", () => {
    expect(wrapper.vm.cleanGitHubURL("https://github.com/netr/namehunt")).toBe("/netr/namehunt");
  });

  test("should set colors appropriately", () => {
    let expectedValues = [
      { stars: 5500, color: "green" },
      { stars: 5000, color: "green" },
      { stars: 2500, color: "blue" },
      { stars: 1000, color: "blue" },
      { stars: 600, color: "orange" },
      { stars: 300, color: "orange" },
      { stars: 299, color: "grey" },
      { stars: 100, color: "grey" },
    ];
    expectedValues.map(ev => {
      expect(wrapper.vm.getColor(ev.stars)).toBe(ev.color);
    })
  });

  test("should highlight netr", () => {
    expect(wrapper.vm.highlight("netrtesting")).toBe("<span class=\"highlightText\">netr</span>testing");
  });

});
