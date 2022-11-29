const API_KEY = '31597946-edfd908ff545bca0474323597';
const BASE_URL = 'https://pixabay.com/api'
const options = {
    headers: {
        Authorization: API_KEY
    }
}
export default class NewsApiService {
    constructor() {

        this.searchQuery = '';
        this.page = 1;
    }

    fetchArticles() {
        console.log('before', this)
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=false&per-page=10&page=${this.page}`
        return fetch(url)
            .then(r => r.json())
            .then(data => {
                this.page += 1;
                return data.hits;
            }
            );
    }

    resetPage() {
        this.page = 1;
    }
    get query() {
        return this.searhQuery;
    }
    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}