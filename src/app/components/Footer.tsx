import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      {/* Subscription Section */}
      <div className="bg-black text-white flex flex-col md:flex-row items-center py-12 px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold uppercase mb-6 md:mb-0 md:w-1/2 text-center">
          STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>
        <div className="w-full md:w-1/2">
          <form className="flex flex-col space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-full text-black"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-white text-black px-4 py-3 rounded-full font-semibold w-full"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Logo and About Section */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">SHOP.CO</h1>
            <p className="text-sm text-gray-600">
              We have clothes that suit your style and that you're proud to wear. From women to men.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* FAQ Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-300 text-gray-600 text-center py-4">
        <p className="text-sm">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <img src="/Visa.png" alt="Visa" className="h-3" />
          <img src="/Mastercard (2).png" alt="mastercard" className="h-3" />
          <img src="/Paypal.png" alt="paypal" className="h-3" />
          <img src="/G Pay.png" alt="G Pay" className="h-3" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

