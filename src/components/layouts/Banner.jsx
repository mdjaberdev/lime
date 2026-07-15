import React from "react";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/banner.png')] bg-cover bg-center bg-no-repeat pt-52 sm:pt-64 md:pt-72 lg:pt-[400px] pb-24 sm:pb-32 md:pb-40 lg:pb-[250px] text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-poppins leading-tight">
        Ride Green
      </h1>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 lg:block">
        <Button
          className="hover:bg-transparent duration-300 hover:text-white hover:border-white cursor-pointer  sm:w-auto lg:inline-block"
          btnText={"Our cities"}
        />

        <Button
          className="hover:bg-transparent duration-300 hover:text-white hover:border-white cursor-pointer  sm:w-auto lg:inline-block lg:ml-4"
          btnText={"Download the App"}
        />
      </div>
    </div>
  );
};

export default Banner;
