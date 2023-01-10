import {ImageGallery} from "./ImageGallery.styled"




export const Gallery = ({images }) => {
    const El = images.map(({id, webformatURL, largeImageURL}) => {
        return(
            <ImageGallery key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} >
            {El && El}  

            </ImageGallery>
        )
    })
        console.log(El)
}