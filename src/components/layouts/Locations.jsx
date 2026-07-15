import React from "react";
import Container from "../Container";
import Images from "../Images";
import locationOne from "/src/assets/locationOne.png";
import locationTwo from "/src/assets/locationTwo.png";
import locationThree from "/src/assets/locationThree.png";
import { FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Locations = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // LG Same
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    swipeToSlide: true,
    pauseOnHover: true,
    adaptiveHeight: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  const cities = [
    {
      image: locationOne,
      title: "New York",
    },
    {
      image: locationTwo,
      title: "San Francisco",
    },
    {
      image: locationThree,
      title: "Washington, DC",
    },
    {
      image: locationTwo,
      title: "San Francisco",
    },
  ];

  return (
    <Container className="py-14 md:py-18 lg:py-21 overflow-hidden">
      {/* Heading */}
      <div className="text-center px-4">
        <h4 className="text-[#00B200] text-lg md:text-xl lg:text-[20px] font-poppins">
          Locations
        </h4>

        <h3 className="text-black text-3xl md:text-4xl lg:text-[40px] font-poppins mt-2">
          Our U.S. Cities
        </h3>
      </div>

      {/* Slider */}
      <div className="mt-8 lg:mt-10">
        <Slider {...settings}>
          {cities.map((city, index) => (
            <div key={index} className="px-2">
              <div className="overflow-hidden rounded-2xl">
                <Images
                  srcImg={city.image}
                  className="w-full h-[150px] sm:h-[320px] md:h-[350px] lg:h-auto object-cover"
                />
              </div>

              <div className="flex lg:items-center gap-x-3 mt-4">
                <h4 className="text-sm lg:text-[20px] font-poppins underline">
                  {city.title}
                </h4>

                <FaArrowRight className="text-sm lg:text-lg flex-shrink-0" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Locations;
