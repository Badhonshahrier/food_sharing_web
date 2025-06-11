import React from "react";
import { useLoaderData } from "react-router";

const View_Details = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl pl-4 font-extrabold text-green-800">
          Tip Details
        </h1>
      </div>

      {data ? (
        <div className="max-w-3xl mx-auto bg-white border border-green-50 rounded-xl shadow-lg ">
          <img src={data.imageURL} alt="" className="w-full h-96 object-cover" />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-green-900 mb-3">
              {data.name}
            </h2>
            <p className="text-sm text-green-700 mb-1">
              <span className="font-semibold">Category:</span> {data.category}
            </p>
            <p className="text-sm text-green-700 mb-1">
              <span className="font-semibold">Plant:</span> {data.plant}
            </p>
            <p className="text-sm text-green-700 mb-1">
              <span className="font-semibold">Difficulty:</span>{" "}
              {data.difficulty}
            </p>
            <p className="text-sm text-green-700 mb-4">
              <span className="font-semibold">Availability:</span>{" "}
              {data.availability}
            </p>

            <p className="text-gray-800 leading-relaxed mb-6">
              <span className="text-green-700">Description</span>:{" "}
              {data.notes}
            </p>

            <div className="border-t pt-4 text-sm text-gray-600 flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg">Shared by:</p>
                <p>Name: {data.donorName}</p>
                <p>Email: {data.donorEmail}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          No tip found for this ID.
        </p>
      )}
    </div>
  );
};

export default View_Details;
