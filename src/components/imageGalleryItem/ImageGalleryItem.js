import React, { Component } from 'react';
import { ImgModal } from 'components/modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
    };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imageUrl, alt, imageLargeUrl } = this.props;
    
    return (
      <li className="ImageGalleryItem">
        <img
          src={imageUrl}
          alt={alt}
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <ImgModal
          imgLargeUrl={imageLargeUrl}
            alt={alt}
            isModalOpen={this.state.isModalOpen}
            onClose={this.closeModal}
          />
        )}
      </li>
    );
  }
}
