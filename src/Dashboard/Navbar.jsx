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
    <nav className="bg-white dark:bg-gray-900 shadow-md fixed w-full z-50 top-0 left-0 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img
                src={Logo}
                alt="Logo"
                className="h-12 md:h-14 w-auto"
              />
              <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white font-serif">
                Shree Balaji Corporation
              </span>
            </a>
          </div>

          {/* Toggle Menu Button for Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu - Hidden in mobile */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } md:block md:w-auto md:space-x-6 absolute md:relative top-0 left-0 w-full dark:bg-gray-900 p-4 md:p-0 transition-all duration-200 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center text-base font-semibold">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md ${isActive
                        ? 'text-gray-900 dark:text-white'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
