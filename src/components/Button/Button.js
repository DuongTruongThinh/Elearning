import React from "react";

const Button = ({ type, children, onClick, className }) => {
  let btnTypeClass = "";

  switch (type) {
    case "outline":
      btnTypeClass =
        "border-2 border-white hover:bg-white text-white hover:text-primary";
      break;
    case "primary":
      btnTypeClass = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "primary-outline":
      btnTypeClass =
        "bg-white text-primary hover:bg-primary border border-primary hover:text-white";
      break;
    case "gray-outline":
      btnTypeClass =
        "bg-white text-grey hover:bg-grey border border-grey hover:text-white";
      break;
    case "red":
      btnTypeClass = "bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      btnTypeClass =
        "bg-white text-gray-900 hover:bg-gray-300 border-2 border-white hover:border-gray-300";
      break;
  }

  return (
    <button
      className={`px-5 py-2 text-sm font-medium tracking-wider duration-300 rounded uppercase ${className} ${btnTypeClass} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
