
export { onFetch }

import axios from "axios";
import NewsApiService from "./news-service";
const API_KEY = '31597946-edfd908ff545bca0474323597';
const BASE_URL = 'https://pixabay.com/api'
const newsApiService = NewsApiService();

async function onFetch () {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${newsApiService.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${newsApiService.page}`
    const response = await axios.get(url)
    console.log(response)
    return response;
}