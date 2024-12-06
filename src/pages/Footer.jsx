import React from "react";
import techSurya from "/images/techSurya.png";
import Logo from "/images/logo.png";

const Footer = () => {
  return (
    <footer
      className="py-12"
      style={{
        background: "linear-gradient(135deg, #000000, #222222)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Grid Item 1: Logo */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src={Logo}
              alt="Logo"
              className="w-40 h-36 md:w-52 md:h-48 object-contain mb-4 bg-white rounded-lg"
            />
            <p className="text-sm font-medium text-gray-300 text-center md:text-left leading-relaxed">
              Dedicated to providing exceptional service and high-quality products.
            </p>
          </div>

          {/* Grid Item 2: Office Address */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-100">Office Address</h3>
            <p className="text-sm font-medium text-gray-400 leading-relaxed">
              Office No.1, Ground Floor, Golden City Centre, Besides Prozone Mall, Chikhalthana, Chh. Sambhajinagar,
              Maharashtra - 431003
            </p>
          </div>

          {/* Grid Item 3: Warehouses and Factories */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-gray-100">Locations</h3>
            <p className="text-sm font-medium text-gray-400 leading-relaxed mb-3">
              <strong>Warehouse 1:</strong> Godown No 8, Kanchan Compound, Dapoda Road, Behind Kanchan Kata, Bhiwandi – 421302
            </p>
            <p className="text-sm font-medium text-gray-400 leading-relaxed mb-3">
              <strong>Warehouse 2:</strong> L.Survey No.200, Gandhidham Modvadar Road, Modvadar, Kachchh Gujarat-370110
            </p>
            <p className="text-sm font-medium text-gray-400 leading-relaxed">
              <strong>Factory:</strong> Gut No.12, Mirzapur Shivas, Tal. Gangapur, Jikthan, Waluj, Sambhajinagar,
              Maharashtra – 431136
            </p>
          </div>

          {/* Grid Item 4: Contact and Legal Info */}
          <div>
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
            <p className="text-sm font-medium text-gray-400">
              <strong>GST No:</strong> 27AJJPP0464D1ZA
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center border-t border-gray-600 pt-6">
          <div className="flex items-center justify-center flex-col md:flex-row">
            <p className="text-sm mb-4 md:mb-0 md:mr-4 text-gray-400">
              © 2024 Tech Surya IT Solution. All Rights Reserved.
            </p>
            <a href="https://techsuryaitsolution.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={techSurya}
                alt="Tech Surya"
                className="w-20 h-10"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
