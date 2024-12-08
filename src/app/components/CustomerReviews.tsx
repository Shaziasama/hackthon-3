import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      review:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      rating: 5,
      review:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      rating: 5,
      review:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-8">
          OUR HAPPY CUSTOMER
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 space-y-4"
            >
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1 text-yellow-500">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i}>&#9733;</span> // Star icon
                  ))}
                </div>
                <p className="font-semibold">{review.name}</p>
              </div>
              <p className="text-gray-600 text-sm">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
