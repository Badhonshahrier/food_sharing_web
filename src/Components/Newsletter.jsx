import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address!",
        confirmButtonColor: "#16a34a",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Subscribed Successfully!",
      text: "Thank you for joining our food sharing community.",
      confirmButtonColor: "#16a34a",
    });

    setEmail("");
  };

  return (
    <section className=" bg-teal-600 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white">
          Join Our Food Sharing Community
        </h2>
        <p className="mt-4 text-lg  text-white">
          Get updates on extra food availability, donation drives, and ways you
          can help reduce food waste and feed those in need.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border border-green-300
                       focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg 
                       font-semibold transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-5 text-sm text-white">
          We promise to respect your privacy and only send meaningful updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
