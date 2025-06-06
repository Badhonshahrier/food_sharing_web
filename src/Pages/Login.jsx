import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, googleLogin } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Login",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log(result);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });
  };

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Login",
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
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-30 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl text-center font-extrabold">Login Now!</h1>
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label text-lg font-medium">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label text-lg font-medium">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <p className="font-medium">
            Don't Have An Account ? Please{" "}
            <Link to="/register">
              <span className="text-red-600 cursor-pointer">Register</span>
            </Link>{" "}
            Here
          </p>
          <button type="submit" className="btn btn-neutral mt-4">
            Login
          </button>
          <div className="divider">OR</div>
        </form>
        <button
          type="submit"
          onClick={handleGoogle}
          className="btn  w-3/4 ml-10 bg-teal-400 text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
