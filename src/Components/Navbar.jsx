import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, userLogout } = use(AuthContext);

  const handleLogout = () => {
    userLogout()
      .then(() => {
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
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availablefoods">Available Foods</NavLink>
      </li>
      <li>
        <NavLink to="/addfood">Add Food</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/managemyfoods">Manage My Foods</NavLink>
        </li>
      ) : (
        ""
      )}
      {user ? (
        <li>
          <NavLink to="/myfoodrequest">My Food Request</NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="w-14 h-12 object-cover rounded-full"
              src="https://i.ibb.co/TDFDqB7K/pngtree-food-logo-png-image-5687686.png"
              alt="Logo"
            />
            <h3 className="lg:font-bold lg:text-[16px] sm:text-sm">
              Give Surplus, Get Smiles!
            </h3>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ml-20 font-bold italic text-sm">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <div className="avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="object-cover"
                  />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error ml-6 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-4">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
