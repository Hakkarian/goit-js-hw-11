//here we're declaring and exporting an object with the form and the gallery
const refs = {
    searchForm: document.querySelector(".search-form"),
    gallery: document.querySelector(".gallery")
}
let lightbox;

const { searchForm, gallery } = refs;

export { searchForm, gallery, lightbox };