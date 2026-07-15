import { Link } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import Container from "../Container";
import Flex from "../Flex";
import Images from "../Images";

import footerLogo from "/src/assets/footerLogo.png";

const Footer = () => {
  return (
    <div className="pt-12 lg:pt-16 pb-6 bg-black">
      <Container>
        {/* Top Footer */}
        <Flex className="flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center md:items-start justify-center lg:justify-between gap-10 lg:gap-0">
          {/* Logo */}
          <div className="text-center lg:text-left">
            <Link to="/">
              <Images srcImg={footerLogo} className="mx-auto lg:mx-0" />
            </Link>
          </div>

          {/* Join Us */}
          <div className="text-center md:text-left">
            <h4 className="text-[20px] text-white font-poppins mt-4">
              Join Us
            </h4>

            <ul className="text-sm text-[#939292] font-poppins mt-6 lg:mt-8">
              <li className="pb-4">
                <Link>Careers</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Times Blog</Link>
              </li>
              <li className="pb-4">
                <Link>Press</Link>
              </li>
              <li className="pb-4">
                <Link>Partners</Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="text-center md:text-left">
            <h4 className="text-[20px] text-white font-poppins mt-4">About</h4>

            <ul className="text-sm text-[#939292] font-poppins mt-6 lg:mt-8">
              <li className="pb-4">
                <Link>Community</Link>
              </li>
              <li className="pb-4">
                <Link>E-Bike</Link>
              </li>
              <li className="pb-4">
                <Link>E-Scooter</Link>
              </li>
              <li className="pb-4">
                <Link>Sustainability</Link>
              </li>
              <li className="pb-4">
                <Link>Innovation</Link>
              </li>
              <li className="pb-4">
                <Link>Safety</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="text-center md:text-left">
            <h4 className="text-[20px] text-white font-poppins mt-4">
              Programs
            </h4>

            <ul className="text-sm text-[#939292] font-poppins mt-6 lg:mt-8">
              <li className="pb-4">
                <Link>Advertise</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Access</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Hero</Link>
              </li>
              <li className="pb-4">
                <Link>Lime Assist</Link>
              </li>
              <li className="pb-4">
                <Link>Insurance</Link>
              </li>
              <li className="pb-4">
                <Link>Our Cities</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="text-center md:text-left">
            <ul className="text-sm text-[#939292] font-poppins mt-6">
              <li className="pb-5">
                <Link>Find Location</Link>
              </li>
              <li className="pb-5">
                <Link>Get Help</Link>
              </li>
              <li>
                <Link>Sitemap</Link>
              </li>
            </ul>

            <div className="flex justify-center md:justify-start flex-wrap gap-3 mt-6">
              <Link>
                <FaTwitter className="bg-white text-4xl rounded-full text-black p-2" />
              </Link>

              <Link>
                <FaFacebook className="bg-white text-4xl rounded-full text-black p-2" />
              </Link>

              <Link>
                <FaLinkedinIn className="bg-white text-4xl rounded-full text-black p-2" />
              </Link>

              <Link>
                <FaYoutube className="bg-white text-4xl rounded-full text-black p-2" />
              </Link>

              <Link>
                <FaInstagram className="bg-white text-4xl rounded-full text-black p-2" />
              </Link>
            </div>
          </div>
        </Flex>

        {/* Bottom Footer */}
        <Flex className="flex-col lg:flex-row items-center justify-center lg:justify-between mt-16 lg:mt-[200px] gap-6">
          <h4 className="text-white text-center">© 2024 Lime</h4>

          <ul className="flex flex-wrap justify-center lg:justify-start gap-3 lg:gap-x-5 text-white underline text-sm text-center">
            <li>User Agreement</li>
            <li>Privacy Notice</li>
            <li>Data Request</li>
            <li>Research</li>
            <li>Legal Bases</li>
            <li>My Information</li>
            <li>Imprint</li>
          </ul>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
