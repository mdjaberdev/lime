import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import downloadOne from "/src/assets/downloadOne.png";
import downloadTwo from "/src/assets/downloadTwo.png";
import downloadThree from "/src/assets/downloadThree.png";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="bg-[#1A1A1A] py-12 md:py-16 lg:py-20">
      <Container>
        <Flex className="flex-col lg:flex-row items-center justify-center lg:justify-around gap-10 lg:gap-0">
          {/* Mobile Image */}
          <div className="">
            <Link>
              <Images
                srcImg={downloadOne}
                className="w-64 sm:w-72 md:w-80 lg:w-auto"
              />
            </Link>
          </div>

          {/* Content */}
          <div className="">
            <h3 className="text-white text-3xl md:text-4xl lg:text-[40px] font-poppins">
              Download the App
            </h3>

            <Flex className="flex-col sm:flex-row justify-center lg:justify-start items-center mt-6 gap-4 lg:gap-x-5">
              <Link>
                <Images srcImg={downloadTwo} className="w-44 sm:w-auto" />
              </Link>

              <Link>
                <Images srcImg={downloadThree} className="w-44 sm:w-auto" />
              </Link>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Download;
