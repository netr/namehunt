import { mount } from "@vue/test-utils";
import Search from "@/pages/Search.vue";

describe("Search", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Search);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
