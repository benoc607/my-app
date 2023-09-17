import React from "react";
import ImageGallery from 'react-image-gallery';
import GalleryVid01 from './galleryVid01.mp4';
import { images } from '../Images/galleryImages'

{/*01 Photo by RUN 4 FFWPU: https://www.pexels.com/photo/man-rowing-boat-3554634/ */}
{/*02 Photo by Patrick Case: https://www.pexels.com/photo/photo-of-men-on-watercraft-3648325/ */}
{/*03 Photo by Barnabas Davoti: https://www.pexels.com/photo/a-man-rowing-a-boat-8976508/ */}
{/*04 Photo by Barnabas Davoti: https://www.pexels.com/photo/men-rowing-together-on-the-lake-8976604/ */}
{/*05 Photo by Patrick Case: https://www.pexels.com/photo/people-paddling-on-white-row-boat-3682409/ */}
{/*06 Photo by Patrick Case: https://www.pexels.com/photo/woman-riding-kayak-on-river-3693080/ */}

{/*01 Video by Pixabay: https://www.pexels.com/video/rowing-team-855863/ */}

const Gallery = () => {

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="galleryCarousel">
        <ImageGallery 
          items={images} 
          autoPlay={true}
        />   
        <video src={GalleryVid01}  controls="controls" autoplay="false"/>  
      </div>   
    </div>
    );
};

export default Gallery;