import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import blogOne from "/src/assets/limeblogOne.png";
import blogTwo from "/src/assets/limeblogTwo.png";
import blogThree from "/src/assets/limeblogThree.png";
import Button from "../Button";

const Limetimeblog = () => {
  return (
    <div className="bg-[#1E1E1E] pt-12 md:pt-16 lg:pt-18 pb-10 lg:pb-12">
      <Container>
        {/* Heading */}
        <div className="text-center px-4">
          <h4 className="text-[#00B200] text-lg md:text-xl lg:text-[20px] font-poppins">
            Why Lime
          </h4>

          <h3 className="text-white text-3xl md:text-4xl lg:text-[40px] font-poppins mt-2">
            Our Core Principles
          </h3>
        </div>

        {/* Blog Cards */}
        <Flex className="flex-col md:flex-row gap-8 lg:gap-x-5 justify-center mt-8 lg:mt-10">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Images srcImg={blogOne} className="w-full rounded-2xl" />

            <h4 className="text-[#00DD00] text-base font-bold font-poppins pt-5 pb-3">
              Sustainability
            </h4>

            <h3 className="text-white text-2xl lg:text-[28px] font-poppins leading-snug lg:leading-11">
              With Our Industry-Leading Net-Zero Target Validated Our Hard Work
              Continues
            </h3>

            <p className="text-white text-base font-poppins pt-6">
              by Andrew Savage | January 16, 2024
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Images srcImg={blogTwo} className="w-full rounded-2xl" />

            <h3 className="text-white text-2xl lg:text-[28px] font-poppins pt-5">
              Hero of the Month: Respire
            </h3>

            <p className="text-white text-base font-poppins pt-6 lg:pt-[149px]">
              January 10, 2024
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto lg:mx-0">
            <Images srcImg={blogThree} className="w-full rounded-2xl" />

            <h3 className="text-white text-2xl lg:text-[28px] font-poppins pt-5 leading-snug lg:leading-11">
              Lime Recaps 2023 With Its Annual ‘Ride Replay’
            </h3>

            <p className="text-white text-base font-poppins pt-6 lg:pt-[108px]">
              December 13, 2023
            </p>
          </div>
        </Flex>

        {/* Button */}
        <div className="text-center mt-10 lg:mt-14">
          <Button className="inline-block cursor-pointer" btnText="View More" />
        </div>
      </Container>
    </div>
  );
};

export default Limetimeblog;
