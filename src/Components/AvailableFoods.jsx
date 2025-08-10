import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const AvailableFoods = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [sortOption, setSortOption] = useState("")
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedFoods, setSearchedFoods] = useState([]);
  const foodsToDisplay = searchText ? searchedFoods : availableFoods;

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
  const handleSortChange = (e) => {
  const selectedOption = e.target.value;
  setSortOption(selectedOption);

  const sortedFoods = [...foodsToDisplay];
  if (selectedOption === "name-asc") {
    sortedFoods.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedOption === "name-desc") {
    sortedFoods.sort((a, b) => b.name.localeCompare(a.name));
  } else if (selectedOption === "expiry-asc") {
    sortedFoods.sort(
      (a, b) => new Date(a.expiryDate) - new Date(b.expiryDate)
    );
  } else if (selectedOption === "expiry-desc") {
    sortedFoods.sort(
      (a, b) => new Date(b.expiryDate) - new Date(a.expiryDate)
    );
  }


  searchText ? setSearchedFoods(sortedFoods) : setAvailableFoods(sortedFoods);
};

  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-center text-teal-600 mb-4 mt-6">
        Available Foods
      </h1>
      <p className="text-center font-medium text-gray-600  max-w-3xl mx-auto">
        Browse surplus, fresh, and homemade dishes from your community. Claim
        what you need, reduce waste, and spread care. Act quick — availability
        changes daily!
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 space-y-4 md:space-y-0">
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="Search food by name..."
          className="border-2 border-emerald-300 rounded-xl p-3 w-full md:w-1/5 text-center focus:ring-2 focus:ring-emerald-400 outline-none"
        />
        <select
          onChange={handleSortChange}
          className="border-2 border-emerald-300 rounded-xl p-3 w-full md:w-1/4 focus:ring-2 focus:ring-emerald-400 outline-none"
        >
          <option value="">Sort By</option>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="expiry-asc">Expiry Date (Oldest)</option>
          <option value="expiry-desc">Expiry Date (Newest)</option>
        </select>

        <button
          onClick={handleToggleColumn}
          className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Change_layout
        </button>
      </div>

      <div
        className={`${
          isTwoColumn
            ? "grid grid-cols-1 md:grid-cols-2 gap-10"
            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        } mt-14`}
      >
        {foodsToDisplay.map((availableFood, index) => (
          <div
            key={index}
            className="min-h-[400px] backdrop-blur-md bg-white/60 shadow-xl rounded-3xl overflow-hidden flex flex-col justify-between p-5 hover:shadow-emerald-300 hover:scale-105 transition"
          >
            <img
              src={availableFood.imageURL}
              alt={availableFood.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <div className="flex-1 text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {availableFood.name}
              </h2>

              <p className="text-gray-600 text-sm mb-4">
                {availableFood.notes.slice(0, 80)}...
              </p>

              <div className="flex justify-center gap-3 mb-4">
                <span className="px-3 py-1 bg-emerald-200 text-emerald-800 rounded-full text-xs">
                  {availableFood.expiryDate}
                </span>
                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs">
                  Available
                </span>
              </div>

              <Link to={`/food_details/${availableFood._id}`}>
                <button className="mt-4 px-5 py-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition text-sm">
                  See More
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
