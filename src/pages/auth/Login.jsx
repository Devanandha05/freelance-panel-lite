import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export default function Login() {
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

        {/* Right: Login Form */}
        <div className="bg-[#f8f8f8] dark:bg-darkcard dark:border-1 dark:border-cardblueD flex flex-col justify-center px-14 py-12">
          <h2 className= "text-center text-4xl font-bold mb-3 text-[#2f243a] dark:text-white">Welcome Back 👋</h2>
          <p className="text-center text-[#6B7280]  dark:text-mutedlight mb-6 text-sm">Sign in to your freelancer dashboard</p>

          {/* Google login button */}
          <button className="w-full flex items-center justify-center gap-3 bg-white text-[#2f243a] border border-gray-300 px-4 py-2 rounded-xl hover:shadow-md transition">
            <FcGoogle className="text-2xl" /> Continue with Google
          </button>

          {/* Divider with text */}
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-[#6B7280]">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Login Form */}
          <form className="space-y-5">
            <div>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#db8a74]"
                placeholder="Email address"
              />
            </div>

            <div>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#db8a74]"
                placeholder="Password"
              />
            </div>

            <NavLink
              to="/overview"
              className="block w-full text-center bg-primary dark:bg-[#cd8372] dark:hover:bg-[#af6f61] text-white py-3 rounded-lg hover:shadow-xl hover:bg-primaryH hover:transition"
            >
              Login
            </NavLink>
          </form>

          {/* Footer */}
          <p className="text-sm text-center mt-6 text-[#6B7280]">
            Don't have an account? <NavLink to="/auth/register" className="text-primary dark:text-[#cd8372] font-medium">Sign up</NavLink>
          </p>
        </div>
      </div>

      {/* Optional Wave Styling */}
      <style>{`
        .clip-wave {
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 50%, 0 0);
        }
      `}</style>
    </div>
  );
}
