import React from 'react'
import { NavLink } from 'react-router-dom';

const NewsHeading = () => {
        const navItems = [
          "business",
          "entertainment",
          "general",
          "health",
          "science",
          "sports",
          "technology",
        ];
    
  return (
    <>
      <div className="w-full justify-center mt-4 pb-10 hidden md:flex">
        <div className="flex flex-wrap justify-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-full shadow-lg">
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={`/${item}`}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 capitalize 
          ${
            isActive
              ? "bg-blue-500 text-white shadow"
              : "text-gray-300 hover:bg-white/20 hover:text-white"
          }`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}

export default NewsHeading
