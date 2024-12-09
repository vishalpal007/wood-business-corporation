import React from "react";
import techSurya from "/images/techSurya.png";
import Logo from "/images/footerLogo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-br from-black to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 text-white">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 text-left">
          {/* Logo Section */}
          <div className="flex flex-col items-start max-w-full px-2">
            <div className="flex justify-start md:justify-center w-full">
              <img
                src={Logo}
                alt="Logo"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-48 object-contain mb-4 bg-white "
              />
            </div>
            <p className="text-sm font-medium text-gray-300 text-start w-10/12 md:w-full  leading-relaxed ">
              We strive to provide top-quality solutions with excellence and precision.
            </p>
          </div>

          {/* Office Address */}
          <div className="text-start md:text-left w-10/12 md:max-w-full px-2">
            <h3 className="text-lg font-bold mb-2 text-gray-100">Office Address</h3>
            <p className="text-sm font-medium text-gray-400 leading-relaxed">
              Office No.1, Ground Floor, Golden City Centre, <br />
              Besides Prozone Mall, Chikhalthana, Chh. Sambhajinagar, Maharashtra - 431003
            </p>
          </div>

          {/* Locations */}
          <div className="text-start md:text-left w-10/12 md:max-w-full px-2">
            <h3 className="text-lg font-bold mb-2 text-gray-100">Locations</h3>
            <p className="text-sm font-medium text-gray-400 leading-relaxed mb-2">
              <strong>Warehouse 1:</strong> Godown No 8, Kanchan Compound, Dapoda Road, Bhiwandi – 421302
            </p>
            <p className="text-sm font-medium text-gray-400 leading-relaxed mb-2">
              <strong>Warehouse 2:</strong> L.Survey No.200, Gandhidham Modvadar Road, Modvadar, Kachchh Gujarat - 370110
            </p>
            <p className="text-sm font-medium text-gray-400 leading-relaxed">
              <strong>Factory:</strong> Gut No.12, Mirzapur Shivas, Tal. Gangapur, Waluj, Sambhajinagar, Maharashtra – 431136
            </p>
          </div>

          {/* Contact & Legal Info */}
          <div className="text-start md:text-left w-10/12 md:max-w-full px-2">
            <h3 className="text-lg font-bold mb-2 text-gray-100">Contact & Legal</h3>
            <p className="text-sm font-medium text-gray-400 mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:p.vishal1100@gmail.com"
                className="hover:underline text-gray-300"
              >
                p.vishal1100@gmail.com
              </a>
            </p>
            <p className="text-sm font-medium text-gray-400 mb-2">
              <strong>GST No:</strong> 27AJJPP0464D1ZA
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center border-t border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 px-4 max-w-screen-xl mx-auto">
            {/* Copyright */}
            <p className="text-sm text-gray-400 leading-tight text-center">
              © 2024 Tech Surya IT Solution. All Rights Reserved.
            </p>
            {/* Logo */}
            <a
              href="https://techsuryaitsolution.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <img
                src={techSurya}
                alt="Tech Surya"
                className="h-auto max-h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
