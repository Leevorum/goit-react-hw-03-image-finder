import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default function GalleryRender({ images }) {
  return (
    <ul className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
      ))}
    </ul>
  );
}
