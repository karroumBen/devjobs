import axios from 'axios';

export const addTokenToRequest = (acc) => {
  const token = localStorage.getItem('token');

  if (token !== null) {
    acc.headers.Authorization = `Basic ${token}`;
  }

  return acc;
};

/* istanbul ignore next */
(() => {
  axios.interceptors.request.use(addTokenToRequest, err => Promise.reject(err));
})();