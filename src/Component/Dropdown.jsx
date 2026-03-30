import React from 'react'

const Dropdown = ({selectedCategory,setArticles,setSelectedCategory,setPage}) => {
  return (
    <div className='flex md:hidden'>
      <select
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setArticles([]);
          setPage(1);
        }}
        className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-4 py-2 rounded-lg outline-none cursor-pointer hover:border-blue-400 transition"
      >
        <option className="text-black" value="general">
          General
        </option>
        <option className="text-black" value="business">
          Business
        </option>
        <option className="text-black" value="entertainment">
          Entertainment
        </option>
        <option className="text-black" value="health">
          Health
        </option>
        <option className="text-black" value="science">
          Science
        </option>
        <option className="text-black" value="sports">
          Sports
        </option>
        <option className="text-black" value="technology">
          Technology
        </option>
      </select>
    </div>
  );
}

export default Dropdown
