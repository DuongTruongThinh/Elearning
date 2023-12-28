import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const SearchComponent = ({ type, className }) => {
  let searchClass = "";
  switch (type) {
    case "light":
      searchClass = "bg-gray-200";
      break;

    default:
      break;
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm("");
  };

  return (
    <div
      className={`flex items-center justify-between ml-auto bg-gray-600 rounded w-80 ${searchClass} ${className}`}
    >
      <input
        type="text"
        placeholder="Tìm kiếm ..."
        className="flex-1 px-3 py-2 bg-transparent outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="p-2 text-lg" onClick={handleSearch}>
        <SearchOutlined />
      </button>
    </div>
  );
};

export default SearchComponent;
