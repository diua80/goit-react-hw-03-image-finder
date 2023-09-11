import * as basicLightbox from 'basiclightbox';

export const Modal = ({ imgLargeUrl, alt }) => {
  const instance = basicLightbox.create(`
    <div class="Overlay">
      <div className="Modal">
        <img src=${imgLargeUrl} alt=${alt}/>
      </div>
    </div>
  `);
  instance.show();
};