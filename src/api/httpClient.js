import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const setPostConfig = () => {
  // using multipart/form-data due to file upload and submit
  axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
};

const postData = (url, data) => {
  setPostConfig();
  return axios.post(url, data).then((response) => response.data);
};

export const postFormData = (data) => postData('/posts', data);
