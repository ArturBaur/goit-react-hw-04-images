import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39861868-f04abea59eb3e0f6d0b45f8fd';

export default class PostsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchPost() {
    const OPTIONS = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 12,
    });

    const response = await axios.get(`${BASE_URL}?${OPTIONS.toString()}`);
    this.incrementPage();
    return response.data;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }
}
