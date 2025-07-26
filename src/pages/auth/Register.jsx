import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center px-4">
      <div className="md:w-full w-3/4 max-w-5xl h-[650px] shadow-xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="/src/assets/dash-bg.png"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Register Form */}
        <div className="bg-[#f8f8f8] dark:bg-darkcard flex flex-col justify-center px-14 py-10">
          <h2 className="text-3xl font-bold mb-2 dark:text-white text-primary">Join Us 🚀</h2>
          <p className="text-muted dark:text-mutedlight mb-6">Create your freelancer dashboard account</p>

          <button className=" flex items-center justify-center gap-2 bg-white text-muted border border-gray-300 px-4 py-2 rounded-lg hover:shadow-md">
            <FcGoogle className="text-xl" /> Sign up with Google
          </button>

          <div className="flex my-4 items-center">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="px-2 text-sm text-muted">or</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <form className="space-y-4 ">
            <div>
              <input
                id="name"
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-accent dark:focus:ring-cardblue"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-accent dark:focus:ring-cardblue"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-accent dark:focus:ring-cardblue"
                placeholder="Create Password"
              />
            </div>

            <NavLink
              to="/overview"
              className="w-full bg-primary dark:bg-[#cd8372] dark:hover:bg-[#af6f61] text-white py-2 rounded-md hover:bg-opacity-90 transition duration-200 block text-center"
            >
              Sign Up
            </NavLink>
          </form>

          <p className="text-sm text-center mt-6 text-muted dark:text-mutedlight">
            Already have an account? <NavLink to="/auth/login" className="text-primary dark:text-accentHD">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
