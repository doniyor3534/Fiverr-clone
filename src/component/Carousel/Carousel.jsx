import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; // requires a loader
import Slider from "react-slick";

export default function Carouselfun({children,slidesToShow,slidesToScroll}) {
    const settings = {
            dots: false,
            infinite: false,
            speed: 500,
           
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 800,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
  return (
    <Slider {...settings} slidesToShow={slidesToShow} slidesToScroll={slidesToScroll}>
        {children}
    </Slider>
  );
};
