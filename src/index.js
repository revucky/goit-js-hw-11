import './sass/main.scss';

import Notiflix from 'notiflix';
import refs from './services/refs';
import fetchPic from './services/fetchPic';
// import pageOption from './services/pageOption';
import markupList from './components/picMarkup';

let page = 0;
let totalPages = 1;

const searchInput = e => {
  e.preventDefault();
  refs.galleryDiv.innerHTML = '';
  if (!refs.input.value) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.',
    );
    return;
  }
  page = 1;
  const name = refs.input.value.trim();
  // console.log(name);
  fetchPic(name, page)
    .then(data => {
      // console.log(data);
      const markup = markupList(data);
      console.log(markup);
      loadMore.classList.remove('visually-hidden');
    })
    .catch(error);
};

const loadMore = e => {
  e.preventDefault();
  page += 1;
  if (refs.input.value) {
    const name = refs.input.value.trim();
    return fetchPic(name, page)
      .then(data => {
        markupList(data);
        const maxPage = Math.ceil(data.totalHits / 40);
        lightbox.refresh();
        if (page > maxPage) {
          Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
          loadMore.classList.add('visually-hidden');
          lightbox.refresh();
        }
      })
      .catch(error);
  }
  galleryDiv.innerHTML = '';
};

function error() {
  return Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.',
  );
}

refs.formSubmit.addEventListener('submit', searchInput);
refs.loadMoreBtn.addEventListener('click', loadMore);
