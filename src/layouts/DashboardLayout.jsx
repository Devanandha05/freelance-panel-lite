import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-grad text-gray-800 relative">

      {/* Mobile Toggle Button (visible on small screens) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden absolute top-4 left-4 z-50 bg-accent p-2 rounded-full text-white shadow-xl"
      >
        <motion.span
          initial={false}
          animate={{ rotate: sidebarOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {sidebarOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </motion.span>
      </button>

      {/* Desktop Sidebar Toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`hidden md:block absolute top-6 z-50 bg-accent p-2 rounded-full text-white shadow-xl transition-all duration-300
          ${sidebarOpen ? "left-[14.5rem]" : "left-4"}
        `}
      >
        <motion.span
          initial={false}
          animate={{ rotate: sidebarOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {sidebarOpen ? <FiChevronLeft size={20} /> : <FiChevronRight size={20} />}
        </motion.span>
      </button>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main content */}
      <main className={`flex-1 p-6 ${sidebarOpen ? "md:ml-60" : "md:ml-0"}`}>
        <Outlet />
      </main>

      {/* Theme Toggle Button */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default DashboardLayout;

