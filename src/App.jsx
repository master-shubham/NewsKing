import "./App.css";
import React, { Suspense, lazy } from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import SkeletonCard from "./Component/SkeletonCard";

// Lazy load News
const News = lazy(() => import("./Component/News"));

const App = () => {
  const pageSize = 6;

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  return (
    <Router>
      <Navbar />

      {/* Suspense wrapper */}
      <Suspense fallback={<SkeletonCard/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {categories.map((cat) => (
            <Route
              key={cat}
              path={`/${cat}`}
              element={
                <News
                  key={cat}
                  pageSize={pageSize}
                  country="us"
                  catagory={cat}
                />
              }
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
