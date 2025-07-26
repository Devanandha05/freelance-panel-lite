import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiHome,
  FiFileText,
  FiUsers,
  FiBarChart2,
  FiUser,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-xl transition
     hover:bg-secondary hover:text-primary 
     dark:hover:bg-cardD dark:hover:text-primaryD
     ${isActive 
        ? "bg-secondary text-primary font-semibold dark:bg-cardD dark:text-primaryD" 
        : "text-white dark:text-mutedD"
     }`;

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden "
        />
      )}

      {/* Animated Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className={`fixed z-40 w-60 h-full bg-primary text-white p-6 space-y-6 min-h-screen rounded-br-3xl rounded-3xl
                    dark:bg-darkcard dark:text-primaryD
                    md:fixed md:translate-x-0 md:z-auto`}
      >

        {/* Logo */}
        <h1 className="text-center text-2xl font-bold mt-4 text-white dark:text-primaryD">
          Freelance<span className="text-accentD">Panel</span>
        </h1>

        {/* Main Navigation */}
        <nav className="space-y-1">
          <NavLink to="/overview" className={linkClass}>
            <FiHome /> Dashboard
          </NavLink>
          <NavLink to="/invoices" className={linkClass}>
            <FiFileText /> Invoices
          </NavLink>
          <NavLink to="/clients" className={linkClass}>
            <FiUsers /> Clients
          </NavLink>
          <NavLink to="/analytics" className={linkClass}>
            <FiBarChart2 /> Analytics
          </NavLink>
        </nav>

        <hr className="border-t border-white/20 my-4 mr-3 dark:border-mutedD/20" />

        {/* User Section */}
        <nav className="space-y-1">
          <NavLink to="/profile" className={linkClass}>
            <FiUser /> Profile
          </NavLink>
          <NavLink to="/settings" className={linkClass}>
            <FiSettings /> Settings
          </NavLink>
        </nav>

        <hr className="border-t border-white/20 my-4 mr-3 dark:border-mutedD/20" />

        {/* Help & Logout */}
        <nav className="space-y-1">
          <NavLink to="/support" className={linkClass}>
            <FiHelpCircle /> Support
          </NavLink>
          <NavLink to="/auth/login" className={linkClass}>
            <FiLogOut /> Logout
          </NavLink>
        </nav>
      </motion.aside>
    </>
  );
};

export default Sidebar;
