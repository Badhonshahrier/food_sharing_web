import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedFoods, setSearchedFoods] = useState([]);
  const foodsToDisplay = searchText ? searchedFoods : availableFoods;

  useEffect(() => {
    axios
      .get("https://food-sharing-server-nu.vercel.app/addfoods/available")
      .then((res) => {
        setAvailableFoods(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToggleColumn = () => {
    setIsTwoColumn(!isTwoColumn);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const filtered = availableFoods.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedFoods(filtered);
  };

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-5xl font-bold text-center text-emerald-600 pt-12">
         Available Foods
      </h1>
      <p className="text-center font-medium text-gray-600 pt-6 max-w-3xl mx-auto">
        Browse surplus, fresh, and homemade dishes from your community. Claim what you need, reduce waste, and spread care. Act quick — availability changes daily!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 space-y-4 md:space-y-0">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search food by name..."
          className="border-2 border-emerald-300 rounded-xl p-3 w-full md:w-1/2 text-center focus:ring-2 focus:ring-emerald-400 outline-none"
        />

        <button
          onClick={handleToggleColumn}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          {isTwoColumn ? "Change_layout" : "Change_Layout"}
        </button>
      </div>

      <div
        className={`${
          isTwoColumn
            ? "grid grid-cols-1 md:grid-cols-2 gap-10"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        } mt-14`}
      >
        {foodsToDisplay.map((availableFood, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/60 shadow-xl rounded-3xl overflow-hidden flex flex-col items-center p-5 space-y-5 hover:shadow-emerald-300 hover:scale-105 transition"
          >
            <img
              src={availableFood.imageURL}
              alt={availableFood.name}
              className="w-full h-56 object-cover rounded-xl"
            />

            <div className="w-full text-center">
              <h2 className="text-2xl font-bold text-gray-800">
                {availableFood.name}
              </h2>
              <p className="text-gray-600 mt-2">Notes : {availableFood.notes}</p>

              <div className="flex justify-center gap-3 mt-3">
                <span className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-sm">
                  {availableFood.expiryDate}
                </span>
                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm">
                  Available
                </span>
              </div>

              <Link to={`/food_details/${availableFood._id}`}>
                <button className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
