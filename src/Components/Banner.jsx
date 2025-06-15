import React from "react";
import { motion } from "framer-motion";
import { MdNoMeals } from "react-icons/md";
import { FaFaceSmileWink } from "react-icons/fa6";
const Banner = () => {
  return (
    <div className="hero bg-base-200 py-16">
      <div className="hero-content flex-col-reverse lg:flex-row gap-10">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold flex italic mb-6">
            Share a Meal <MdNoMeals className="ml-2" color="amber" />, Share a Smile <FaFaceSmileWink className="ml-2" color="violet" />!
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            At the heart of every community is the joy of sharing. A small act of kindness — like offering extra food — can brighten someone’s entire day.
          </p>
          <button className="btn btn-primary text-white px-6 text-lg rounded-full">
            Share Your Food Now
          </button>
        </div>

      
        <div className="flex flex-wrap gap-4 justify-center items-center relative">
          <motion.img
            animate={{
              x: [0, 20, 0, -20, 0],
              y: [0, -20, 0, 20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            src="https://i.ibb.co/rG2Cc7H4/food-sharing-project-vector-illustration-260nw-1638500074.jpg"
            className="w-64 h-44 object-cover rounded-2xl shadow-xl"
            alt="Food Sharing"
          />

          <motion.img
            animate={{
              x: [0, -15, 0, 15, 0],
              y: [0, 15, 0, -15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.3 }}
            src="https://i.ibb.co/5X39R2wz/Chat-GPT-Image-Jun-15-2025-10-13-45-PM.png"
            className="w-60 h-40 object-cover rounded-2xl shadow-xl"
            alt="Food Sharing"
          />

          <motion.img
            animate={{
              x: [0, 10, 0, -10, 0],
              y: [0, -10, 0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
            src="https://i.ibb.co/rG2Cc7H4/food-sharing-project-vector-illustration-260nw-1638500074.jpg"
            className="w-60 h-44 object-cover rounded-2xl shadow-xl"
            alt="Food Sharing"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
