import { Component } from "react";
import {ImageGalleryItemImage, ImageGalleryItem } from "./ImageGalleryItem.styled"


export class GalleryItem extends Component {

render(){
  return(
<ImageGalleryItem>
  <ImageGalleryItemImage src="" alt="" />
</ImageGalleryItem>
  )
}
}