import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
      {/* Hero */}
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-blue-400">NewsKing</span>
      </h1>

      <p className="text-gray-300 max-w-xl mb-6">
        Stay updated with the latest headlines from around the world. Fast,
        clean, and modern news experience.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/general")}
        className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg transition"
      >
        Explore News →
      </button>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => navigate(`/${cat}`)}
            className="bg-white/10 border border-white/20 px-4 py-2 rounded-lg hover:bg-blue-500 transition capitalize"
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
