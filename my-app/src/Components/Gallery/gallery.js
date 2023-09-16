import React from "react";
import GalleryImg01 from './galleryImg01.jpg';
import GalleryImg02 from './galleryImg02.jpg';
import GalleryImg03 from './galleryImg03.jpg';
import GalleryImg04 from './galleryImg04.jpg';
import GalleryImg05 from './galleryImg05.jpg';
import GalleryImg06 from './galleryImg06.jpg';

{/*01 Photo by RUN 4 FFWPU: https://www.pexels.com/photo/man-rowing-boat-3554634/ */}
{/*02 Photo by Patrick Case: https://www.pexels.com/photo/photo-of-men-on-watercraft-3648325/ */}
{/*03 Photo by Barnabas Davoti: https://www.pexels.com/photo/a-man-rowing-a-boat-8976508/ */}
{/*04 Photo by Barnabas Davoti: https://www.pexels.com/photo/men-rowing-together-on-the-lake-8976604/ */}
{/*05 Photo by Patrick Case: https://www.pexels.com/photo/people-paddling-on-white-row-boat-3682409/ */}
{/*06 Photo by Patrick Case: https://www.pexels.com/photo/woman-riding-kayak-on-river-3693080/ */}


const Gallery = () => {

  const galleryItems = [
    <img className="imgPreview" src={GalleryImg01} onclick="currentSlide(1)" alt="Coxsawin - Name"/>, 
    <img className="imgPreview" src={GalleryImg02} onclick="currentSlide(1)" alt="Stroke - Name"/>, 
    <img className="imgPreview" src={GalleryImg03} onclick="currentSlide(1)" alt="2nd Seat - Name"/>, 
    <img className="imgPreview" src={GalleryImg04} onclick="currentSlide(1)" alt="3rd Seat - Name"/>, 
    <img className="imgPreview" src={GalleryImg05} onclick="currentSlide(1)" alt="4th Seat - Name"/>, 
    <img className="imgPreview" src={GalleryImg06} onclick="currentSlide(1)" alt="4th Seat - Name"/>, 
  ];
  const galleryList = galleryItems.map((gallery,index) => <li key={index}>{gallery}</li>);

  return (
    <div className="gallery">
      <h3>Gallery</h3>
      <ul className="imgPreviewRow">{galleryList}</ul>
    </div>
    );
};

export default Gallery;