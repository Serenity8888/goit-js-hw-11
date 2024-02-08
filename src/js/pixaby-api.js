export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42272333-f27cbc5f23d33ce15b8efaaf0';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};