import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      {/* Outer glow */}
      <div className="relative">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full blur-md bg-blue-400 opacity-30"></div>
      </div>
    </div>
  );
};

export default Spinner;
