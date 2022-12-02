//simply speaking, rendering a markup into the gallery
export { render }
const gallery = document.querySelector('.gallery');
const render = (hits) => {
  //after getting hits property from data, for each card we're destructuring the set of properties
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
  }).join(' '); //<-- and joining them into the whole list
  //and pasting this list inside of the gallery div
    gallery.insertAdjacentHTML('beforeend', markup)
}