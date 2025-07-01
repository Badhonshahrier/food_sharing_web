import React from "react";
import { motion } from "framer-motion";
import { MdNoMeals } from "react-icons/md";
import { FaFaceSmileWink } from "react-icons/fa6";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero min-h-[65vh] bg-base-200 relative">
      <div className="hero-content flex-col-reverse lg:flex-row gap-10">
        {/* Text Section */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold flex flex-wrap italic mb-6">
            Share a Meal
            <MdNoMeals className="ml-2" color="orange" />
            , Share a Smile
            <FaFaceSmileWink className="ml-2" color="violet" />
            !
          </h1>
          <p className="mb-8 text-lg text-gray-600">
            At the heart of every community is the joy of sharing. A small act of kindness — like offering extra food — can brighten someone’s entire day.
          </p>
          <Link to="/addfood">
          <button className="btn btn-primary text-white px-6 text-lg rounded-full">
            Share Your Food Now
          </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex flex-wrap gap-4 justify-center items-center relative">
          {[0, 0.3, 0.6].map((delay, index) => (
            <motion.img
              key={index}
              animate={{
                x: [0, 15, 0, -15, 0],
                y: [0, -15, 0, 15, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3.5, repeat: Infinity, delay }}
              src="https://i.ibb.co/rG2Cc7H4/food-sharing-project-vector-illustration-260nw-1638500074.jpg"
              className="w-64 h-44 object-cover rounded-2xl shadow-xl"
              alt={`Food Sharing ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <span className="animate-bounce text-2xl text-gray-500">&#8595;</span>
      </div>
    </div>
  );
};

export default Banner;