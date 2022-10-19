import axios from 'axios';
import nProgress from 'nprogress';

const APIKEY = '027de047c9c0a312aba006ce7cec3f94';
var BASEURL = 'https://api.themoviedb.org/3';

const apiClient = axios.create({
  baseURL: BASEURL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(config => {
  nProgress.start();
  return config;
});
apiClient.interceptors.response.use(response => {
  nProgress.done();
  return response;
});

export default {
  getMovieMostPopular(page) {
    return apiClient.get(
      `/discover/movie?sort_by=popularity.desc&api_key=${APIKEY}&page=${page}`
    );
  },
  getDataByID(id) {
    return apiClient.get('/clients/' + id);
  },
  createData(data) {
    return apiClient.post('/clients/', data);
  },
  deleteData(id) {
    return apiClient.delete('/clients/' + id);
  },
  updateData(id, data) {
    return apiClient.put('/clients/' + id, data);
  }
};
