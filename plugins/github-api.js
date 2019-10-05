// This code will be injected before initializing the root App
import axios from 'axios';
export const searchRepositories = async function(keyword, {order = null, sortBy = null, language = null}) {
  sortBy = sortBy === null ? 'stars' : sortBy;
  order = order !== ('asc' || 'desc') ? 'desc' : order;
  language = language === null ? '' : language;

  if (language.trim().length > 0) {
      keyword += `+language:${language}`
  }

  return new Promise(async function(resolve, reject) {

    if (keyword === undefined) {
      reject(new Error("Must include search term"));
      return;
    }

    if (keyword.trim().length === 0) {
      reject(new Error("Must include search term"));
      return;
    }

    await axios.get(`https://api.github.com/search/repositories?q=${keyword}&sort=${sortBy}&order=${order}`)
      .then(({data}) => {
        resolve(data);
      })
      .catch(err => {
        reject(err);
      })

  });

};
