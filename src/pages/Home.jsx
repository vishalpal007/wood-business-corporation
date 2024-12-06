import React from 'react';
import images from "../image/home.png";
import Contact from './Contact';
import { IoMdContacts } from "react-icons/io";
import About from '../components/AboutUs';
import OurServices from '../components/OurServices';
import { Link } from 'react-router-dom';

const Home = () => {
  const phoneNumber = "8208543875"; // Store in config/env for reusability

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <div className="relative mt-24">
        {/* Image Container */}
        <div className="relative">
          <img
            className="h-auto w-full max-h-[370px] object-cover md:max-h-[480px]"
            src={images}
            alt="Welcome banner for the homepage"
          />

          {/* "Contact Me" Button with Custom Color */}
          <button
            onClick={handleCallClick}
            className="absolute lg:left-[150px] md:left-[120px] md:top-[370px] lg:top-[440px] top-[200px] left-20 transform -translate-x-1/2 -translate-y-1/2 bg-[#5c483f] text-white text-sm flex items-center justify-center space-x-2 py-2 px-4 rounded-md shadow-lg hover:bg-opacity-80 transition duration-300 md:py-2 md:px-4"
            aria-label={`Call us at ${phoneNumber}`}
          >
            <IoMdContacts className="text-lg mr-1" />
            <Link to="/contact">Contact Me</Link>
          </button>
        </div>
      </div>

      <About />
      <OurServices />
      <Contact />
    </>
  );
};

export default Home;
