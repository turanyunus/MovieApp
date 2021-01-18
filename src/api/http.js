import axios from 'axios';

export const API_KEY = '7f6d23e3badd3cfc444eb9749b616fbd';

export const SERVICE_BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/';

export const HTTP = axios.create({
  baseURL: SERVICE_BASE_URL,
  headers: {'content-type': 'application/json'},
});
export const EXTERNAL = axios.create();

function successHandler(response) {
  if (response.data != null) {
    return {
      data: response.data,
      error: response.data.error,
      success: response.data.success,
    };
  } else {
    return Promise.reject(false);
  }
}

function errorHandler(error) {
  if (error.response !== undefined) {
    return Promise.reject(false);
  }
}

HTTP.interceptors.request.use((config) => config);

HTTP.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error),
);
