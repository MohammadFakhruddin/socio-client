import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center p-6">
      <h1 className="text-6xl font-bold text-error mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-primary">Page Not Found</h2>
      <p className="text-base text-gray-600 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary-focus transition"
      >
        <FaArrowLeft />
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
