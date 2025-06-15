import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [availableFoods, setAvailableFoods] = useState([]);
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedFoods, setSearchedFoods] = useState([]);
  const foodsToDisplay = searchText ? searchedFoods : availableFoods;

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
        <br />
      </p>
      <div className="flex justify-between w-11/12 mx-auto">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search by food name"
          className="border text-center rounded-lg"
        />
        <input type="search" name="search" id="" />
        <button onClick={handleToggleColumn} className="btn btn-accent mt-10">
          Change_Layout
        </button>
      </div>

      <div
        className={
          isTwoColumn
            ? "grid grid-cols-2 gap-8"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-10"
        }
      >
        {foods.map((food, index) => (
          <div key={index} className="w-full"></div>
        ))}

        {/* add korer por availability and expairy date diye kora */}

        {foodsToDisplay.map((availableFood, index) => (
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
              expiryDate : {availableFood.expiryDate}
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
