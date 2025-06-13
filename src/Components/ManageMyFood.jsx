import React, { use, useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const ManageMyFood = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/my_foods?email=${user.email}`)
      .then((res) => setMyFoods(res.data));
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl text-center font-bold mb-6 text-green-600">
       Manage My Foods
      </h2>

      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-green-50 text-gray-700 uppercase tracking-wide">
            <tr>
              <th className="px-6 py-4 border-b text-center">Serial No</th>
              <th className="px-6 py-4 border-b">Food Info</th>
              <th className="px-6 py-4 border-b">Expire Date</th>
              <th className="px-6 py-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myFoods.map((food, index) => (
              <tr key={food._id} className="hover:bg-green-50 ">
                <td className=" text-center font-medium">
                  {index + 1}
                </td>

                <td className="px-4 py-2 flex items-center gap-4">
               
                  <img
                    src={
                      food.imageURL
                    }
                    alt={food.name}
                    className="w-16 h-16 rounded-lg object-cover "
                  />

                  <div>
                    <h4 className="font-semibold text-gray-800">{food.name}</h4>
                    <p className="text-sm text-gray-500 mb-1">
                      {food.category}
                    </p>

                    <div className="flex items-center gap-2">
                      <img
                        src={food.donorImage}
                        alt="User"
                        className="w-8 h-8 rounded-full  object-cover"
                      />
                      <span className="text-sm text-gray-600">
                        {food.addedBy}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4 ">{food.expiryDate}</td>

                <td className="px-6 py-4 flex  justify-center gap-3">
                  <button
                    // onClick={() => handleUpdate(food._id)}
                    className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-lg transition"
                  >
                    <Pencil size={16} /> Update
                  </button>
                  <button
                    // onClick={() => handleDelete(food._id)}
                    className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-lg transition"
                  >
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}

            {myFoods.length === 0 && (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                  No foods added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageMyFood;
