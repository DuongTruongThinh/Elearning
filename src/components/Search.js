import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

const SearchComponent = ({ type }) => {
  let searchClass = "";
  switch (type) {
    case "hidden-bg":
      searchClass = "bg-transparent";
      break;

    default:
      break;
  }

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="w-80 flex items-center justify-between bg-gray-600 rounded  ml-auto">
      <input
        type="text"
        placeholder="Tìm kiếm khóa học..."
        className="px-3 py-2 outline-none flex-1 bg-transparent"
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
