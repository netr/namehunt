import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import SearchBox from "@/components/Search/SearchBox.vue";
import vuetify from "vuetify";
import Vue from "vue";

describe("SearchBox", () => {
  let wrapper;
  beforeAll(() => {
    Vue.use(vuetify);
    wrapper = mount(SearchBox, { Vue });
  });

  test("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("enters text and has correct value in data", () => {
    let searchText = wrapper.find('[name="search_box"]');
    searchText.setValue("netr");
    expect(wrapper.vm.searchterm).toBe("netr");
  });

  test("enters text, presses enter, and emits correct value", () => {
    let searchText = wrapper.find('[name="search_box"]');
    searchText.setValue("netr");
    searchText.trigger('keydown.enter');
    expect(wrapper.emitted().search[0]).toEqual(["netr"])
  });

  test("enters text, clicks button, and emits correct value", () => {
    let searchText = wrapper.find('[name="search_box"]');
    searchText.setValue("netr");
    let searchButton = wrapper.find('[name="search_button"]');
    searchButton.trigger('click');
    expect(wrapper.emitted().search[0]).toEqual(["netr"])
  });

});


describe("Refine Search", () => {
  let wrapper;
  beforeAll(() => {
    Vue.use(vuetify);
    wrapper = mount(SearchBox, { Vue });
  });

  test("should toggle refine search box", () => {

  });

  test("should close refine search box", () => {

  });

  test("should language specific search", () => {

  });

  test("should sort by stars asc", () => {

  });

});
