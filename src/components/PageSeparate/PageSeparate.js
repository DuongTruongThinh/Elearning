import React from "react";

const PageSeparate = ({ children }) => {
  return (
    <div className="mb-4 text-base font-medium tracking-widest uppercase separate-page">
      <span className="relative z-10 pr-4 text-gray-800 bg-white">
        {children}
      </span>
    </div>
  );
};

export default PageSeparate;
