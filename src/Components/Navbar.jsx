import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);
  const handleLogout = () => {
    userLogout()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <div className="text-sm flex font-bold italic">
      <li>
        <NavLink to="/">Home</NavLink>
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
              className="lg:font-bold lg:text-2xl sm:text-sm"
            >
              Give Surplus, Get Smiles!
            </h3>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {user ? (
          <div
            tabIndex={0}
            role="button"
            className="avatar"
            
          >
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="profile" className="object-cover" />
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error ml-6 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="">
            <Link to="/login">
              <button className="btn btn-outline btn-secondary mr-6  text-white">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline btn-warning text-white">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
