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
    <>
      <h1 className="text-4xl font-extrabold text-center text-teal-600 py-10">
        Featured Foods
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-20">
        {foods.map((food, index) => (
          <div key={index} className="w-full">
            <div className="card bg-base-100 shadow-xl image-full transition duration-300 hover:scale-105">
              <figure>
                <img
                  src={food.imageURL}
                  alt={food.name}
                  className="object-cover w-full h-56"
                />
              </figure>
              <div className="card-body flex flex-col justify-between text-white">
                {/* Category Badge */}
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-xl">{food.name}</h2>
                  <span className="badge badge-secondary text-xs py-1 px-3 rounded-full">
                    {food.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm line-clamp-3">{food.description}</p>

                {/* Details */}
                <div className="mt-3 space-y-1 text-sm">
                  <p>
                    <span className="font-semibold">Available:</span>{" "}
                    {food.quantityAvailable}
                  </p>
                  <p>
                    <span className="font-semibold">Location:</span>{" "}
                    {food.location}
                  </p>
                  <p>
                    <span className="font-semibold">Shared By:</span>{" "}
                    {food.sharedBy}
                  </p>
                  <p>
                    <span className="font-semibold">Expiry:</span>{" "}
                    {food.expiryDate}
                  </p>
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
    </>
  );
};

export default Featured__Foods;
