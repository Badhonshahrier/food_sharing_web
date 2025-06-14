import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [availableFoods, setAvailableFoods] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allfoods")
      .then((res) => {
        setFoods(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:5000/addfoods/available")
      .then((res) => {
        setAvailableFoods(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-10/11  mx-auto">
      <h1 className="text-4xl font-extrabold text-center text-teal-600 pt-10">
        Available Foods
      </h1>
      <p className="text-center font-medium text-gray-500 pt-6 w-3/4 ml-36">
        Discover a variety of fresh, surplus foods shared by generous donors in
        your community. Browse available foods, pick what you need, and reduce
        food waste while helping others. From fruits to cooked meals — find
        what’s available today and request it before it’s gone. Share, save, and
        care.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-10">
        {foods.map((food, index) => (
          <div key={index} className="w-full">
            {/* <div className="card bg-base-100 shadow-xl image-full transition duration-300 hover:scale-105">
              <figure>
                <img
                  src={food.imageURL}
                  alt={food.name}
                  className="object-cover w-full h-56"
                />
              </figure>
              <div className="card-body flex  flex-col justify-between text-white">
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-xl">{food.name}</h2>
                  <span className="badge badge-secondary text-xs py-1 px-3 rounded-full">
                    {food.category}
                  </span>
                </div>

                <p className="text-sm line-clamp-3">{food.description}</p>

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
            </div> */}
          </div>
        ))}

        {/* add korer por availability and expairy date diye kora */}

        {availableFoods.map((availableFood, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-100 to-sky-300 my-10 shadow-lg rounded-2xl p-4 flex flex-col items-center justify-center"
          >
            <img
              src={availableFood.imageURL}
              alt={availableFood.name}
              className="w-32 h-32 object-cover rounded-lg "
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {availableFood.name}
            </h2>
            <p className="text-gray-600 mb-2">{availableFood.notes}</p>
            <p className="text-violet-700 font-medium text-lg">
              expiryDate :  {availableFood.expiryDate}
            </p>
            <Link to={`/food_details/${availableFood._id}`}>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
