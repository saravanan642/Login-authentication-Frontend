import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">
              N
            </span>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-indigo-600">
              NVKS
            </h1>

            <p className="text-xs text-gray-500">
              Technovation
            </p>
          </div>

        </div>


        {/* Navigation */}
        <nav className="flex items-center gap-10">

          <Link
            to="/"
            className="text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            Home
          </Link>

          <Link
            to=""
            className="text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            About
          </Link>

          <Link
            to=""
            className="text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="text-gray-700 font-medium hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-sm"
          >
            Create Account
          </Link>

        </nav>

      </div>

    </header>
  );
};

export default Header;