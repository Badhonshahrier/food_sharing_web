import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";

const MyFoodRequest = () => {
  const { user } = useContext(AuthContext);
  const [foodRequest, setFoodRequest] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/addfoods/requested?email=${user.email}`)
      .then((res) => setFoodRequest(res.data));
  }, [user.email]);

  return (
    <div className="max-w-7xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-8">My Food Requests</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodRequest.map((request) => (
          <div
            key={request._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-green-700">
                Donor: {request.donorName}
              </h3>
              <p>
                <span className="font-semibold flex items-center"><PiMapPinSimpleAreaBold color="red" /> Pickup Location : </span>
                {request.pickupLocation}
              </p>
              <p>
                <span className="font-semibold"> Expire Date:</span>
                {new Date(request.expiryDate).toLocaleString()}
              </p>
              <p>
                <span className="font-semibold"> Request Date:</span>
                {new Date(request.requestDate).toLocaleString()}
              </p>
              <div className="text-right mt-3">
                <span className="bg-green-100 font-bold text-green-800 px-3 py-1 rounded-2xl">
                  {request.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {foodRequest.length === 0 && (
        <div className="text-center mt-20 text-gray-500">
          <h3 className="text-2xl font-semibold">No Requests Yet 📭</h3>
          <p>Request your favorite food from the available list!</p>
        </div>
      )}
    </div>
  );
};

export default MyFoodRequest;
