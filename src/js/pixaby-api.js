export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40924863-f555801e4729fc82d13bdd65e';

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