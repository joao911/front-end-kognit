import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/posts?userId=1';

export const api = axios.create({
  baseURL,
});
