
import {ImageGalleryItemImage, ImageGalleryItem } from "./ImageGalleryItem.styled"


export const GalleryItem  =({webformatURL, tags, largeImageURL, imagesClick}) => {
  return(
        <ImageGalleryItem>
    <ImageGalleryItemImage 
    src={webformatURL} 
    alt={tags} 
    onClick={() => imagesClick(largeImageURL)}
    />

  </ImageGalleryItem>
  )
}
