import React from 'react';
import AboutUs from '../components/AboutUs';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      {/* Header Section with Background Image */}
      <div
        className="relative mt-14 h-40 bg-cover bg-center border-b-4 border-gray-700"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fw800/background/20231016/pngtree-smooth-and-natural-texture-of-brown-red-wood-image_13671416.png')",
        }}
      >
        {/* Back Button */}
        <div className="absolute top-6 left-4 z-20">
          <Link
            to="/"
            className="bg-white block md:hidden hover:bg-gray-100 py-2 px-4 rounded-lg shadow-md font-semibold text-sm md:text-base transition duration-300 text-black"
          >
            Back
          </Link>
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Title */}
          <h1 className="text-white text-3xl md:text-5xl font-bold text-shadow-lg font-serif">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 sm:px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
          <AboutUs />
        </div>
      </div>
    </>
  );
};

export default About;
