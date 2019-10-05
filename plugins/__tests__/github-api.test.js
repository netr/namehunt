import mockAxios from "axios";
import {mockData} from "./github-api.mock"
import {searchRepositories} from "../github-api";

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({
      data: mockData
    })
  )
}));

describe('correct get url tests', function () {

  it("should use proper url to search testing in repositories", async () => {
    await searchRepositories('testing', {});
    expect(mockAxios.get).toBeCalledWith('https://api.github.com/search/repositories?q=testing&sort=stars&order=desc')
  });

  it("should default sorting back to desc when entering random characters", async () => {
    await searchRepositories('testing', { order: 'asfasfas' });
    expect(mockAxios.get).toBeCalledWith('https://api.github.com/search/repositories?q=testing&sort=stars&order=desc')
  });

  it("should not include language for empty string", async () => {
    await searchRepositories('testing', { language: "" });
    expect(mockAxios.get).toBeCalledWith('https://api.github.com/search/repositories?q=testing&sort=stars&order=desc')
  });

  it("should use proper url to search testing, order asc in repositories", async () => {
    await searchRepositories('testing', { order: 'asc' });
    expect(mockAxios.get).toBeCalledWith('https://api.github.com/search/repositories?q=testing&sort=stars&order=asc')
  });

  it("should use proper url to search testing, sortby forks, in repositories", async () => {
    await searchRepositories('testing', { sortBy: 'forks' });
    expect(mockAxios.get).toBeCalledWith('https://api.github.com/search/repositories?q=testing&sort=forks&order=desc')
  });

  it("should use proper url to search testing in language javascript in repositories", async () => {
    await searchRepositories('testing', { language: "javascript" });
    expect(mockAxios.get).toBeCalledWith('https://api.github.com/search/repositories?q=testing+language:javascript&sort=stars&order=desc')
  });

  it("should reject if function not used correctly", async () => {
    return expect(searchRepositories()).rejects.toThrow(new Error("Cannot destructure property `order` of 'undefined' or 'null'."));
  });

  it("should reject if function not used correctly", async () => {
    return expect(searchRepositories(" ")).rejects.toThrow(new Error("Cannot destructure property `order` of 'undefined' or 'null'."));
  });

  it("should reject if empty search term was given", async () => {
    return expect(searchRepositories('', {})).rejects.toThrow(new Error("Must include search term"));
  });

  it("should reject if empty search term was given", async () => {
    return expect(searchRepositories(" ", {})).rejects.toThrow(new Error("Must include search term"));
  });

})

describe('return data tests', function () {

  it("should receive correct total count from testing", async () => {
    await searchRepositories('testing', {}).then(resp => {
      expect(resp['total_count']).toBe(1);
    })
  });

  it("should receive correct incomplete_results from testing", async () => {
    await searchRepositories('testing', {}).then(resp => {
      expect(resp['incomplete_results']).toBe(false);
    })
  });

  it("should receive correct name of first item", async () => {
    await searchRepositories('testing', {}).then(resp => {
      expect(resp['items'][0]['name']).toBe('tetros');
    })
  });

})
