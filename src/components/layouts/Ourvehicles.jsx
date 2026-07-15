import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import vehiclesOne from "/src/assets/ourvehiclesOne.png";
import vehiclesTwo from "/src/assets/ourvehiclesTwo.png";

const Ourvehicles = () => {
  return (
    <Container className="py-12 md:py-16 lg:py-18">
      <div className="text-center px-4">
        <h4 className="text-[#00B200] text-lg md:text-xl lg:text-[20px] font-poppins">
          Our Vehicles
        </h4>

        <h3 className="text-black text-3xl md:text-4xl lg:text-[40px] font-poppins mt-2">
          Discover the Gen4
        </h3>
      </div>

      <Flex className="flex-col md:flex-row justify-center items-center gap-6 lg:gap-x-5 mt-8 lg:mt-10">
        <div className="relative w-full max-w-sm lg:max-w-none">
          <Images srcImg={vehiclesOne} className="w-full h-auto" />

          <h4 className="text-black text-lg lg:text-[20px] font-poppins absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-10 whitespace-nowrap">
            E-Scooter
          </h4>
        </div>

        <div className="relative w-full max-w-sm lg:max-w-none">
          <Images srcImg={vehiclesTwo} className="w-full h-auto" />

          <h4 className="text-black text-lg lg:text-[20px] font-poppins absolute left-1/2 -translate-x-1/2 bottom-6 lg:bottom-10 whitespace-nowrap">
            E-Bike
          </h4>
        </div>
      </Flex>
    </Container>
  );
};

export default Ourvehicles;
