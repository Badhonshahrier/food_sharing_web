import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
   
        <div>
         <div className="flex">
          <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://i.ibb.co/TDFDqB7K/pngtree-food-logo-png-image-5687686.png"
              alt=""
            />
           <h2 className="text-2xl font-bold text-black mb-4 mt-1">FoodShare</h2>
         </div>
          <p className="text-sm">
            Join hands to reduce food waste and help those in need. Share your
            extra food — request when you need it. Together, we can make a
            difference.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="/availablefoods" className="hover:text-yellow-300">
                Available Foods
              </a>
            </li>
            <li>
              <a href="/addfood" className="hover:text-yellow-300">
                Share Food
              </a>
            </li>
            <li>
              <a href="/myfoodrequest" className="hover:text-yellow-300">
                My Requests
              </a>
            </li>
            <li>
              <a href="/managemyfoods" className="hover:text-yellow-300">
                Manage My Foods
              </a>
            </li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@foodshare.com</p>
          <p className="text-sm">Phone: +880 1234 567 890</p>
          <p className="text-sm">Dhaka, Bangladesh</p>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-black mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="" className="text-gray-300 hover:text-yellow-300 text-xl">
              <FaFacebookF />
            </a>
            <a href="" className="text-gray-300 hover:text-yellow-300 text-xl">
              <FaInstagram />
            </a>
            <a href="" className="text-gray-300 hover:text-yellow-300 text-xl">
              <FaLinkedinIn />
            </a>
            <a href="" className="text-gray-300 hover:text-yellow-300 text-xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} FoodShare. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
