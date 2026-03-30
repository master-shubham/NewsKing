import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-24 pb-12 text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">
        About <span className="text-blue-400">NewsKing</span>
      </h1>

      {/* Intro Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-lg mb-8">
        <p className="text-gray-300 leading-relaxed">
          NewsKing is a modern news web application that delivers the latest
          headlines from around the world. It provides categorized news like
          business, sports, technology, and more — all in a clean and fast UI.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 p-5 rounded-xl border border-white/20 shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            ⚡ Fast & Real-time
          </h2>
          <p className="text-gray-300 text-sm">
            Fetches live news using API with smooth infinite scrolling.
          </p>
        </div>

        <div className="bg-white/10 p-5 rounded-xl border border-white/20 shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            🎯 Categories
          </h2>
          <p className="text-gray-300 text-sm">
            Browse news by category like business, health, sports, etc.
          </p>
        </div>

        <div className="bg-white/10 p-5 rounded-xl border border-white/20 shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            📱 Responsive UI
          </h2>
          <p className="text-gray-300 text-sm">
            Fully responsive design that works on all devices.
          </p>
        </div>

        <div className="bg-white/10 p-5 rounded-xl border border-white/20 shadow hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-2 text-blue-400">
            💎 Modern Design
          </h2>
          <p className="text-gray-300 text-sm">
            Built with modern UI principles like glassmorphism and animations.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-400 text-sm">
        Made with ❤️ using React & News API
      </div>
    </div>
  );
};

export default About;
