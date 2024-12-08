
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b flex flex-col w-full">
      {/* Promo Section */}
      <div className="bg-black text-white py-2 text-sm flex justify-center px-4">
        <div className="text-center">
          Sign up and get 20% off your first order.{" "}
          <a href="#" className="underline hover:text-gray-300">
            Sign Up Now
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-20 py-4">
        {/* Logo */}
        <h1 className="text-xl lg:text-2xl font-bold text-black">SHOP.CO</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
          <a href="#" className="text-black hover:text-gray-600">
            Shop
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            On Sale
          </a>
          <a href="/new arrivals" className="text-black hover:text-gray-600">
            New Arrivals
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            Brands
          </a>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-md px-3 py-2">
            <IoSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search For Products"
              className="bg-gray-100 outline-none text-sm pl-2"
            />
          </div>

          {/* Icons */}
          <FiShoppingCart className="text-black cursor-pointer" />
          <CgProfile className="text-black cursor-pointer" />
        </div>
      </div>

      {/* **/}
      <div className="flex md:hidden justify-between items-center px-4 py-2 border-t">
        <a href="#" className="text-black text-sm">
          Shop
        </a>
        <a href="#" className="text-black text-sm">
          On Sale
        </a>
        <a href="/new arrivals" className="text-black text-sm">
          New Arrivals
        </a>
        <a href="#" className="text-black text-sm">
          Brands
        </a>
      </div>
    </header>
  );
};

export default Navbar;
