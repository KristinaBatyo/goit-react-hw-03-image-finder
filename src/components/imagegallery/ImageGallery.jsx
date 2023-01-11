import {ImageGallery} from "./ImageGallery.styled"
import { GalleryItem } from "components/imagegalleryitem/ImageGalleryItem"
import PropTypes from 'prop-types';



export const Gallery = ({props, imagesClick}) => {
    const images = props.images;

        return(
            
            <ImageGallery>
                {images.map(({id, webformatURL, tags, largeImageURL}) => (
                <GalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
                largeImageURL={largeImageURL}
                imagesClick={imagesClick}
                />
                ))}
            
            </ImageGallery>
        )
}

Gallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string,
            tags: PropTypes.string,
            largeImageURL: PropTypes.string,
        }),
    ),
    imagesClick: PropTypes.func,
}