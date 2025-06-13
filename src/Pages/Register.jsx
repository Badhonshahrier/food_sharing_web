import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    // Password validation

    if (password.length < 6) {
      return Swal.fire(
        "Error",
        "Password must be at least 6 characters",
        "error"
      );
    }
    if (!/[A-Z]/.test(password)) {
      return Swal.fire(
        "Error",
        "Password must contain an uppercase letter",
        "error"
      );
    }
    if (!/[a-z]/.test(password)) {
      return Swal.fire(
        "Error",
        "Password must contain a lowercase letter",
        "error"
      );
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        userProfile({
          displayName: name,
          photoURL: photoURL,
        });
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Account Registered",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 mt-20 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-extrabold text-center">Register Now!</h1>
        <form onSubmit={handleRegister} className="fieldset">
          <label className="label text-lg font-medium">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Your Name"
          />
          <label className="label text-lg font-medium">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Your Email"
          />
          <label className="label text-lg font-medium">PhotoURL</label>
          <input
            type="url"
            className="input"
            name="photo"
            placeholder="Your PhotoURL"
          />
          <label className="label text-lg font-medium">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <p>
            Already Have An Account ?{" "}
            <Link to="/login">
              <span className="text-red-600 font-medium">Login</span>
            </Link>{" "}
            Here
          </p>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
