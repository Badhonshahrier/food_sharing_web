import React, { useEffect, useState, use } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router";

const ManageMyFood = () => {
  const { user } = use(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email || !user?.accessToken) return;

    setLoading(true);
    axios
      .get(`https://food-sharing-server-nu.vercel.app/my_foods?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        setMyFoods(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching foods:", error);
        setLoading(false);
      });
  }, [user.email, user.accessToken]);

  const handleDelete = (id) => {
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
          .delete(`https://food-sharing-server-nu.vercel.app/managefood/${id}`, {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          })
          .then(() => {
            const remaining = myFoods.filter((food) => food._id !== id);
            setMyFoods(remaining);

            Swal.fire({
              title: "Deleted!",
              text: "Your food has been removed.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.error("Delete failed:", err);
            Swal.fire("Error!", "Something went wrong while deleting.", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Title */}
      <h2 className="text-3xl text-center font-bold mb-6 text-teal-400">
        Manage My Foods
      </h2>
      <p className="text-center font-medium text-gray-500 w-full md:w-3/4 mx-auto leading-relaxed">
        Manage your donated foods effortlessly. Update food details, monitor
        expiry dates, or delete items that are no longer available. Keep your
        food donations organized and visible to those in need.
      </p>

      {/* Table Section */}
      <div className="overflow-x-auto shadow-lg rounded-xl mt-10 bg-white">
        {loading ? (
          // ✅ Loading UI
          <div className="py-16 text-center text-gray-500 font-medium">Loading your food items...</div>
        ) : (
          <table className="min-w-full text-sm table-auto border-t">
            <thead className="bg-teal-50 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-4 border-b text-center">Serial No</th>
                <th className="px-4 py-4 border-b text-left">Food Info</th>
                <th className="px-4 py-4 border-b text-center">Expire Date</th>
                <th className="px-4 py-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myFoods.length > 0 ? (
                myFoods.map((food, index) => (
                  <tr key={food._id} className="hover:bg-teal-50 transition">
                    <td className="text-center px-4 py-3 font-semibold">{index + 1}</td>

                    <td className="px-4 py-3 flex items-center gap-4">
                      <img
                        src={food.imageURL}
                        alt={food.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-800 text-md">{food.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <img
                            src={food.donorImage}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover"
                          />
                          <span className="text-sm text-gray-600">{food.addedBy}</span>
                        </div>
                      </div>
                    </td>

                    <td className="text-center px-4 py-3">{food.expiryDate}</td>

                    <td className="text-center px-4 py-3">
                      <div className="flex justify-center gap-2 flex-wrap">
                        <Link to={`/updatefood/${food._id}`}>
                          <button className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1.5 rounded-md text-sm transition">
                            <Pencil size={16} />
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(food._id)}
                          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-md text-sm transition"
                        >
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                // ✅ Empty State
                <tr>
                  <td colSpan="4" className="text-center py-12 text-gray-500 space-y-4">
                    <p>No foods added yet.</p>
                    <Link to="/addfood">
                      <button className="px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full">
                        Add Food
                      </button>
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ManageMyFood;