import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Featured__Foods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/featuresfoods")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-teal-600 pt-20">
        Featured Foods
      </h1>
      <p className="text-center font-medium text-gray-500 pt-4 sm:pt-6 max-w-3xl mx-auto text-sm sm:text-base">
        “Discover our most generous food shares today! These featured foods have
        the highest available quantities, perfect for group needs or bulk
        pickups.”
      </p>

      {/* Food Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10 pb-10">
        {foods.map((food, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl image-full h-[300px] duration-300 hover:scale-105"
          >
            <figure>
              <img
                src={food.imageURL}
                alt={food.name}
                className="object-cover w-full h-48 sm:h-56 md:h-64"
              />
            </figure>
            <div className="card-body text-white p-4">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-lg sm:text-xl">{food.name}</h1>
                <span className="badge badge-secondary text-xs py-1 px-3 rounded-full">
                  {food.status}
                </span>
              </div>

              <p className="text-xs sm:text-sm line-clamp-2 overflow-hidden">
                {food.description}
              </p>

              <div className="mt-3 space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <p>
                      <span className="font-semibold">Available:</span>{" "}
                      {food.quantityAvailable}
                    </p>
                    <p>
                      <span className="font-semibold">Expiry:</span>{" "}
                      {food.expiryDate}
                    </p>
                  </div>
                  <Link to={`/food_details/${food._id}`}>
                    <button className="btn btn-accent btn-sm sm:btn-md">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="flex justify-center pb-8">
        <Link to="/availablefoods">
          <button className="btn btn-accent">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Featured__Foods;
