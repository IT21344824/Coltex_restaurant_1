import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to track whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track whether the mobile profile is open
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Toggle menu visibility when button is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle profile visibility when button is clicked
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className="flex flex-col w-full min-h-10  text-white items-center justify-center">
      <nav className="bg-gray-800 bg-opacity-5 w-full">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8 w-full">
          <div className="relative flex h-16 items-center justify-between w-full ">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon when menu is closed */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* Icon when menu is open */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-start">
                <Link to="/">
                  <img
                    className="h-8 drop-shadow-[1px_1px_10px_white] cursor-pointer" // drop-shadow-[x_y_blure_color]
                    src="../assets/common_imgs/Coltex_Restaurant.png"
                    alt="Your Company"
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">

              <div className="hidden sm:block text-black">
                <div className="flex space-x-4">
                  {/* <a
                    href="#"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Link 1
                  </a> */}
                  <Link to="/link-2">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white">
                      Link 2
                    </a>
                  </Link>

                  <Link to="/PG_3">
                    <a href="#" className="rounded-md px-3 py-2 text-sm font-medium  hover:bg-gray-700 hover:text-white">
                      Link 3
                    </a>
                  </Link>

                
                </div>
              </div>
            </div>


            <div className="absolute flex-1 justify-end inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link to="/cart">
                <button
                  type="button"
                  className="relative  rounded-full  p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-0.5 focus:ring-offset-gray-800 focus:text-gray-800"
                >
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </Link>

              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3">
                <div>
                  <button type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                    onClick={toggleProfile}>

                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </button>
                </div>

                {isProfileOpen && (
                  <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                    {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Team
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Projects
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </a>
            </div>
          </div>
        )}
      </nav>
      <div className='flex items-center text-black font-bold bg-[rgba(0,0,0,0.28)] w-full justify-center py-5'>
        Navbar
      </div>

    </div>
  );
};

export default Navbar;
