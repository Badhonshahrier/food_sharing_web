import React from "react";
import { useLoaderData } from "react-router";
import Modal from "../Components/Modal";

const View_Details = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl pl-4 font-extrabold text-green-800">
          Food Details
        </h1>
      </div>

      {data ? (
        <div className="max-w-3xl mx-auto bg-white border border-green-50 rounded-xl shadow-lg">
          <img
            src={data.imageURL}
            alt={data.name}
            className="w-full h-[480px] object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h2 className="text-3xl font-bold text-green-900 mb-3">
              {data.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-green-700 mb-4">
              <p>
                <span className="font-semibold">Quantity Available : </span>
                {data.quantityAvailable}
              </p>
              <p>
                <span className="font-semibold">Status : </span> {data.status}
              </p>
              <p>
                <span className="font-semibold">Location : </span>{" "}
                {data.location}
              </p>
              <p>
                <span className="font-semibold">Expiry Date : </span>
                {data.expiryDate}
              </p>
            </div>

            <p className="text-gray-800 leading-relaxed mb-6">
              <span className="text-green-700 font-semibold">
                Description :
              </span>
              {data.notes}
            </p>

            <div className="border-t pt-4 text-sm text-gray-600 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {data.donorImage && (
                  <img
                    src={data.donorImage}
                    alt={data.donorName}
                    className="w-12 h-12 rounded-full object-cover border"
                  />
                )}
                <div>
                  <p className="font-semibold text-lg">Shared by:</p>
                  <p>Name: {data.donorName}</p>
                  <p>Email: {data.donorEmail}</p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="btn btn-accent"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  Request
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box w-11/12 max-w-5xl">
                    <p className="py-4">
                      <Modal></Modal>
                    </p>
                    <div className="modal-action">
                    </div>
                  </div>
                </dialog>
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
