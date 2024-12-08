import React from "react";

const BrowseByStyle = () => {
  const styles = [
    { name: "Casual", image: "/Casual.png" },
    { name: "Formal", image: "/Formal.png" },
    { name: "Party", image: "/Party.png" },
    { name: "Gym", image: "/Gym.png" },
  ];

  return (
    <section className="py-12 px-6 bg-gray-200 pt-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
          Browse By Dress Style
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {styles.map((style) => (
            <div
              key={style.name}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <img
                src={style.image}
                alt={style.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{style.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByStyle;

