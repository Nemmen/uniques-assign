import React, { useState } from 'react';

const Search = ({ data, setFilteredData, forr }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter data based on search term
    const filtered = data.filter((item) =>
      Object.values(item).some((val) =>
        (val ? val.toString().toLowerCase() : '').includes(value.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <form className="max-w-3xl mx-auto">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#016F6B] focus:border-[#016F6B]"
          placeholder={`Search for ${forr}`}
          required
        />
        {/* <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-[#016F6B] hover:bg-[#298582] focus:ring-4 focus:outline-none focus:ring-[#42dcd7] font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button> */}
      </div>
    </form>
  );
};

export default Search;
