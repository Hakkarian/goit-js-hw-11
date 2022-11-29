import axios from "axios";
import Notiflix from "notiflix";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import InfiniteScroll from "infinite-scroll";

// import onMarkup from "./js/on-markup";
import NewsApiService from "./js/news-service";
// import LoadMoreBtn from "./js/load-more-btn";

const refs = {
    searchForm: document.querySelector(".search-form"),
    gallery: document.querySelector(".gallery"),
    loadBtn: document.querySelector(".load-more")
}
const { searchForm, gallery, loadBtn } = refs;

const newsApiService = new NewsApiService();
// const loadMoreBtn = new LoadMoreBtn({
//   selector: "[data-action='load-more']",
//   hidden: true
// })


const onClear = () => gallery.innerHTML = '';

  
  const onSearch = (e) => {
      e.preventDefault();
  
    newsApiService.searchQuery = e.currentTarget.elements.searchQuery.value;
    newsApiService.resetPage();
    newsApiService.fetchArticles().then(appendMarkup)
    lightbox.refresh();
}
  

const appendMarkup = (hits) => {
  const markup = hits.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads, id }) => {
    return `<a class="card-link" href="${largeImageURL}">
   <div class="photo-card" id=${id}>
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b>
    </p>
  </div>
</div>
</a>`
    
  });
  gallery.insertAdjacentHTML('beforeend', markup);
  return gallery;
}

const onModal = (e) => {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  
}

const onLoadMore = () => {
  newsApiService.fetchArticles().then(appendMarkup);
}


// let scroll = new InfiniteScroll(gallery, {
//   path: '.pagination__next',
//   append: '.post',
//   history: false,
// })


searchForm.addEventListener("scroll", function () {
  if (searchForm.scrollTop + searchForm.clientHeight >= searchForm.scrollHeight) {
    onLoadMore();
    }
  });
  searchForm.addEventListener("submit", onSearch);

  let lightbox = new SimpleLightbox('.gallery a');

