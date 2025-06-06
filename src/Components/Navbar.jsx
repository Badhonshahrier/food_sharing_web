import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <div className="text-sm lg:pl-25 flex font-bold italic">
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink to="/availablefoods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addfood">Add Food</NavLink>
      </li>
      <li>
        <NavLink>Manage My Foods</NavLink>
      </li>
      <li>
        <NavLink>My Food Request</NavLink>
      </li>
    </div>
  );
  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="navbar w-11/12 mx-auto  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-1 ">
            <img
              className="w-14 h-12 object-cover rounded-full"
              src="https://i.ibb.co/TDFDqB7K/pngtree-food-logo-png-image-5687686.png"
              alt=""
            />
            <h3
              className="lg:font-bold lg:text-2xl sm:text-sm
"
            >
              Give Surplus, Get Smiles!
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <Link to="/login">
            <button className="btn btn-outline btn-secondary text-white">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-outline btn-warning text-white">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
