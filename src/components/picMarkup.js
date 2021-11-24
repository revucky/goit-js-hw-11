import refs from '../services/refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

function markupList(data) {
  const markUp = data.hits
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<div class="photo-card">
  <a href="${largeImageURL}" ><img src="${webformatURL}" alt="${tags}" loading="lazy" width=298 /></a>
  <div class="info">
    <p class="info-item">likes: 
      <b>${likes}</b>
    </p>
    <p class="info-item">views:
      <b> ${views}</b>
    </p>
    <p class="info-item">comments:
      <b> ${comments}</b>
    </p>
    <p class="info-item">downloads: 
      <b>${downloads}</b>
    </p>
  </div>
</div>
`;
    })
    .join('');
  console.log(markUp);
  refs.galleryDiv.insertAdjacentHTML('beforeend', markUp);
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  totalPages = data.totalHits;
}

export default markupList;
