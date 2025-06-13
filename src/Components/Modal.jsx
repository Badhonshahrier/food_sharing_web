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
    console.log(newFood);
    axios
      .patch(`http://localhost:5000/foods/${_id}`, newFood)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/myfoodrequest");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdateFood}
        className="card p-8 shadow-xl space-y-4"
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
          name="notes"
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
        ></textarea>

     
          <button type="submit" className="btn btn-primary w-full">
            Request Food
          </button>
        
      </form>
    </div>
  );
};

export default Modal;
