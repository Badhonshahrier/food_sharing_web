import React, { use, useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ManageMyFood = () => {
  const { user } = use(AuthContext);
  console.log("manageMyfood", user.accessToken);
  const [myFoods, setMyFoods] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://food-sharing-server-nu.vercel.app/my_foods?email=${user.email}`,{
          headers:{
            authorization:`Bearer ${user.accessToken}`
          }
        }
      )
      .then((res) => setMyFoods(res.data));
  }, [user.email,user.accessToken]);
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://food-sharing-server-nu.vercel.app/managefood/${id}`,{
            headers:{
              authorization:`Bearer ${user.accessToken}`
            }
          })
          .then(() => {
            const remaining = myFoods.filter((food) => food._id !== id);
            setMyFoods(remaining);
          });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl text-center font-bold mb-6 text-teal-400">
        Manage My Foods
      </h2>
      <p className="text-center font-medium text-gray-500 w-3/4 ml-36">
        Manage your donated foods effortlessly. Update food details, monitor
        expiry dates, or delete items that are no longer available. Keep your
        food donations organized and visible to those in need, making your
        contribution to the community smooth and impactful.
      </p>

      <div className="overflow-x-auto rounded-2xl shadow-lg mt-10  bg-white">
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
                <td className=" text-center font-medium">{index + 1}</td>

                <td className="px-4 py-2 flex items-center gap-4">
                  <img
                    src={food.imageURL}
                    alt={food.name}
                    className="w-16 h-16 rounded-lg object-cover "
                  />

                  <div>
                    <h4 className="font-bold text-md  text-gray-800">
                      {food.name}
                    </h4>

                    <div className="flex items-center gap-2">
                      <img
                        src={food.donorImage}
                        alt=""
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
                  <Link to={`/updatefood/${food._id}`}>
                    <button
                      // onClick={() => handleUpdate(food._id)}
                      className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-lg transition"
                    >
                      <Pencil size={16} /> Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(food._id)}
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
