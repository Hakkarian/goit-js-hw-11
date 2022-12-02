//here we're importing the debounce method from the lodash library
import _debounce from "lodash.debounce";
//simplelightbox for for a modal image
import SimpleLightbox from 'simplelightbox';
//notiflix for notification
import Notiflix from "notiflix";
//here we're importing the axios library for async await promises,
import axios from "axios";
//a render function for markup
import { render } from "./on-markup";
//a destructured variable for gallery
import { gallery } from "./refs";

//here we're declaring the key and the url for backend
const API_KEY = '31597946-edfd908ff545bca0474323597';
const BASE_URL = 'https://pixabay.com/api'

//we're exporting a class to main file
export default class NewsApiService {
    //intanciating a constructor with properties...
    constructor() {
        //of query, which is initially empty
        this.searchQuery = '';
        //page, 1 by default
        this.page = 1;
        //value 40 pictures per one call
        this.per_page = 40;
    }
    async onFetch() {
    const url = `${BASE_URL}/?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${this.page}`
    const response = await axios.get(url)
    console.log(response)
    return response;
}

    //in this function we're...
    fetchArticles() {
        console.log('before', this)
        //comparing, if searchQuery equal to empty string...
        if (this.searchQuery === '') {
            //console.log('fail')
            Notiflix.Notify.failure('Please, type something')
            //and breaking out of the function
            return;
        } 
        //we're calling for the fetch method...
        this.onFetch()
            //destructuring here a returned data...
            .then(({ data }) => {
                console.log(data)
                const totalPages = Math.ceil(data.totalHits / this.per_page)
                //...if the property of the data equals to zero...
                if (data.total === 0) {
                    //fail...
                    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
                    //...and stop the operation
                    return;
                } else if (this.page > totalPages) {
                    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
                    return;
                }
                {
                    Notiflix.Notify.success("Hooray! We found totalHits images.")
                    //otherwise, add one more page
                    this.incrementPage();
                    //clearing the gallery for a new fetch
                    //rendering a markup for images
                    render(data.hits)
                    //creating new lightbox with container and link selectors
                    //also we're refreshing the lightbox for each fetch
                    let lightbox = new SimpleLightbox('.gallery a').refresh();
                    
                    

                    //and calling for a function onScroll
                    
      }
            }).catch(error => console.log(error)) // <--also here we're catching the error
    }
    //adding new page
    incrementPage() {
        this.page += 1;
    }
    //keeping the default value
    resetPage() {

        this.page = 1;
    }
    clearPage() {
        gallery.innerHTML = '';
    }
    //establishing a getter and setter methods, for calling outside of class
    get query() {

        return this.searhQuery;
    }
    set query(newQuery) {

        this.searchQuery = newQuery;
    }
}
//and we're free to go.