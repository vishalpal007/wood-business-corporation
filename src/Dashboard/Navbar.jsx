import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Logo from '/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-10 md:h-12 w-auto" />
            <span className="text-lg md:text-xl font-bold text-black font-serif">
              Shree Balaji Corporation
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-black text-sm md:text-base font-semibold px-3 py-2 rounded-lg transition ${isActive ? ' text-red-950' : ' hover:text-red-950 '}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute bg-white w-full top-16 left-0 shadow-md">
            <ul className="flex flex-col space-y-2 px-4 py-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `block text-black text-sm font-semibold px-4 py-2 rounded-lg ${isActive ? 'bg-gray-100' : 'hover:bg-gray-50'}`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
