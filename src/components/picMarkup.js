import refs from '../services/refs';

function markupList(data) {
  const markUp = data
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<div class="photo-card">
  <a href="${largeImageURL}" ><img src="${webformatURL}" alt="${tags}" loading="lazy" width=300 /></a>
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

  refs.galleryDiv.insertAdjacentHTML('beforeend', markUp);
}

export default markupList;
