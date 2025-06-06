import React from "react";

const AddFoods = () => {
  return (
    <div className="max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        Add New Food
      </h2>
      <form className="card p-8 bg-base-100 shadow-xl space-y-4">
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
        <input
          type="text"
          name="location"
          placeholder="Pickup Location"
          className="input input-bordered w-full"
          required
        />
        <input
          type="datetime-local"
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
          placeholder="Donor Image URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="donorName"
          placeholder="Donor Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="donorEmail"
          placeholder="Donor Email"
          className="input input-bordered w-full"
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
