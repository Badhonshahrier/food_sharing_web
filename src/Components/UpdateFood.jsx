import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateFood = () => {
    const navigate=useNavigate()
  const {
    _id,
    name,
    imageURL,
    quantityAvailable,
    status,
    location,
    expiryDate,
    notes,
    donorImage,
    donorName,
    donorEmail,
    foodId,
    requestDate,
    requesterEmail,
  } = useLoaderData();
  const { user } = use(AuthContext);
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateFood = Object.fromEntries(formData.entries());
    updateFood.quantityAvailable = Number(updateFood.quantityAvailable);
    console.log(updateFood);
    axios
      .put(`https://food-sharing-server-nu.vercel.app/updatefood/${_id}`, updateFood)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Updated Data",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/managemyfoods")
        console.log(res.data);
      });
  };
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Update Food
      </h2>
      <p className="text-center font-medium text-gray-500 mb-6">
       Keep your food listings accurate by updating details anytime. Modify quantities, change availability status, or correct information to ensure donors and recipients have the latest updates. This helps maintain trust and efficiency in the food sharing community.
      </p>
      <form
        onSubmit={handleUpdateFood}
        className="card p-8 bg-base-100 shadow-xl space-y-4"
      >
        <input
          type="text"
          defaultValue={name}
          name="name"
          placeholder="Food Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          defaultValue={imageURL}
          name="imageURL"
          placeholder="Food Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          defaultValue={quantityAvailable}
          name="quantityAvailable"
          placeholder="Food Quantity"
          className="input input-bordered w-full"
          required
        />
        <select
          name="status"
          defaultValue={status}
          className="select select-bordered w-full"
          required
        >
          <option value="Available">Available</option>
        </select>

        <input
          type="text"
          name="location"
          defaultValue={location}
          placeholder="Pickup Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="expiryDate"
          defaultValue={expiryDate}
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="notes"
          defaultValue={notes}
          placeholder="Additional Notes"
          className="textarea textarea-bordered w-full"
        ></textarea>

        <input
          type="text"
          name="donorImage"
          defaultValue={user ? user.photoURL : ""}
          readOnly
          placeholder="Donor Image URL"
          className="input cursor-not-allowed input-bordered w-full"
          required
        />
        <input
          type="text"
          name="donorName"
          defaultValue={user ? user.displayName : ""}
          readOnly
          placeholder="Donor Name"
          className="input  cursor-not-allowed input-bordered w-full"
          required
        />
        <input
          type="email"
          name="donorEmail"
          defaultValue={user ? user.email : ""}
          readOnly
          placeholder="Donor Email"
          className="input cursor-not-allowed input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateFood;
