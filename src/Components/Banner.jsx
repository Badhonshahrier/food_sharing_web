import React from "react";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <motion.img
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              src="https://i.ibb.co/rG2Cc7H4/food-sharing-project-vector-illustration-260nw-1638500074.jpg"
              className="w-64 h-44 object-cover rounded-2xl shadow-xl"
              alt="Food Sharing"
            />

            <motion.img
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
              src="https://i.ibb.co/rG2Cc7H4/food-sharing-project-vector-illustration-260nw-1638500074.jpg"
              className="w-60 h-40 object-cover rounded-2xl shadow-xl"
              alt="Food Sharing"
            />

            <motion.img
              animate={{
                x: [0, 10, 0],
                y: [0, -15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              src="https://i.ibb.co/rG2Cc7H4/food-sharing-project-vector-illustration-260nw-1638500074.jpg"
              className="w-60 h-44 object-cover rounded-2xl shadow-xl"
              alt="Food Sharing"
            />
          </div>
        </div>

        <div className="py-30">
          <h1 className="text-5xl font-bold">Share a Meal, Share a Smile!</h1>
          <p className="py-6">
            At the heart of every community is the simple joy of sharing. "Share
            a Meal, Share a Smile" isn’t just a slogan — it’s a reminder that a
            small act of kindness can brighten someone’s entire day. By offering
            an extra portion of food to a neighbor or someone in need, you're
            not just filling a plate, you’re warming a heart.
          </p>
          <button className="btn text-white btn-primary">
            Share Your Food Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
