import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import appOne from "/src/assets/theappOne.png";
import appTwo from "/src/assets/theappTwo.png";
import appThree from "/src/assets/theappThree.png";

const Theapp = () => {
  return (
    <div className="pt-12 md:pt-16 lg:pt-17 pb-16 md:pb-24 lg:pb-32 bg-[#EEEEEE]">
      <Container>
        <div className="text-center px-4">
          <h4 className="text-[#00B200] text-lg md:text-xl lg:text-[20px] font-poppins">
            The App
          </h4>

          <h3 className="text-black text-3xl md:text-4xl lg:text-[40px] font-poppins mt-2">
            How to Lime
          </h3>
        </div>

        <Flex className="flex-col md:flex-row gap-6 lg:gap-x-5 mt-8 lg:mt-10">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Images className="rounded-t-3xl w-full" srcImg={appOne} />

            <div className="bg-white rounded-b-3xl flex flex-col sm:flex-row h-auto lg:h-35 p-6 lg:p-7">
              <h4 className="text-[#00B200] text-lg lg:text-[20px] font-poppins">
                Locate
              </h4>

              <p className="text-black text-sm font-poppins mt-3 sm:mt-0 sm:ml-6 lg:ml-15 leading-6">
                Download the Lime app to find a vehicle.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            <Images className="rounded-t-3xl w-full" srcImg={appTwo} />

            <div className="bg-white rounded-b-3xl flex flex-col sm:flex-row h-auto lg:h-35 p-6 lg:p-7">
              <h4 className="text-[#00B200] text-lg lg:text-[20px] font-poppins">
                Scan
              </h4>

              <p className="text-black text-sm font-poppins mt-3 sm:mt-0 sm:ml-6 lg:ml-15 leading-6">
                Scan the QR code on the vehicle to unlock. Learn how to ride
                safely in the app.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto lg:mx-0">
            <Images className="rounded-t-3xl w-full" srcImg={appThree} />

            <div className="bg-white rounded-b-3xl flex flex-col sm:flex-row h-auto lg:h-35 p-6 lg:p-7">
              <h4 className="text-[#00B200] text-lg lg:text-[20px] font-poppins">
                Ride
              </h4>

              <p className="text-black text-sm font-poppins mt-3 sm:mt-0 sm:ml-6 lg:ml-18 leading-6">
                Follow all traffic rules, stick to the streets and bike lanes
                where legally permitted.
              </p>
            </div>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Theapp;
