import React from 'react';
import images from "/images/home.jpg";
import Contact from './Contact';
import About from '../components/AboutUs';
import OurServices from '../components/OurServices';

const Home = () => {

  return (
    <>
      <div className="relative mt-18">
        {/* Image Container */}
        <div className="relative">
          <img
            className="h-screen w-full object-contain"
            src={images}
            alt="Welcome banner for the homepage"
          />
        </div>
      </div>

      <About />
      <OurServices />
      <Contact />
    </>
  );
};

export default Home;
