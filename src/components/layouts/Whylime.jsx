import React from "react";
import Container from "../Container";

import whylimeOne from "/src/assets/whylimeOne.png";
import whylimeTwo from "/src/assets/whylimeTwo.png";
import whylimeThree from "/src/assets/whylimeThree.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Images from "../Images";

const Whylime = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // LG Same
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container className="mt-12 md:mt-14 lg:mt-15 mb-14 md:mb-16 lg:mb-20">
      <div className="text-center px-4">
        <h4 className="text-[#00B200] text-lg md:text-xl lg:text-[20px] font-poppins">
          Why Lime
        </h4>

        <h3 className="text-black text-3xl md:text-4xl lg:text-[40px] font-poppins mt-2">
          Our Core Principles
        </h3>
      </div>

      <div className="-mx-2 mt-8 lg:mt-10">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="outline-none px-2">
            <Images srcImg={whylimeOne} className="w-full rounded-2xl" />

            <div className="relative mt-4">
              <h4 className="text-black text-lg lg:text-[20px] font-poppins">
                Safety
              </h4>

              <div className="lg:w-[63px] h-[1px] bg-black mt-1"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="outline-none px-2">
            <Images srcImg={whylimeTwo} className="w-full rounded-2xl" />

            <div className="relative mt-4">
              <h4 className="text-black text-lg lg:text-[20px] font-poppins">
                Sustainability
              </h4>

              <div className="lg:w-[134px] h-[1px] bg-black mt-1"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="outline-none px-2">
            <Images srcImg={whylimeThree} className="w-full rounded-2xl" />

            <div className="relative mt-4">
              <h4 className="text-black text-lg lg:text-[20px] font-poppins">
                Community
              </h4>

              <div className="lg:w-[118px] h-[1px] bg-black mt-1"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="outline-none px-2">
            <Images srcImg={whylimeTwo} className="w-full rounded-2xl" />

            <div className="relative mt-4">
              <h4 className="text-black text-lg lg:text-[20px] font-poppins">
                Sustainability
              </h4>

              <div className="lg:w-[134px] h-[1px] bg-black mt-1"></div>
            </div>
          </div>
        </Slider>
      </div>
    </Container>
  );
};

export default Whylime;
