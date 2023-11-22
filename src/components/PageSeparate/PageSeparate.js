import React from "react";

const PageSeparate = ({ children, type }) => {
  let typeClass = "";
  switch (type) {
    case "gray":
      typeClass = "bg-bgColor";
      break;

    default:
      typeClass = "bg-white";
      break;
  }
  return (
    <div className="mb-4 text-base font-medium tracking-widest uppercase separate-page">
      <span className={`relative z-10 pr-4 text-gray-800 ${typeClass}`}>
        {children}
      </span>
    </div>
  );
};

export default PageSeparate;
