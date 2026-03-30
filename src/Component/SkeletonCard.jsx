import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-white/10 rounded-2xl p-4 shadow-lg">
      {/* Image */}
      <div className="h-40 bg-gray-700 rounded-lg mb-4"></div>

      {/* Title */}
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>

      {/* Description */}
      <div className="h-3 bg-gray-700 rounded w-full mb-1"></div>
      <div className="h-3 bg-gray-700 rounded w-5/6 mb-3"></div>

      {/* Footer */}
      <div className="flex justify-between">
        <div className="h-3 bg-gray-700 rounded w-20"></div>
        <div className="h-3 bg-gray-700 rounded w-10"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
