import _debounce from "lodash.debounce";
//we're importing an object with declaration and a class with its methods - feel free to check
import { searchForm } from "./js/refs";
import NewsApiService from "./js/news-service";

//crucial part - we're creating a new class
const newsApiService = new NewsApiService();

// in this function we're...
const onSearch = (e) => {
    //...preventing from reloading the page
      e.preventDefault();
    //pasting into the searchQuery constructor property with the dynamic user value
    newsApiService.searchQuery = e.currentTarget.elements.searchQuery.value.trim();
  //   //... and fetching the results from the onFetch method
  newsApiService.resetPage();
  newsApiService.clearPage();
  newsApiService.fetchArticles();
  
}
const onScroll = () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    //we're fetching for the info...
    newsApiService.fetchArticles();
  }
}

  //crucial part - when submitting the form, adding to it a listener with the function onSearch
searchForm.addEventListener("submit", onSearch);
window.addEventListener("scroll", _debounce(onScroll, 200))


