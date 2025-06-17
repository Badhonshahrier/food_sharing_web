import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = () => {
  const {
    _id,
    name,
    imageURL,
    quantityAvailable,
    status,
    location,
    expiryDate,
    notes,
    donorEmail,
    donorName,
  } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const currentDateTime = new Date().toLocaleString();
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    newFood.status = "Requested";
    console.log(newFood.requestedNotes); 
    console.log(newFood);
    axios
      .patch(`https://food-sharing-server-nu.vercel.app/foods/${_id}`, newFood)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You have been successfully requested",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/myfoodrequest");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-center text-teal-600">
        Request For Food
      </h1>
      <p className="text-center font-medium text-gray-500 pt-3 w-3/4 pb-6 ml-36">
      "Need a helping hand with food? Browse available items in your area and easily request what you need. Our community believes in sharing and caring, making sure no one goes hungry. Requesting food is simple, safe, and free — because good food should never go to waste."
      </p>
      <form
        onSubmit={handleUpdateFood}
        className="card p-8 bg-base-300 shadow-xl space-y-4"
      >
        <input
          type="text"
          name="foodId"
          value={_id}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="text"
          name="name"
          value={name}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="text"
          name="imageURL"
          value={imageURL}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="email"
          name="donorEmail"
          value={donorEmail}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="text"
          name="donorName"
          value={donorName}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="email"
          name="requesterEmail"
          value={user?.email || ""}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="text"
          name="requestDate"
          value={currentDateTime}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="text"
          name="location"
          value={location}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <input
          type="date"
          name="expiryDate"
          value={expiryDate}
          readOnly
          className="input cursor-not-allowed input-bordered w-full"
        />

        <textarea
          name="requestedNotes"
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
        >
        </textarea>

        <button type="submit" className="btn btn-primary w-full">
          Request Food
        </button>
      </form>
    </div>
  );
};

export default Modal;
