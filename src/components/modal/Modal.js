import * as basicLightbox from 'basiclightbox';

export const Modal = ({ imgLargeUrl, alt }) => {
  const instance = basicLightbox.create(`
    <div class="Overlay">
      <div className="Modal">
        <img src=${imgLargeUrl} alt=${alt} width="800" height="600"/>
      </div>
    </div>
  `, {
    onShow: (instance) => {
      instance.element().querySelector('div').onclick = instance.close
    }
  });
  instance.show();
};