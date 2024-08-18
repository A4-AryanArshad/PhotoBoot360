// VideoSlider.js
import React from 'react';
import Slider from 'react-slick';
import './VideoSlider.css'; // Import your custom CSS file

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const videos = [

    'img/slides/002.mov',
    'img/slides/003.mp4',
    'img/slides/004.mov',
    'img/slides/005.mp4',
    'img/slides/006.mp4',
    
  ];

  return (
    <div className="video-slider-container">
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="video-slide">
            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
