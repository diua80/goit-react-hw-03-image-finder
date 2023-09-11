import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            imageLargeUrl={image.largeImageURL}
            alt={image.tags}
          />
        ))}
      </ul>
    </div>
  );
};
