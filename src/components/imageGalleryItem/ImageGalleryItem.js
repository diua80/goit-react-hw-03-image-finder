import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import { Modal } from 'components/modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    lightboxInstance: null, // Додайте посилання на інстанс basicLightbox у стан
  };

  openModal = () => {
    this.setState({ isModalOpen: true });

    // Перевірка, чи створений інстанс basicLightbox
    if (!this.state.lightboxInstance) {
      const { imgLargeUrl, alt } = this.props;
      const lightboxInstance = basicLightbox.create(`
        <div class="modal">
          <div className="overlay">
            <img src=${imgLargeUrl} alt=${alt} />
          </div>
        </div>
      `);

      this.setState({ lightboxInstance }, () => {
        // Показати модальне вікно, коли інстанс готовий
        this.state.lightboxInstance.show();
      });
    }
  };

  closeModal = () => {
    if (this.state.lightboxInstance) {
      // Приховати модальне вікно, якщо інстанс існує
      this.state.lightboxInstance.close();
    }
    this.setState({ isModalOpen: false });
  };

  render() {
    const { imageUrl, alt, imageLargeUrl } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.openModal}>
        <img src={imageUrl} alt={alt} />
        {this.state.isModalOpen && (
          <Modal imgLargeUrl={imageLargeUrl} alt={alt} closeModal={this.closeModal} />
        )}
      </li>
    );
  }
}
