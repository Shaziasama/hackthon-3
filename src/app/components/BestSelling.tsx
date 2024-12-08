import Image from "next/image";
import { FaStar } from "react-icons/fa";

const products = [
  {
    title: "Vertical Striped Shirt",
    price: "$212",
    oldPrice:"$232",
    image: "/Vertical.png",
    rating: 5,
    reviews: 5,
  },
  {
    title: "Courage Graphic T-Shirt",
    price: "$145",
    image: "/graphic.png",
    rating: 4,
    reviews: 4,
  },
  {
    title: "Loose Fit Bermuda shorts",
    price: "$80",
    image: "/shorts.png",
    rating: 3,
    reviews:3.0,
  },
  {
    title: "Fadded Skinny Jeans",
    price: "$210",
     image: "/skining.png",
    rating: 4,
    reviews: 4.5,
  },
];

const Products = () => {
  return (
    <main className="px-5 sm:px-10 lg:px-20">
      {/* Header Section */}
      <div className="text-center mt-10 mb-5">
        <h1 className="text-gray-800 text-lg md:text-3xl font-extrabold
">
          TOP SELLING
        </h1>
      </div>

      {/* Product List */}
      <div className="flex flex-wrap justify-center gap-5">
        {products.map((product, index) => (
          <div key={index} className="w-[220px] sm:w-[240px] lg:w-[260px]">
            {/* Product Image */}
            <div className="group shadow-md bg-[#F2F0F1] w-full h-[180px] flex justify-center items-center relative cursor-pointer">
              <Image
                src={product.image}
                width={150}
                height={100}
                alt={product.title}
              />
            </div>

            {/* Product Title */}
            <h1 className="font-bold text-sm lg:text-md pt-2">
              {product.title}
            </h1>

            {/* Rating Section */}
            <div className="flex items-center space-x-1 text-yellow-400 text-sm pt-1">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-gray-500 text-xs">({product.reviews})</span>
            </div>

            {/* Price Section */}
            <div className="flex items-center space-x-2 pt-2">
              <span className="text-black font-bold">{product.price}</span>
              {product.oldPrice && (
                <span className="text-gray-400 font-bold line-through text-sm">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center items-start mt-5">
        <a
          href="#products"
          className=" hover:bg-slate-300 sm:px-3 md:px-7 sm:text-sm md:text-sm py-0 text-black outline outline-1 h-[30px]  rounded-md mt-3 pt-2 mb-2"
        >
          View All
        </a>
        
      </div>
      <br />
      <br />
    </main>
    
  );
};

export default Products;
