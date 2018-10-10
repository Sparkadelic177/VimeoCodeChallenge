import React from 'react';
import '../css/imageSlide.css';

const ImageSlide = ({data}) => {
  return(
    <div className="image-container">
      <img className="background-image" src={data.image} alt='moive cover background' />
      <div className="inner-content">
        <img className="inner-image" src={data.image} alt='movie cover' / >
        <div className="inner-text">
          <h1>{data.title}</h1>
          <p className="description">{data.description}</p>
          <div className='buttons'>
            <h3 className="button buynow ">
              <i className="fas fa-play"> Buy Now </i>
            </h3>
            <h3 className="button">Watch Trailer</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlide;
