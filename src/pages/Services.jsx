import React from 'react';
import OurServices from '../components/OurServices';
import { Link } from 'react-router-dom';

const Services = () => {
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
            className="bg-white block md:hidden hover:bg-gray-200 py-2 px-4 rounded-lg shadow-lg font-semibold text-gray-800 transition duration-300 text-sm md:text-base"
          >
            Back
          </Link>
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          {/* Title */}
          <h1 className="text-white text-3xl md:text-5xl font-bold text-shadow-lg font-serif">
            Our Services
          </h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-300">
          <OurServices />
        </div>
      </div>
    </>
  );
};

export default Services;
