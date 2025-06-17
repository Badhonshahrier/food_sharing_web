import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddFoods = () => {
  const { user } = use(AuthContext);
  const navigate=useNavigate()
  console.log("token in the context", user.accessToken);
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newFood = Object.fromEntries(formData.entries());
    newFood.quantityAvailable = Number(newFood.quantityAvailable);

    axios
      .post("https://food-sharing-server-nu.vercel.app/addfoods", newFood, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        console.log("Successfully added food:", res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate('/availablefoods')
        form.reset();
      })
      .catch((error) => {
        console.error("Error adding food:", error);
      });
  };

  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Add New Food
      </h2>
      <p className="text-center font-medium text-gray-500 mb-6">
        Add new food donations with simple forms. Share details like quantity,
        pickup location, and expiry date. This easy-to-use feature encourages
        more food sharing, helps reduce food waste, and connects surplus food to
        people who can use it most.
      </p>
      <form
        onSubmit={handleAddFood}
        className="card p-8 bg-base-300 shadow-xl space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Food Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="imageURL"
          placeholder="Food Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="quantityAvailable"
          placeholder="Food Quantity"
          className="input input-bordered w-full"
          required
        />
        <select
          name="status"
          className="select select-bordered w-full"
          defaultValue="Available"
          required
        >
          <option value="Available">Available</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="date"
          name="expiryDate"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="notes"
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
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoods;
