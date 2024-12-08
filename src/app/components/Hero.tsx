
import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] mb-1">
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 lg:px-12">
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="/hero.png"
            alt="hero"
            className="w-full max-w-lg mx-auto lg:max-w-full"
          />
        </div>
      </div>

      {/* Brands Section */}
      <div className="bg-black text-white py-6 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-around items-center space-x-4">
          {["VERSACE", "ZARA", "GUCCI", "PRADA", "CALVIN KlEIN"].map((brand) => (
            <span key={brand} className="text-lg font-extrabold">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
