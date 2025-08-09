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
    <div className="w-10/11 mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-teal-600 pt-10">
        Featured Foods
      </h1>
      <p className="text-center font-medium text-gray-500 pt-6 w-3/4 ml-36">
        “Discover our most generous food shares today! These featured foods have
        the highest available quantities, perfect for group needs or bulk
        pickups. From fresh meals to healthy snacks, claim your portion before
        it’s gone. Help reduce food waste while supporting community generosity
        — check out what’s available in abundance now.”
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-16 pb-20">
        {foods.map((food, index) => (
          <div key={index} className="">
            <div className="card bg-base-100 shadow-xl image-full duration-300 hover:scale-105 h-[300px]">
              <figure>
                <img
                  src={food.imageURL}
                  alt={food.name}
                  className="object-cover w-full h-[200px]"
                />
              </figure>
              <div className="card-body text-white p-4">
                <div className="flex items-center justify-between  ">
                  <h1 className="font-bold text-xl">{food.name}</h1>
                  <span className="badge badge-secondary text-xs py-1 px-3 rounded-full">
                    {food.status}
                  </span>
                </div>

                <p className="text-sm line-clamp-2 overflow-hidden">
                  {food.description}
                </p>

                <div className="mt-3 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <div>
                      <p>
                        <span className="font-semibold">Available:</span>
                        {food.quantityAvailable}
                      </p>
                      {/* <p>
                    <span className="font-semibold">Location:</span>
                    {food.location}
                  </p> */}

                      <p>
                        <span className="font-semibold">Expiry:</span>
                        {food.expiryDate}
                      </p>
                    </div>
                    <Link to={`/food_details/${food._id}`}>
                      <button className="btn btn-accent">See More</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pb-10">
        <Link to="/availablefoods">
          <button className="btn btn-accent">Show All</button>
        </Link>
      </div>
    </div>
  );
};

export default Featured__Foods;
