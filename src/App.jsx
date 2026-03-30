import "./App.css";
import React from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";

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

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
           <Home/>
          }
        />
        <Route path="/about" element={<About />} />

        {/* Dynamic Routes */}
        {categories.map((cat) => (
          <Route
            key={cat}
            path={`/${cat}`}
            element={
              <News key={cat} pageSize={pageSize} country="us" catagory={cat} />
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
