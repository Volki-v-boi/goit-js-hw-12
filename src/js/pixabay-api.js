import axios from 'axios';

export const returnPromise = (q, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '43772566-941124190665b8a45a176dbcd',
      q,
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: '15',
    },
  });
};
