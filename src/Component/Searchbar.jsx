import React from 'react'

const Searchbar = ({searchQuery,setSearchQuery}) => {
  return (
    <div className="relative w-full md:w-64">
      <input
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white px-5 py-2 rounded-lg outline-none focus:border-blue-400 transition placeholder-gray-400"
      />
      <span className="absolute right-3 top-2 text-gray-400">🔍</span>
    </div>
  );
}

export default Searchbar
