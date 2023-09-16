import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import { Modal } from 'components/modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    lightboxInstance: null,
  };

  openModal = () => {
    if (!this.state.lightboxInstance) {
      const { imgLargeUrl, alt } = this.props;
      const lightboxInstance = basicLightbox.create(`
        <div class="modal">
          <div className="overlay">
            <img src=${imgLargeUrl} alt=${alt} />
          </div>
        </div>
      `);
      lightboxInstance.show();
      this.setState({ lightboxInstance });
    } else {
      this.state.lightboxInstance.show();
    }
    this.setState({ isModalOpen: true });
  };

  // closeModal = () => {
  //   if (this.state.lightboxInstance) {
  //     this.state.lightboxInstance.close();
  //   }
  //   this.setState({ isModalOpen: false });
  // };

  render() {
    const { imageUrl, alt, imageLargeUrl } = this.props;
    return (
      <li className="ImageGalleryItem" onClick={this.openModal}>
        <img src={imageUrl} alt={alt} />
        {this.state.isModalOpen && (
          <Modal imgLargeUrl={imageLargeUrl} alt={alt} />
        )}
      </li>
    );
  }
}
