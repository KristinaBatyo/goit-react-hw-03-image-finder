
import {ImageGalleryItemImage, ImageGalleryItem } from "./ImageGalleryItem.styled"


export const GalleryItem  =({images}) => {
images.map(({id, webformatURL, largeImageURL}) => {

  return(
    <ul>
        <ImageGalleryItem key={id}>
    <ImageGalleryItemImage src={webformatURL} alt={id} />
  </ImageGalleryItem>
    </ul>

  )
})
}
