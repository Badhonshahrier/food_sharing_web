import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PiMapPinSimpleAreaBold } from "react-icons/pi";
import { BsCalendarDateFill } from "react-icons/bs";
import { RiGitPullRequestFill } from "react-icons/ri";

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
      <h2 className="text-3xl font-bold text-center mt-10 mb-6">My Food Requests</h2>
      <p className="text-center font-medium text-gray-500 w-3/4 ml-36">
        Track your food requests easily. Stay updated on the status of foods you’ve requested and receive timely notifications. This feature helps you connect quickly with donors and ensures you get the fresh food you need, supporting community sharing and reducing waste together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6">
        {foodRequest.map((request) => (
          <div
            key={request._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-5 space-y-3">
              <h3 className="text-sm flex justify-between font-medium text-green-700">
                Donor: {request.donorName || request.requesterEmail}
              
                <span className="bg-green-100 font-bold text-green-800 px-3 py-1 rounded-2xl">
                  {request.status}
                </span>
             
              </h3>
              <img className="object-cover w-full h-56" src={request.imageURL} alt="" />
              <p className="flex">
                <span className="font-bold flex items-center gap-2"> <PiMapPinSimpleAreaBold size={20} className="" color="red" /> Pickup Location : {request.location}</span>
                
              </p>
              <p>
                <span className="font-bold flex items-center gap-2"><BsCalendarDateFill color="blue" size={20} /> Expire Date : {new Date(request.expiryDate).toLocaleString()}</span>
                
              </p>
              <p>
                <span className="font-bold flex items-center gap-2"><RiGitPullRequestFill color="teal" size={20} /> Request Date : {new Date(request.requestDate).toLocaleString()}</span>
                
              </p>
              
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
