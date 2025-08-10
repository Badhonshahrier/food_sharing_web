import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 p-6 text-center">
      <img
        src="https://i.ibb.co/1J8j1c31/5124556.jpg"
        alt="Error Illustration"
        className="w-full max-w-md rounded-lg shadow-lg object-cover mb-6"
      />
      <h1 className="text-4xl font-bold text-error mb-2">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/">
        <button className="btn btn-accent btn-wide text-lg font-semibold">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
