import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Top_Doner = () => {
  const { user } = use(AuthContext);
  return (
      <div className="w-10/12 mx-auto my-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-teal-600 mb-4"> Reduce Waste, Spread Kindness </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Track your food requests easily. Stay connected with donors and contribute to a waste-free, caring community where no good food goes uneaten.
        </p>
      </div>

      <div className="space-y-14">
  
        <div className="hero bg-base-200 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/5X39R2wz/Chat-GPT-Image-Jun-15-2025-10-13-45-PM.png"
              className="max-w-sm rounded-2xl shadow-2xl"
              alt="Reduce Food Waste"
            />
            <div className="lg:pr-8">
              <h1 className="text-4xl font-bold text-teal-700 mb-4">Reduce Food Waste, Nourish Lives</h1>
              <p className="text-lg text-gray-700">
                Turn leftover or surplus food into an opportunity to fight hunger and reduce unnecessary waste around you.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/35L1XShr/Chat-GPT-Image-Jun-16-2025-01-11-34-AM.png"
              className="max-w-sm rounded-2xl shadow-xl"
              alt="Share Extra Produce"
            />
            <div className="lg:pl-8">
              <h1 className="text-4xl font-bold text-teal-700 mb-4">Share Extra Produce & Reduce Waste</h1>
              <p className="text-lg text-gray-700">
                Have excess fruits or vegetables from your garden? Share them with neighbors or donate to community kitchens. Every little bit counts.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/SXF3mP6Z/Chat-GPT-Image-Jun-16-2025-01-08-20-AM.png"
              className="max-w-sm rounded-2xl shadow-xl"
              alt="Donate Leftover Food"
            />
            <div className="lg:pr-8">
              <h1 className="text-4xl font-bold text-teal-700 mb-4">Donate Leftover Food</h1>
              <p className="text-lg text-gray-700">
                Instead of throwing away edible leftovers, safely package and donate them to local shelters or neighbors. Small acts make a big difference.
              </p>
            </div>
          </div>
        </div>
        <div className="hero bg-base-200 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/QFZCmV4f/Chat-GPT-Image-Jun-16-2025-01-08-23-AM.png"
              className="max-w-sm rounded-2xl shadow-xl"
              alt="Don't Let Food Go to Waste"
            />
            <div className="lg:pl-8">
              <h1 className="text-4xl font-bold text-teal-700 mb-4">Don’t Let Good Food Go to Waste</h1>
              <p className="text-lg text-gray-700">
                Extra food can save someone’s day. Share additional portions or ingredients with people in need and build a kind, waste-free community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top_Doner;
