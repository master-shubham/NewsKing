import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white tracking-wide">
          News<span className="text-blue-400">King</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className="nav-link" viewTransition>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" viewTransition>
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
