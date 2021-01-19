import {API_KEY, HTTP} from '../http';

export default {
  popular: (pageNumber) =>
    HTTP.get(
      `movie/popular?api_key=${API_KEY}&language=tr-TR&page=${pageNumber}`,
    ),
  getById: (itemId) =>
    HTTP.get(`movie/${itemId}?api_key=${API_KEY}&language=tr-TR&page`),
  top_rated: (pageNumber) =>
    HTTP.get(
      `movie/top_rated?api_key=${API_KEY}&language=tr-TR&page=${pageNumber}`,
    ),
};
