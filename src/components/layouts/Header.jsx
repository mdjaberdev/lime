import React, { useState, useEffect } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";
import logo from "/src/assets/logo.png";
import langues from "/src/assets/langues.png";
import { Link } from "react-router-dom";
import Button from "../Button";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const banner = document.getElementById("banner");

    if (!banner) return;

    const bannerBottom = banner.getBoundingClientRect().bottom;

    setIsScrolled(bannerBottom <= 80);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1E1E1E] shadow-lg py-4"
          : "bg-transparent pt-4 lg:pt-10"
      }`}
    >
      <Container>
        {/* Top Header */}
        <Flex className="items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <Link to="/">
              <Images srcImg={logo} />
            </Link>

            <Link>
              <Images srcImg={langues} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block ml-80">
            <ul className="flex gap-x-6 text-sm text-white font-poppins">
              <li>
                <Link to="/about-Us">About Us</Link>
              </li>
              <li>
                <Link to="/why-Lime">Why Lime</Link>
              </li>
              <li>
                <Link to="/vehicles">Vehicles</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/advertise">Advertise</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <Button className="cursor-pointer" btnText="Download App" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-4xl lg:hidden"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </Flex>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] mt-5" : "max-h-0"
          }`}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-xl p-6">
            <ul className="flex flex-col gap-5 text-white font-poppins text-center">
              <li>
                <Link to="/about-Us">About Us</Link>
              </li>
              <li>
                <Link to="/why-Lime">Why Lime</Link>
              </li>
              <li>
                <Link to="/vehicles">Vehicles</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/advertise">Advertise</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>

            <div className=" mt-6">
              <Button
                className="text-center mx-auto w-40 cursor-pointer"
                btnText="Download App"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
